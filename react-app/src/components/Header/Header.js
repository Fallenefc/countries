import React from 'react';
import './styles.css';

function Header() {
    let title = 'Where in the world?';
    let darkMode = 'Dark Mode'
    return (
        <div className = "header-container">
            <div className = "title">{title}</div>
            <div className = "dark-mode"><a href = ""><i class="fas fa-moon"></i> {darkMode}</a></div> 
        </div>
    )
}

export default Header
