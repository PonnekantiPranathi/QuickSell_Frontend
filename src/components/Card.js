// components/Card.js
import React from 'react';
import '../styles/Card.css'; // Optional styling for the card
import { UrgentPriorityColour, HighPriority, LowPriority, MediumPriority, NoPriority, Backlog,
    InProgress,
    ToDo,
    Done,
    Cancelled } from '../components/SvgIcons'; // Import your priority icons
import AvatarPlaceholder from './AvatarPlaceholder';

const Card = ({ camNumber, userIcon, status, title, priority, hasFeatureRequest }) => {
  // Function to determine the appropriate priority icon based on the priority value
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4:
        return <UrgentPriorityColour />;
      case 3:
        return <HighPriority />;
      case 2:
        return <MediumPriority />;
      case 1:
        return <LowPriority />;
      case 0:
        return <NoPriority />;
      default:
        return null; // Return null if no valid priority
    }
  };

  const statusImages = {
    "Backlog": <Backlog />,
    "In progress": <InProgress />,
    "Todo": <ToDo />,
    "Done": <Done />,
    "Cancelled": <Cancelled />,
  };


  return (
    <div className="card">
      <div className="card-header">
        <span>{camNumber}</span>
        {userIcon ? (
          <img src={userIcon} alt="User Icon" className="user-icon" />
        ) : (
          <AvatarPlaceholder /> // Use AvatarPlaceholder if userIcon is not available
        )}
      </div>
      <div className="card-body">
        {status && (
          <div className="card-status">
            {statusImages[status] || "Unknown Status"} 
          </div>
        )}
        <div className="card-title">{title}</div>
      </div>
      <div className="card-footer">
        {priority !== undefined && (
          <div className="card-priority">
            {getPriorityIcon(priority)}
          </div>
        )}
        {hasFeatureRequest && <div className="feature-request">Feature Request</div>}
      </div>
    </div>
  );
};

export default Card;
