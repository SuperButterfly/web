import React, { useEffect, useRef, useState, useCallback } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Peer from "simple-peer";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  const [state, setState] = useState({
    me: "",
    stream: null,
    receivingCall: false,
    caller: "",
    callerSignal: null,
    callAccepted: false,
    idToCall: "",
    callEnded: false,
    name: "",
  });

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  const {
    me,
    stream,
    receivingCall,
    caller,
    callerSignal,
    callAccepted,
    idToCall,
    callEnded,
    name,
  } = state;

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      setState((prevState) => ({ ...prevState, stream }));
      if (myVideo.current) {
        myVideo.current.srcObject = stream;
      }
    });

    socket.on("me", (id) => {
      console.log("Received 'me' event with ID:", id);
      setState((prevState) => ({ ...prevState, me: id }));
    });

    socket.on("callUser", (data) => {
      setState((prevState) => ({
        ...prevState,
        receivingCall: true,
        caller: data.from,
        name: data.name,
        callerSignal: data.signal,
      }));
    });

    socket.on("callAccepted", (signal) => {
      setState((prevState) => ({ ...prevState, callAccepted: true }));
      connectionRef.current.signal(signal);
    });

    socket.on("callEnded", () => {
      setState((prevState) => ({ ...prevState, callEnded: true }));
    });

    console.log("Socket connected:", socket.connected);
  }, []);

  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      });
    });
    peer.on("stream", (stream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    });
    socket.on("callAccepted", (signal) => {
      setState((prevState) => ({ ...prevState, callAccepted: true }));
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const answerCall = () => {
    setState((prevState) => ({ ...prevState, callAccepted: true }));
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller });
    });
    peer.on("stream", (stream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setState((prevState) => ({ ...prevState, callEnded: true }));
    connectionRef.current.destroy();
  };

  const copyToClipboard = useCallback(() => {
    if (me) {
      const id = me;

      const tempInputElement = document.createElement("input");
      tempInputElement.value = id;

      document.body.appendChild(tempInputElement);

      tempInputElement.select();
      tempInputElement.setSelectionRange(0, 99999); // For mobile devices

      try {
        const successful = document.execCommand("copy");
        if (successful) {
          console.log("ID copied to clipboard:", id);
        } else {
          console.error("Failed to copy ID to clipboard.");
        }
      } catch (error) {
        console.error("Failed to copy ID to clipboard:", error);
      }

      document.body.removeChild(tempInputElement);
    }
  }, [me]);

  useEffect(() => {
    copyToClipboard();
  }, [me, copyToClipboard]);

  return (
    <>
      <h1 className="text-center text-white">WEB RTC</h1>
      <div className="container">
        <div className="video-container flex justify-center items-center">
          <div className="video">
            {stream && (
              <video playsInline muted ref={myVideo} autoPlay style={{ width: "300px" }} />
            )}
          </div>
          <div className="video">
            {callAccepted && !callEnded && (
              <video playsInline ref={userVideo} autoPlay style={{ width: "300px" }} />
            )}
          </div>
        </div>
        <div className="myId flex flex-col justify-center items-center w-full">
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setState((prevState) => ({ ...prevState, name: e.target.value }))}
            className="bg-gray-200 rounded-md px-4 py-2 w-72"
          />

          <input
            id="idToCall"
            type="text"
            placeholder="ID to call"
            value={idToCall}
            onChange={(e) => setState((prevState) => ({ ...prevState, idToCall: e.target.value }))}
            className="bg-gray-200 rounded-md px-4 py-2 w-72"
          />
          <div className="call-button w-72">
            <CopyToClipboard text={me} onCopy={copyToClipboard}>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md px-4 py-2 w-1/2"
                type="button"
              >
                Copy ID
              </button>
            </CopyToClipboard>
            {callAccepted && !callEnded ? (
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/2"
                onClick={leaveCall}
              >
                End Call
              </button>
            ) : (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-1/2"
                onClick={() => callUser(idToCall)}
              >
                Call
              </button>
            )}
            <span>{idToCall}</span>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          {receivingCall && !callAccepted && (
            <div className="caller w-full flex justify-center items-center">
              <h1>{name} is calling...</h1>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-72"
                onClick={answerCall}
              >
                Answer
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
