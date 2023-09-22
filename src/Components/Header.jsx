import React from 'react';
import './Header.css'; // You can create this CSS file for styling

function Header() {
  return (
    <header className="Header">
      <nav className="left-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/hotels">Hotels</a></li>
          <li><a href="/vlogs">Vlogs</a></li>
          <li><a href="/history">History</a></li>
          {/* Add more navigation links here */}
        </ul>
      </nav>
      <div className="right-nav">
        <input type="text" placeholder="Search hotels..." />
        <button type="submit">Search</button>
      </div>
    </header>
  );
}

export default Header;

