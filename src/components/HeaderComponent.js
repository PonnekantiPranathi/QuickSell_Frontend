import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import { Display, Down } from './SvgIcons';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [groupingDropdownVisible, setGroupingDropdownVisible] = useState(false);
  const [orderingDropdownVisible, setOrderingDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Status'); // Default selection for grouping
  const [selectedOrderingOption, setSelectedOrderingOption] = useState('Priority'); // Default selection for ordering
  const navigate = useNavigate();
  
  // Create a ref for the dropdown container
  const dropdownRef = useRef(null);

  // Effect to handle clicks outside of the dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setGroupingDropdownVisible(false);
        setOrderingDropdownVisible(false);
        setDropdownVisible(false); // Optionally close the main dropdown
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle the display dropdown
  const toggleDisplayDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Toggle the grouping dropdown
  const toggleGroupingDropdown = () => {
    setGroupingDropdownVisible(!groupingDropdownVisible);
    setOrderingDropdownVisible(false); // Close ordering dropdown
  };

  // Toggle the ordering dropdown
  const toggleOrderingDropdown = () => {
    setOrderingDropdownVisible(!orderingDropdownVisible);
    setGroupingDropdownVisible(false); // Close grouping dropdown
  };

  // Handle option selection for grouping
  const handleGroupingSelection = (option) => {
    setSelectedOption(option);
    navigate(`/${option.toLowerCase()}`); // Navigate to the selected page
    setGroupingDropdownVisible(false); // Hide grouping dropdown after selection
  };

  // Handle option selection for ordering
  // Handle option selection for ordering
  const handleOrderingSelection = (option) => {
    setSelectedOrderingOption(option);

    // Check the selected grouping option
    if (selectedOption === 'Status') {
        if (option === 'Title') {
            navigate(`/title-ordering-status`); // Navigate to the title ordering route with grouping as Status
        } else {
            navigate(`/priority-ordering-status`); // Navigate to the priority ordering route with grouping as Status
        }
    } else if (selectedOption === 'Priority') {
        if (option === 'Title') {
            navigate(`/title-ordering-priority`); // Navigate to the title ordering route with grouping as Priority
        } else {
            navigate(`/priority-ordering-priority`); // Navigate to the priority ordering route with grouping as Priority
        }
    } else if (selectedOption === 'User') {
        if (option === 'Title') {
            navigate(`/title-ordering-user`); // Navigate to the title ordering route with grouping as User
        } else {
            navigate(`/priority-ordering-user`); // Navigate to the priority ordering route with grouping as User
        }
    }

    setOrderingDropdownVisible(false); // Hide ordering dropdown after selection
};




  return (
    <header className="header">
      <div className="header-box" ref={dropdownRef}>
        <button className="header-button" onClick={toggleDisplayDropdown}>
          <Display className="header-icon" />
          <span className="header-text">Display</span>
          <Down className="scroll-icon" />
        </button>

        {dropdownVisible && (
          <div className="dropdown">
            <div className="dropdown-item">
              <span>Grouping</span>

              <div className="grouping-box" onClick={toggleGroupingDropdown}>
                <span>{selectedOption}</span>
                <Down className="scroll-icon" />
              </div>

              {groupingDropdownVisible && (
                <div className="grouping-dropdown">
                  <div className="dropdown-item" onClick={() => handleGroupingSelection('Status')}>
                    Status
                  </div>
                  <div className="dropdown-item" onClick={() => handleGroupingSelection('Priority')}>
                    Priority
                  </div>
                  <div className="dropdown-item" onClick={() => handleGroupingSelection('User')}>
                    User
                  </div>
                </div>
              )}
            </div>

            <div className="dropdown-item">
              <span>Ordering</span>

              <div className="ordering-box" onClick={toggleOrderingDropdown}>
                <span>{selectedOrderingOption}</span>
                <Down className="scroll-icon" />
              </div>

              {orderingDropdownVisible && (
                <div className="ordering-dropdown">
                  <div className="dropdown-item" onClick={() => handleOrderingSelection('Priority')}>
                    Priority
                  </div>
                  <div className="dropdown-item" onClick={() => handleOrderingSelection('Title')}>
                    Title
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


