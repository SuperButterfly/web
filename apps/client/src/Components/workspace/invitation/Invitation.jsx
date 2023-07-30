import React from 'react'
import './invitation.css'

export default function Invitation({ onClose, onInvite }) {
  return (
    <div className="invitation-card-container">
      <div className="invitation-card">
        <div className="invitation-card-header">
          <h4>You're about to add a new Editor</h4>
          <svg
            onClick={onClose}
            style={{ cursor: 'pointer' }}
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
            />
          </svg>
        </div>
        <div className="invitation-card-texts-container">
          <span>
            Inviting this user will count as a new billable collaborator.
          </span>
          <span>
            We will charge an extra seat, according to your current subscription
            plan and/or your credit balance.
          </span>
          <span>Are you sure you want to invite this user?</span>
        </div>
        <div className="invitation-card-buttons">
          <button onClick={onClose} className="invitation-card-cancel-btn">
            Cancel
          </button>
          <button onClick={onInvite} className="invitation-card-invite-btn">
            Invite and add extra seat
          </button>
        </div>
      </div>
    </div>
  )
}
