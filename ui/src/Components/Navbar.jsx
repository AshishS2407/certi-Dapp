import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    
    <div className="flex justify-end mr-4 mt-8">
		<nav>
			<Link to="/"> <input type="button" className="rounded-lg bg-blue-500 px-4 py-4 text-white"
					name="iscerti" value="Home"/> </Link>
			<Link to="/issue"> Issue Certificate </Link>
		</nav>
	</div>

	<div className="text-center">
		<h3 className="text-4xl font-bold"> Certificate DApp </h3>
	</div>
    
     </>
  )
}

export default Navbar