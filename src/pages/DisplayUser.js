/*
import React, { useEffect, useState } from 'react';
import '../styles/DisplayUser.css';
import '../styles/page.css';  // Shared CSS for page layout
import { Backlog, InProgress, ToDo, Done, Cancelled, Add, ThreeDotMenu } from '../components/SvgIcons';
import HeadingStructure from '../components/HeadingStructure';

const DisplayUsers = () => {
    // Sample data for card counts per user
    const userData = {
      anoopSharma: 5,
      yogesh: 3,
      shankarKumar: 7,
      ramesh: 8,
      suresh: 2,
    };
  
    return (
      <div className="user-page-container">
        <div className="user-columns">
          <div className="user-column">
            <HeadingStructure
              imageOfName={Backlog}  // Reuse the same icons from DisplayStatus
              name="Anoop Sharma"
              cardCount={userData.anoopSharma}
              AddIcon={Add}
              MenuIcon={ThreeDotMenu}
            />
          </div>
  
          <div className="user-column">
            <HeadingStructure
              imageOfName={ToDo}  // Reuse the same icons from DisplayStatus
              name="Yogesh"
              cardCount={userData.yogesh}
              AddIcon={Add}
              MenuIcon={ThreeDotMenu}
            />
          </div>
  
          <div className="user-column">
            <HeadingStructure
              imageOfName={InProgress}  // Reuse the same icons from DisplayStatus
              name="Shankar Kumar"
              cardCount={userData.shankarKumar}
              AddIcon={Add}
              MenuIcon={ThreeDotMenu}
            />
          </div>
  
          <div className="user-column">
            <HeadingStructure
              imageOfName={Done}  // Reuse the same icons from DisplayStatus
              name="Ramesh"
              cardCount={userData.ramesh}
              AddIcon={Add}
              MenuIcon={ThreeDotMenu}
            />
          </div>
  
          <div className="user-column">
            <HeadingStructure
              imageOfName={Cancelled}  // Reuse the same icons from DisplayStatus
              name="Suresh"
              cardCount={userData.suresh}
              AddIcon={Add}
              MenuIcon={ThreeDotMenu}
            />
          </div>
        </div>
      </div>
    );
  };

export default DisplayUsers;
*/

/*
import React, { useEffect, useState } from 'react';
import '../styles/DisplayUser.css';
import '../styles/page.css';  // Shared CSS for page layout
import { Backlog, InProgress, ToDo, Done, Cancelled, Add, ThreeDotMenu } from '../components/SvgIcons';
import HeadingStructure from '../components/HeadingStructure';
import Card from '../components/Card'; // Import the Card component
import AvatarPlaceholder from '../components/AvatarPlaceholder';

const DisplayUsers = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
            const data = await response.json();
            setTickets(data.tickets);
        };

        fetchTickets();
    }, []);

    // Sample data for user counts based on user IDs
    const userData = {
        anoopSharma: tickets.filter(ticket => ticket.userId === "usr-1").length,
        yogesh: tickets.filter(ticket => ticket.userId === "usr-2").length,
        shankarKumar: tickets.filter(ticket => ticket.userId === "usr-3").length,
        ramesh: tickets.filter(ticket => ticket.userId === "usr-4").length,
        suresh: tickets.filter(ticket => ticket.userId === "usr-5").length,
    };

    return (
        <div className="user-page-container">
            <div className="user-columns">
                <div className="user-column">
                    <HeadingStructure
                        imageOfName={AvatarPlaceholder}  
                        name="Anoop Sharma"
                        cardCount={userData.anoopSharma}
                        AddIcon={Add}
                        MenuIcon={ThreeDotMenu}
                    />
                    {tickets.filter(ticket => ticket.userId === "usr-1").map(ticket => (
                        <Card
                            key={ticket.id}
                            camNumber={`CAM-${ticket.id.split('-')[1]}`}
                            userIcon={undefined}  // User icon is undefined
                            title={ticket.title}
                            status={undefined}
                            priority={ticket.priority}
                            hasFeatureRequest={ticket.tag.includes("Feature Request")}
                        />
                    ))}
                </div>

                <div className="user-column">
                    <HeadingStructure
                        imageOfName={AvatarPlaceholder}  // Reuse the same icons
                        name="Yogesh"
                        cardCount={userData.yogesh}
                        AddIcon={Add}
                        MenuIcon={ThreeDotMenu}
                    />
                    {tickets.filter(ticket => ticket.userId === "usr-2").map(ticket => (
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

                <div className="user-column">
                    <HeadingStructure
                        imageOfName={AvatarPlaceholder}  // Reuse the same icons
                        name="Shankar Kumar"
                        cardCount={userData.shankarKumar}
                        AddIcon={Add}
                        MenuIcon={ThreeDotMenu}
                    />
                    {tickets.filter(ticket => ticket.userId === "usr-3").map(ticket => (
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

                <div className="user-column">
                    <HeadingStructure
                        imageOfName={AvatarPlaceholder}  // Reuse the same icons
                        name="Ramesh"
                        cardCount={userData.ramesh}
                        AddIcon={Add}
                        MenuIcon={ThreeDotMenu}
                    />
                    {tickets.filter(ticket => ticket.userId === "usr-4").map(ticket => (
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

                <div className="user-column">
                    <HeadingStructure
                        imageOfName={AvatarPlaceholder}  // Reuse the same icons
                        name="Suresh"
                        cardCount={userData.suresh}
                        AddIcon={Add}
                        MenuIcon={ThreeDotMenu}
                    />
                    {tickets.filter(ticket => ticket.userId === "usr-5").map(ticket => (
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

export default DisplayUsers; */


import React, { useEffect, useState } from 'react';
import '../styles/DisplayUser.css';
import '../styles/page.css';
import { Backlog, InProgress, ToDo, Done, Cancelled, Add, ThreeDotMenu } from '../components/SvgIcons';
import HeadingStructure from '../components/HeadingStructure';
import Card from '../components/Card';
import AvatarPlaceholder from '../components/AvatarPlaceholder';
import { useLocation } from 'react-router-dom'; // Import useLocation

const DisplayUsers = () => {
    const [tickets, setTickets] = useState([]);
    const location = useLocation();
    const selectedOrderingOption = location.pathname.split('/').pop(); // Get ordering option from URL

    useEffect(() => {
        const fetchTickets = async () => {
            const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
            const data = await response.json();
            setTickets(data.tickets);
        };

        fetchTickets();
    }, []);

    // Updated getSortedTickets function
    const getSortedTickets = (tickets) => {
        if (selectedOrderingOption === 'title-ordering-user') {
            return tickets.sort((a, b) => a.title.localeCompare(b.title)); // Sort by title
        } else if (selectedOrderingOption === 'priority-ordering-user') {
            return tickets.sort((a, b) => b.priority - a.priority); // Sort by priority (ascending)
        }
        return tickets; // Return unsorted if no ordering is selected
    };

    // Filter tickets by user
    const userData = {
        anoopSharma: getSortedTickets(tickets.filter(ticket => ticket.userId === "usr-1")),
        yogesh: getSortedTickets(tickets.filter(ticket => ticket.userId === "usr-2")),
        shankarKumar: getSortedTickets(tickets.filter(ticket => ticket.userId === "usr-3")),
        ramesh: getSortedTickets(tickets.filter(ticket => ticket.userId === "usr-4")),
        suresh: getSortedTickets(tickets.filter(ticket => ticket.userId === "usr-5")),
    };

    return (
        <div className="user-page-container">
            <div className="user-columns">
                {/* Anoop Sharma Column */}
                <div className="user-column">
                    <HeadingStructure
                        imageOfName={AvatarPlaceholder}
                        name="Anoop Sharma"
                        cardCount={userData.anoopSharma.length}
                        AddIcon={Add}
                        MenuIcon={ThreeDotMenu}
                    />
                    {userData.anoopSharma.map(ticket => (
                        <Card
                            key={ticket.id}
                            camNumber={`CAM-${ticket.id.split('-')[1]}`}
                            userIcon={undefined}
                            title={ticket.title}
                            priority={ticket.priority}
                            hasFeatureRequest={ticket.tag.includes("Feature Request")}
                        />
                    ))}
                </div>

                {/* Yogesh Column */}
                <div className="user-column">
                    <HeadingStructure
                        imageOfName={AvatarPlaceholder}
                        name="Yogesh"
                        cardCount={userData.yogesh.length}
                        AddIcon={Add}
                        MenuIcon={ThreeDotMenu}
                    />
                    {userData.yogesh.map(ticket => (
                        <Card
                            key={ticket.id}
                            camNumber={`CAM-${ticket.id.split('-')[1]}`}
                            userIcon={undefined}
                            title={ticket.title}
                            priority={ticket.priority}
                            hasFeatureRequest={ticket.tag.includes("Feature Request")}
                        />
                    ))}
                </div>

                {/* Shankar Kumar Column */}
                <div className="user-column">
                    <HeadingStructure
                        imageOfName={AvatarPlaceholder}
                        name="Shankar Kumar"
                        cardCount={userData.shankarKumar.length}
                        AddIcon={Add}
                        MenuIcon={ThreeDotMenu}
                    />
                    {userData.shankarKumar.map(ticket => (
                        <Card
                            key={ticket.id}
                            camNumber={`CAM-${ticket.id.split('-')[1]}`}
                            userIcon={undefined}
                            title={ticket.title}
                            priority={ticket.priority}
                            hasFeatureRequest={ticket.tag.includes("Feature Request")}
                        />
                    ))}
                </div>

                {/* Ramesh Column */}
                <div className="user-column">
                    <HeadingStructure
                        imageOfName={AvatarPlaceholder}
                        name="Ramesh"
                        cardCount={userData.ramesh.length}
                        AddIcon={Add}
                        MenuIcon={ThreeDotMenu}
                    />
                    {userData.ramesh.map(ticket => (
                        <Card
                            key={ticket.id}
                            camNumber={`CAM-${ticket.id.split('-')[1]}`}
                            userIcon={undefined}
                            title={ticket.title}
                            priority={ticket.priority}
                            hasFeatureRequest={ticket.tag.includes("Feature Request")}
                        />
                    ))}
                </div>

                {/* Suresh Column */}
                <div className="user-column">
                    <HeadingStructure
                        imageOfName={AvatarPlaceholder}
                        name="Suresh"
                        cardCount={userData.suresh.length}
                        AddIcon={Add}
                        MenuIcon={ThreeDotMenu}
                    />
                    {userData.suresh.map(ticket => (
                        <Card
                            key={ticket.id}
                            camNumber={`CAM-${ticket.id.split('-')[1]}`}
                            userIcon={undefined}
                            title={ticket.title}
                            priority={ticket.priority}
                            hasFeatureRequest={ticket.tag.includes("Feature Request")}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DisplayUsers;
