import React, { useState } from 'react';
import { CertModuleCert } from "../scdata/deployed_addresses.json";
import { abi } from "../scdata/Cert.json";
import { Contract, BrowserProvider } from "ethers";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const IssueContent = () => {
  const [id, Setid] = useState('');
  const [name, SetName] = useState('');
  const [course, SetCourse] = useState('');
  const [grade, SetGrade] = useState('');
  const [date, Setdate] = useState('');
  
  const navigate = useNavigate();  // To navigate to the home page

  const issueCerti = async (event) => {
    event.preventDefault();

    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const instance = new Contract(CertModuleCert, abi, signer); // contract interaction 

      const txl = await instance.issue(id, name, course, grade, date);

      console.log('Transaction Return: ', txl);
      console.log(`id : ${id}, name : ${name}, course : ${course}, grade : ${grade}, date : ${date}`);

      // Show success toast and redirect
      toast.success('Certificate issued successfully!');
      setTimeout(() => navigate('/'), 2000); // Redirect after 2 seconds

    } catch (error) {
      console.error('Error issuing certificate: ', error);
      toast.error('Certificate issue failed. Please try again.');
    }
  };

  return (
    <>
      <form className="ml-10" onSubmit={issueCerti}>
        <div>
          <div className="ml-20 px-4 py-10 mr-20 mt-10 border-2 bg-gray-100">
            <h4 className="text-xl">Issue New Certificate</h4>
            <br />
            <label>Select Course*</label>
            <br />
            <select
              name="Coursename"
              className="w-96 h-8"
              value={course}
              onChange={(e) => SetCourse(e.target.value)}
            >
              <option value="Blockchainassosiate">Certified Blockchain Assosiate</option>
              <option value="Hyperledger">Hyper Ledger</option>
              <option value=" BLockchain">Blockchain</option>
            </select>
            <br />
            <br />

            <label>Certificate ID*</label>
            <br />
            <input
              className="w-96  h-8"
              type="text"
              name="Certificateid"
              placeholder="Enter Your Customer ID"
              required
              value={id}
              onChange={(e) => Setid(e.target.value)}
            />
            <br />
            <br />

            <label>Candidate Name*</label>
            <br />
            <input
              className="w-96 h-8"
              type="text"
              name="Candidatename"
              placeholder="Enter Your Name"
              required
              value={name}
              onChange={(e) => SetName(e.target.value)}
            />
            <br />
            <br />

            <label>Grade*</label>
            <br />
            <select
              name="Grade"
              className="w-96 h-8"
              value={grade}
              onChange={(e) => SetGrade(e.target.value)}
            >
              <option value="S">S</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
            </select>
            <br />
            <br />

            <label>Issue Date*</label>
            <br />
            <input
              type="date"
              className="w-96 h-8"
              name="Date"
              value={date}
              onChange={(e) => Setdate(e.target.value)}
            />
            <br />
            <br />

            <input
              type="submit"
              value="Issue Certificate"
              className="bg-cyan-500 text-white rounded-lg px-4 py-2"
            />
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default IssueContent;
