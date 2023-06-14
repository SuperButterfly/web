import './share.css'

const props = {
  letter1: 'U',
  role1: 'Owner',
  letter2: 'A',
  user1: 'Aythen Teleporthq',
  user2: 'Aythen Company',
  role2: 'Viewer',
}

const Share = ({ isShareOn, closeShare }) => {
  if (isShareOn) {
    return (
      <div className="modal-overlay">
    <div className="share-container">
      <div className="share-container01">
        <div className="share-container02">
          <span>Collaborators</span>
          <button className="share-button" onClick={() => closeShare(false)} >X</button>
        </div>
        <div className="share-container03">
          <div className="share-container04">
            <input type="email" id="email" className="share-textinput" />
            <button className="share-button1">
              <span>Edit</span>
              <svg viewBox="0 0 1024 1024" className="share-icon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </button>
            <div className="share-container05">
              <div className="share-container06">
                <svg viewBox="0 0 1024 1024" className="share-icon02">
                  <path d="M864 128l-480 480-224-224-160 160 384 384 640-640z"></path>
                </svg>
                <span>Editor</span>
              </div>
              <div className="share-container07">
                <svg viewBox="0 0 1024 1024" className="share-icon04">
                  <path d="M864 128l-480 480-224-224-160 160 384 384 640-640z"></path>
                </svg>
                <span>Viewer</span>
              </div>
            </div>
          </div>
          <button className="share-button2">send invite</button>
        </div>
        <div className="share-container08">
          <div className="share-container09">
            <span>workspace collaborators</span>
            <svg viewBox="0 0 1024 1024" className="share-icon06">
              <path d="M470 384v-86h84v86h-84zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 726v-256h84v256h-84z"></path>
            </svg>
          </div>
          <div className="share-container10">
            <div className="share-container11">
              <div className="share-container12">
                <span className="share-text05">{props.letter1}</span>
              </div>
              <span>{props.user1}</span>
            </div>
            <span>{props.role1}</span>
          </div>
          <div className="share-container13">
            <div className="share-container14">
              <div className="share-container15">
                <span className="share-text08">{props.letter2}</span>
              </div>
              <span>{props.user2}</span>
            </div>
            <span>{props.role2}</span>
          </div>
        </div>
      </div>
      <div className="share-container16">
        <span>Public access</span>
        <div className="share-container17">
          <svg width="47" height="46" viewBox="0 0 17 16" fill="blue" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.333 8a7.167 7.167 0 1114.334 0A7.167 7.167 0 011.333 8zM8.5 1.833a6.167 6.167 0 100 12.334 6.167 6.167 0 000-12.334z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.333 8a.5.5 0 01.5-.5h13.334a.5.5 0 010 1H1.833a.5.5 0 01-.5-.5z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5.833a.5.5 0 01.37.163 10.7 10.7 0 012.796 7.014 10.7 10.7 0 01-2.797 6.994.5.5 0 01-.738 0A10.7 10.7 0 015.333 7.99 10.7 10.7 0 018.131.996.5.5 0 018.5.833zM6.333 8A9.7 9.7 0 008.5 13.9 9.7 9.7 0 0010.666 8 9.7 9.7 0 008.5 2.1 9.7 9.7 0 006.333 8z"></path>
          </svg>
          <div className="share-container19">
            <button className="share-button3 button">
              <span className="share-text12">Restricted</span>
              <svg viewBox="0 0 1024 1024" className="share-icon12">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </button>
            <span className="share-text13">Only collaborators can accsses</span>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
  }
  else return null;
};

export default Share;
