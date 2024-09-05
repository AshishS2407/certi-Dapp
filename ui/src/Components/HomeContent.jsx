import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { BrowserProvider } from "ethers";


const HomeContent = () => {

    const [id,setId]=useState('')

	const provider = new BrowserProvider(window.ethereum);

	async function connectMetaMask() {
		const signer = await provider.getSigner();
		alert(`Successfully Connected ${signer.address}`);
	}
	
	
	

	return (
		<>
			<div>
				<img src="https://img.freepik.com/premium-vector/happy-students-celebrating-graduation-from-college-happy-graduate-student-concept-vector_549515-546.jpg?w=740"
					className="size-2/12 mt-48 mx-auto" alt="Graduation Celebration" />
			</div>

			<div className="text-center">
            <input type="text" name="textname" required placeholder="Enter Certificate Id to view " className="border-2 border-sky-400" value={id} onChange={(e)=>setId(e.target.value)}/>
            {/* <input type="button" value="Search" className="text-white bg-blue-500 w-20 size-10"/> */}
            <Link to={`/view/${id}`}><input type="button" name="search" value="Search"
                        className="text-white bg-blue-500 w-20 size-10"/></Link>
        </div>

		<div className='text-center mt-20'>
		  <button onClick={connectMetaMask}>Connect MetaMask</button>
		</div>
		</>
	);
}

export default HomeContent;
