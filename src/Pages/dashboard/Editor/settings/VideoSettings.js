import { useState, useEffect } from 'react';
import './videosettings.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateComponent } from '../../../../../src/redux/actions/component.js';

const VideoSettings = () => {

  const [isOpen, setIsOpen] = useState(false);
  /*const [options, setOptions] = useState({
    controls: false,
    loop: false,
    muted: false,
    autoplay: false,
    playsInline: false
  });*/
  const {componentSelected} = useSelector(state=>state.component)
  const dispatch = useDispatch()
  const [input,setInput] = useState({
    src:"",
    poster:"",
    preload:"",
    controls: false,
    loop: false,
    muted: false,
    autoplay: false,
    playsInline: false
  })
  /*const props = {
    video_src: 'video_src',
    video_poster:
      'https://images.unsplash.com/photo-1680180645260-cf8fc26789c7?ixid=Mnw5MTMyMXwwfDF8YWxsfDl8fHx8fHwyfHwxNjgwMjQwODE2&ixlib=rb-4.0.3&w=200',
    image_alt: 'video',
  }*/
  
  const handleClick = attribute => {
    setInput({
      ...input,
      [attribute]: !input[attribute]
    })
    dispatchUpdateComponent(attribute,!input[attribute])
  }
  
  const handlePreload = ev =>{
    setIsOpen(false)
    setInput(prevState=>{
      return{
        ...prevState,
        preload:ev.target.value
      }
    })
    dispatchUpdateComponent('preload',ev.target.value)
  }
  const handleInputChange = ev =>{
    setInput(prevState=>{
      return{
        ...prevState,
        [ev.target.name]:ev.target.value
      }
    })
  }
  const handleBlur = ev =>{
    dispatchUpdateComponent(ev.target.name,ev.target.value)  
  } 
  const dispatchUpdateComponent = (attribute,value) =>{
    dispatch(updateComponent(componentSelected.id,{
      attributes:{
          ...componentSelected.attributes,
          [attribute]:value
        }
      })
    )
  }
  
  
  useEffect(()=>{
    setInput(prevState=>{
      return{
        src:componentSelected.attributes.src,
        poster:componentSelected.attributes.poster,
        preload:componentSelected.attributes.preload,
        controls: componentSelected.attributes.controls,
        loop: componentSelected.attributes.loop,
        muted: componentSelected.attributes.muted,
        autoplay: componentSelected.attributes.autoplay,
        playsInline: componentSelected.attributes.playsInline
      }
    })
  },[componentSelected])
  
  
  
  return (
    <div className="video-settings-video-settings">
      <div className="video-settings-container">
        <span className="video-settings-title">Video</span>
        <svg viewBox="0 0 1024 1024" className="video-settings-clear">
          <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>
      <div className="video-settings-container01">
        <div className="video-settings-source-container">
          <div className="video-settings-src-container">
            <span>src</span>
            <div className="video-settings-container02">
              <input
                type="text"
                value={input.src}
                name="src"
                onBlur={handleBlur}
                onChange={handleInputChange}
                className="video-settings-textinput"
              />
            </div>
          </div>
          <div className="video-settings-poster-container">
            <span>poster</span>
            <div className="video-settings-container03">
              <input
                type="text"
                value={input.poster}
                onBlur={handleBlur}
                name="poster"
                onChange={handleInputChange}
                className="video-settings-textinput1"
              /> 
            </div>
            <img
              alt={"video"}
              src={componentSelected.attributes.poster}
              className="video-settings-thumbail"
            />
          </div>
        </div>
      </div>
      <div className="video-settings-container04">
        <span>controls</span>
        <div 
          className="video-settings-container05"
          style={input.controls ? {
            justifyContent: 'flex-end',
            backgroundColor: '#14A9FF'
          } : {justifyContent: 'flex-start'}}
          onClick={() => handleClick("controls")}
        >
          <div className="video-settings-container06"></div>
        </div>
      </div>
      <div className="video-settings-container07">
        <span>loop</span>
        <div 
          className="video-settings-container08"
          style={input.loop ? {
            justifyContent: 'flex-end',
            backgroundColor: '#14A9FF'
          } : {justifyContent: 'flex-start'}}
          onClick={() => handleClick("loop")}
        >
          <div className="video-settings-container09"></div>
        </div>
      </div>
      <div className="video-settings-container10">
        <span>muted</span>
        <div 
          className="video-settings-container11"
          style={input.muted ? {
            justifyContent: 'flex-end',
            backgroundColor: '#14A9FF'
          } : {justifyContent: 'flex-start'}}
          onClick={() => handleClick("muted")}
        >
          <div className="video-settings-container12"></div>
        </div>
      </div>
      <div className="video-settings-container13">
        <span>autoplay</span>
        <div 
          className="video-settings-container14"
          style={input.autoplay ? {
            justifyContent: 'flex-end',
            backgroundColor: '#14A9FF'
          } : {justifyContent: 'flex-start'}}
          onClick={() => handleClick("autoplay")}
        >
          <div className="video-settings-container15"></div>
        </div>
      </div>
      <div className="video-settings-container16">
        <span>playsInline</span>
        <div 
          className="video-settings-container17"
          style={input.playsInline ? {
            justifyContent: 'flex-end',
            backgroundColor: '#14A9FF'
          } : {justifyContent: 'flex-start'}}
          onClick={() => handleClick("playsInline")}
        >
          <div className="video-settings-container18"></div>
        </div>
      </div>
      <div className="video-settings-preload-container">
        <span>preload</span>
        <div className="video-settings-container19" onClick={() => setIsOpen(!isOpen)}>
          <span>{input.preload? input.preload : "Select an option ..."}</span>
          <svg viewBox="0 0 1024 1024" className="video-settings-open">
            <path d="M298 426h428l-214 214z"></path>
          </svg>
        </div>
      </div>
      {isOpen && <datalist className="video-settings-container20">
        <option value="auto" onClick={handlePreload}>auto</option>
        <option value="metadata" onClick={handlePreload}>metadata</option>
        <option value="none" onClick={handlePreload}>none</option>
      </datalist>
      }
    </div>
  )
}

export default VideoSettings
