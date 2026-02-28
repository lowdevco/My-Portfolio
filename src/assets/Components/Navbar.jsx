import React from 'react'
import "../css/navbar.css"

function Navbar() {
  return (
    <>
      <nav className="navbar-container flex items-center justify-between h-20 px-4 bg-gray-800 fixed w-full top-0 left-0 z-1000 pl-10 pr-10">
        <h1 className="navbar-title">My Portfolio</h1>
        <div className="flex justify-between items-center">
          <h1 className="text-white">About</h1>
          <h1 className="text-white ml-4">Experince</h1>
          <h1 className="text-white ml-4">Skills</h1>
          <h1 className="text-white ml-4">Project</h1>
          <h1 className="text-white ml-4">Contact</h1>
        </div>
      </nav>
    </>
  );
}

export default Navbar
