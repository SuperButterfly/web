import './popmenu.css'
import { useNavigate } from 'react-router';

const Popmenu = ({closeMenu1, closeModal1}) => {
  let navigate = useNavigate();
  
  return (
    <div className="popmenu-menu" >
      <div 
        className="popmenu-menu-item"
        onClick={() => navigate('/workspace/templates')}
      >
        <span>Dashboard</span>
      </div>
      <div className="popmenu-menu-item1" onClick={() => closeMenu1(false)}>
        <svg viewBox="0 0 1024 1024" className="popmenu-set">
          <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
        </svg>
        <span>Project Settings</span>
      </div>
      <div className="popmenu-menu-item2" onClick={() => closeMenu1(false)}>
        <span>Edit</span>
        <svg viewBox="0 0 1024 1024" className="popmenu-arrow">
          <path d="M426 726v-428l214 214z"></path>
        </svg>
      </div>
      <div className="popmenu-menu-item3" onClick={() => closeMenu1(false)}>
        <span>View</span>
        <svg viewBox="0 0 1024 1024" className="popmenu-arrow1">
          <path d="M426 726v-428l214 214z"></path>
        </svg>
      </div>
      <div 
        className="popmenu-menu-item4" 
        onClick={() => closeMenu1(false)}
      >
        <span>Import</span>
        <svg viewBox="0 0 1024 1024" className="popmenu-arrow2">
          <path d="M426 726v-428l214 214z"></path>
        </svg>
        <div 
          className="popmenu-submenu-item4" 
          onClick={() => {
            closeModal1(true);
            closeMenu1(false);
          }}
        >
          <span>From teleport</span>
        </div>
      </div>
      <div className="popmenu-menu-item2" onClick={() => navigate('/database')}>
        <span>Database</span>
        <svg viewBox="0 0 1024 1024" className="popmenu-arrow">
          <path d="M426 726v-428l214 214z"></path>
        </svg>
      </div>
      <div className="popmenu-menu-item5" onClick={() => closeMenu1(false)}>
        <span>Help</span>
        <svg viewBox="0 0 1024 1024" className="popmenu-arrow2">
          <path d="M426 726v-428l214 214z"></path>
        </svg>
      </div>
      <div className="popmenu-menu-item6" onClick={() => closeMenu1(false)}>
        <span>Account</span>
        <svg viewBox="0 0 1024 1024" className="popmenu-arrow3">
          <path d="M426 726v-428l214 214z"></path>
        </svg>
      </div>
    </div>
  )
}

export default Popmenu
