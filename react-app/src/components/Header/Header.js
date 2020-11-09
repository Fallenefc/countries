import React from 'react';
import './styles.css';
import { useState } from 'react';

function Header() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = (event) => {
        event.preventDefault();
        if (!darkMode) {
          document.documentElement.style.setProperty('--color-background', 'var(--color-dark-blue-background)');
          document.documentElement.style.setProperty('--color-text', 'var(--color-light-gray)');
          setDarkMode(true);
        }
        else {
          document.documentElement.style.setProperty('--color-background', 'var(--color-background)');
          document.documentElement.style.setProperty('--color-text', 'black');
          setDarkMode(false);
        }
      }

    let title = 'Where in the world?';
    return (
        <div className = "header-container">
            <div className = "title">{title}</div>
            <div className = "dark-mode" onClick={toggleMode}><a href = "">{darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>} {darkMode ? 'Light Mode' : 'Dark Mode'}</a></div> 
        </div>
    )
}

export default Header
