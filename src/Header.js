import React from 'react'
import './Header.css'

const Header = ({changeLocation}) => {
	return (
		<header className="header">
      <h1>Create Superhero</h1>
      <nav>
        <ul>
          <li onClick={() => changeLocation('home')}>Create Hero</li>
          <li onClick={() => changeLocation('heroes')}>Saved Heroes</li>
        </ul>
      </nav>
    </header>
	)
}

export default Header