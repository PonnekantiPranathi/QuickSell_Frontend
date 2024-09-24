// components/DisplayPriority.js
/*
import React, { useEffect, useState } from 'react';
import '../styles/page.css';  // Shared CSS for page layout
import '../styles/DisplayPriorities.css';
import { 
  HighPriority, 
  LowPriority, 
  MediumPriority, 
  NoPriority, 
  UrgentPriorityColour, 
  Add, 
  ThreeDotMenu 
} from '../components/SvgIcons';
import HeadingStructure from '../components/HeadingStructure';

const DisplayPriority = () => {
  // Sample data for card counts per priority
  const priorityData = {
    high: 4,
    low: 2,
    medium: 5,
    noPriority: 1,
    urgent: 3,
  };

  return (
    <div className="page-container">
      <div className="priority-columns">

        <div className="priority-column">
          <HeadingStructure
            imageOfName={NoPriority}
            name="No Priority"
            cardCount={priorityData.noPriority}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
        </div>

        <div className="priority-column">
          <HeadingStructure
            imageOfName={UrgentPriorityColour}
            name="Urgent Priority"
            cardCount={priorityData.urgent}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
        </div>
        
        <div className="priority-column">
          <HeadingStructure
            imageOfName={HighPriority}
            name="High Priority"
            cardCount={priorityData.high}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
        </div>

        <div className="priority-column">
          <HeadingStructure
            imageOfName={MediumPriority}
            name="Medium Priority"
            cardCount={priorityData.medium}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
        </div>

        <div className="priority-column">
          <HeadingStructure
            imageOfName={LowPriority}
            name="Low Priority"
            cardCount={priorityData.low}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
        </div>

        

        
      </div>
    </div>
  );
};

export default DisplayPriority;
*/

// components/DisplayPriority.js
// components/DisplayPriority.js
import React, { useEffect, useState } from 'react';
import '../styles/page.css';  // Shared CSS for page layout
import '../styles/DisplayPriorities.css';
import { 
  HighPriority, 
  LowPriority, 
  MediumPriority, 
  NoPriority, 
  UrgentPriorityColour, 
  Add, 
  ThreeDotMenu 
} from '../components/SvgIcons';
import HeadingStructure from '../components/HeadingStructure';
import Card from '../components/Card';
import { useLocation } from 'react-router-dom';  // Import useLocation

const DisplayPriority = () => {
  const [tickets, setTickets] = useState([]);
  const location = useLocation(); // Get location to detect sorting option
  const selectedOrderingOption = location.pathname.split('/').pop(); // Get ordering option from URL

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      console.log(data.tickets); 
      setTickets(data.tickets);
    };

    fetchTickets();
  }, []);

  // Function to get sorted tickets based on ordering
  const getSortedTickets = (tickets) => {
    if (selectedOrderingOption === 'title-ordering-priority') {
      return tickets.sort((a, b) => a.title.localeCompare(b.title)); 
    } else if (selectedOrderingOption === 'status-ordering-priority') {
      return tickets.sort((a, b) => b.priority - a.priority);
    }
    return tickets; // Return unsorted if no ordering is selected
  };

  // Filter tickets by numeric priority values (0 to 4)
  const filteredTickets = {
    noPriority: getSortedTickets(tickets.filter(ticket => ticket.priority === 0)),
    urgent: getSortedTickets(tickets.filter(ticket => ticket.priority === 4)),
    high: getSortedTickets(tickets.filter(ticket => ticket.priority === 3)),
    medium: getSortedTickets(tickets.filter(ticket => ticket.priority === 2)),
    low: getSortedTickets(tickets.filter(ticket => ticket.priority === 1)),
  };

  return (
    <div className="page-container">
      <div className="priority-columns">

        {/* No Priority Column */}
        <div className="priority-column">
          <HeadingStructure
            imageOfName={NoPriority}
            name="No Priority"
            cardCount={filteredTickets.noPriority.length}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
          {filteredTickets.noPriority.map(ticket => (
            <Card
              key={ticket.id}
              camNumber={`CAM-${ticket.id.split('-')[1]}`}
              userIcon={undefined}
              title={ticket.title}
              status={ticket.status}  
              priority={undefined}  
              hasFeatureRequest={ticket.tag.includes("Feature Request")}
            />
          ))}
        </div>

        {/* Urgent Priority Column */}
        <div className="priority-column">
          <HeadingStructure
            imageOfName={UrgentPriorityColour}
            name="Urgent Priority"
            cardCount={filteredTickets.urgent.length}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
          {filteredTickets.urgent.map(ticket => (
            <Card
              key={ticket.id}
              camNumber={`CAM-${ticket.id.split('-')[1]}`}
              userIcon={undefined}
              title={ticket.title}
              status={ticket.status}
              priority={undefined}
              hasFeatureRequest={ticket.tag.includes("Feature Request")}
            />
          ))}
        </div>

        {/* High Priority Column */}
        <div className="priority-column">
          <HeadingStructure
            imageOfName={HighPriority}
            name="High Priority"
            cardCount={filteredTickets.high.length}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
          {filteredTickets.high.map(ticket => (
            <Card
              key={ticket.id}
              camNumber={`CAM-${ticket.id.split('-')[1]}`}
              userIcon={undefined}
              title={ticket.title}
              status={ticket.status}
              priority={undefined}
              hasFeatureRequest={ticket.tag.includes("Feature Request")}
            />
          ))}
        </div>

        {/* Medium Priority Column */}
        <div className="priority-column">
          <HeadingStructure
            imageOfName={MediumPriority}
            name="Medium Priority"
            cardCount={filteredTickets.medium.length}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
          {filteredTickets.medium.map(ticket => (
            <Card
              key={ticket.id}
              camNumber={`CAM-${ticket.id.split('-')[1]}`}
              userIcon={undefined}
              title={ticket.title}
              status={ticket.status}
              priority={undefined}
              hasFeatureRequest={ticket.tag.includes("Feature Request")}
            />
          ))}
        </div>

        {/* Low Priority Column */}
        <div className="priority-column">
          <HeadingStructure
            imageOfName={LowPriority}
            name="Low Priority"
            cardCount={filteredTickets.low.length}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
          {filteredTickets.low.map(ticket => (
            <Card
              key={ticket.id}
              camNumber={`CAM-${ticket.id.split('-')[1]}`}
              userIcon={undefined}
              title={ticket.title}
              status={ticket.status}
              priority={undefined}
              hasFeatureRequest={ticket.tag.includes("Feature Request")}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default DisplayPriority;
