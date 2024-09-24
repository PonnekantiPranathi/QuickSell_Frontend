/*
// components/DisplayStatus.js
import React, { useEffect, useState } from 'react';
import '../styles/DisplayStatus.css';
import '../styles/page.css';  // Shared CSS for page layout
import { Backlog, InProgress, ToDo, Done, Cancelled, Add, ThreeDotMenu } from '../components/SvgIcons';
import HeadingStructure from '../components/HeadingStructure';
import Card from '../components/Card'; // Import the Card component

const DisplayStatus = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
    };

    fetchTickets();
  }, []);

  // Sample data for card counts per status
  const statusData = {
    backlog: tickets.filter(ticket => ticket.status === "Backlog").length,
    todo: tickets.filter(ticket => ticket.status === "Todo").length,
    inProgress: tickets.filter(ticket => ticket.status === "In progress").length,
    done: tickets.filter(ticket => ticket.status === "Done").length,
    cancelled: tickets.filter(ticket => ticket.status === "Cancelled").length,
  };

  return (
    <div className="page-container">
      <div className="status-columns">
        <div className="status-column">
          <HeadingStructure
            imageOfName={Backlog}
            name="Backlog"
            cardCount={statusData.backlog}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
          {tickets.filter(ticket => ticket.status === "Backlog").map(ticket => (
            <Card
              key={ticket.id}
              camNumber={`CAM-${ticket.id.split('-')[1]}`}
              userIcon={undefined}
              title={ticket.title}
              status={undefined}
              priority={ticket.priority}
              hasFeatureRequest={ticket.tag.includes("Feature Request")}
            />
          ))}
        </div>

        <div className="status-column">
          <HeadingStructure
            imageOfName={ToDo}
            name="Todo"
            cardCount={statusData.todo}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
          {tickets.filter(ticket => ticket.status === "Todo").map(ticket => (
            <Card
              key={ticket.id}
              camNumber={`CAM-${ticket.id.split('-')[1]}`}
              userIcon={undefined}
              title={ticket.title}
              status={undefined}
              priority={ticket.priority}
              hasFeatureRequest={ticket.tag.includes("Feature Request")}
            />
          ))}
        </div>

        <div className="status-column">
          <HeadingStructure
            imageOfName={InProgress}
            name="In Progress"
            cardCount={statusData.inProgress}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
          {tickets.filter(ticket => ticket.status === "In progress").map(ticket => (
            <Card
              key={ticket.id}
              camNumber={`CAM-${ticket.id.split('-')[1]}`}
              userIcon={undefined}
              title={ticket.title}
              status={undefined}
              priority={ticket.priority}
              hasFeatureRequest={ticket.tag.includes("Feature Request")}
            />
          ))}
        </div>

        <div className="status-column">
          <HeadingStructure
            imageOfName={Done}
            name="Done"
            cardCount={statusData.done}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
          {tickets.filter(ticket => ticket.status === "Done").map(ticket => (
            <Card
              key={ticket.id}
              camNumber={`CAM-${ticket.id.split('-')[1]}`}
              userIcon={undefined}
              title={ticket.title}
              status={undefined}
              priority={ticket.priority}
              hasFeatureRequest={ticket.tag.includes("Feature Request")}
            />
          ))}
        </div>

        <div className="status-column">
          <HeadingStructure
            imageOfName={Cancelled}
            name="Cancelled"
            cardCount={statusData.cancelled}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
          {tickets.filter(ticket => ticket.status === "Cancelled").map(ticket => (
            <Card
              key={ticket.id}
              camNumber={`CAM-${ticket.id.split('-')[1]}`}
              userIcon={undefined}
              title={ticket.title}
              status={undefined}
              priority={ticket.priority}
              hasFeatureRequest={ticket.tag.includes("Feature Request")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayStatus;
*/


import React, { useEffect, useState } from 'react'; 
import '../styles/DisplayStatus.css';
import '../styles/page.css';  // Shared CSS for page layout
import { Backlog, InProgress, ToDo, Done, Cancelled, Add, ThreeDotMenu } from '../components/SvgIcons';
import HeadingStructure from '../components/HeadingStructure';
import Card from '../components/Card'; // Import the Card component
import { useLocation } from 'react-router-dom';

const priorityMap = {
  "High": 3,
  "Medium": 2,
  "Low": 1,
  "No Priority": 0,
  "Urgent": 4,
};

const DisplayStatus = () => {
  const [tickets, setTickets] = useState([]);
  const location = useLocation();
  const selectedOrderingOption = location.pathname.split('/').pop(); // Get selected ordering option from URL

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
    };

    fetchTickets();
  }, []);

  // Sample data for card counts per status
  const statusData = {
    backlog: tickets.filter(ticket => ticket.status === "Backlog").length,
    todo: tickets.filter(ticket => ticket.status === "Todo").length,
    inProgress: tickets.filter(ticket => ticket.status === "In progress").length,
    done: tickets.filter(ticket => ticket.status === "Done").length,
    cancelled: tickets.filter(ticket => ticket.status === "Cancelled").length,
  };

  // Function to get sorted tickets based on ordering
  const getSortedTickets = (status) => {
    const filteredTickets = tickets.filter(ticket => ticket.status === status);
    
    if (selectedOrderingOption === 'title-ordering-status') {
      return filteredTickets.sort((a, b) => a.title.localeCompare(b.title)); // Sort by title
    } else if (selectedOrderingOption === 'priority-ordering-status') {
      // Log the filtered tickets for debugging
      
      return filteredTickets.sort((a, b) => b.priority - a.priority); // Sort by priority (descending)
    }
    
    return filteredTickets; // Return unsorted tickets if no ordering is selected
  };
  

  return (
    <div className="page-container">
      <div className="status-columns">
        {/* Backlog Column */}
        <div className="status-column">
          <HeadingStructure
            imageOfName={Backlog}
            name="Backlog"
            cardCount={statusData.backlog}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
          {getSortedTickets("Backlog").map(ticket => (
            <Card
              key={ticket.id}
              camNumber={`CAM-${ticket.id.split('-')[1]}`}
              userIcon={undefined}
              title={ticket.title}
              status={undefined}
              priority={ticket.priority}
              hasFeatureRequest={ticket.tag.includes("Feature Request")}
            />
          ))}
        </div>

        {/* Todo Column */}
        <div className="status-column">
          <HeadingStructure
            imageOfName={ToDo}
            name="Todo"
            cardCount={statusData.todo}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
          {getSortedTickets("Todo").map(ticket => (
            <Card
              key={ticket.id}
              camNumber={`CAM-${ticket.id.split('-')[1]}`}
              userIcon={undefined}
              title={ticket.title}
              status={undefined}
              priority={ticket.priority}
              hasFeatureRequest={ticket.tag.includes("Feature Request")}
            />
          ))}
        </div>

        {/* In Progress Column */}
        <div className="status-column">
          <HeadingStructure
            imageOfName={InProgress}
            name="In Progress"
            cardCount={statusData.inProgress}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
          {getSortedTickets("In progress").map(ticket => (
            <Card
              key={ticket.id}
              camNumber={`CAM-${ticket.id.split('-')[1]}`}
              userIcon={undefined}
              title={ticket.title}
              status={undefined}
              priority={ticket.priority}
              hasFeatureRequest={ticket.tag.includes("Feature Request")}
            />
          ))}
        </div>

        {/* Done Column */}
        <div className="status-column">
          <HeadingStructure
            imageOfName={Done}
            name="Done"
            cardCount={statusData.done}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
          {getSortedTickets("Done").map(ticket => (
            <Card
              key={ticket.id}
              camNumber={`CAM-${ticket.id.split('-')[1]}`}
              userIcon={undefined}
              title={ticket.title}
              status={undefined}
              priority={ticket.priority}
              hasFeatureRequest={ticket.tag.includes("Feature Request")}
            />
          ))}
        </div>

        {/* Cancelled Column */}
        <div className="status-column">
          <HeadingStructure
            imageOfName={Cancelled}
            name="Cancelled"
            cardCount={statusData.cancelled}
            AddIcon={Add}
            MenuIcon={ThreeDotMenu}
          />
          {getSortedTickets("Cancelled").map(ticket => (
            <Card
              key={ticket.id}
              camNumber={`CAM-${ticket.id.split('-')[1]}`}
              userIcon={undefined}
              title={ticket.title}
              status={undefined}
              priority={ticket.priority}
              hasFeatureRequest={ticket.tag.includes("Feature Request")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayStatus;
