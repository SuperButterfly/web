import react from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './AcceptInvitation.css'

const AcceptInvitation = ({ onInvite, onClose, handleDeleteInvitation }) => {
  const { user } = useSelector((state) => state.user)

  return (
    <div className="notifications-container">
      <h1 className="notifications-title">Notificaciones</h1>
      <div style={{ textAlign: 'center' }}>
        {user.notifications?.map((item) => (
          <div className="notification-list-item" key={item.id}>
            <p className="notification-type">{item.type}</p>
            <p className="notification-message">{item.message}</p>
            <div className="notification-buttons-container">
              <button
                className="notification-btn-check"
                onClick={(e) =>
                  onInvite(item.user_notification?.UserId, item.message)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15px"
                  height="15px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
                  />
                </svg>
              </button>
              <button
                className="notification-btn-cancel"
                onClick={(e) => handleDeleteInvitation(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15px"
                  height="15px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AcceptInvitation
