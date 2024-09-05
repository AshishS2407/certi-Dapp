import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserProvider, Contract } from 'ethers';
import { abi } from '../scdata/Cert.json';
import { CertModuleCert } from '../scdata/deployed_addresses.json';

const ViewCertificate = () => {
  const { id } = useParams(); 
  const [certificate, setCertificate] = useState(null); 
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    async function getcert(searchId) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const instance = new Contract(CertModuleCert, abi, provider); // Use provider directly for read operations

        // Query the certificate from the smart contract
        const result = await instance.Certificates(searchId);

        // Check if the certificate exists (all fields are non-empty)
        if (result.name !== "") {
          setCertificate({
            name: result.name,
            course: result.course,
            grade: result.grade,
            date: result.date,
          });
        } else {
          console.error("No certificate found for the provided ID.");
        }
      } catch (error) {
        console.error("Error fetching certificate:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    }

    if (id) {
      getcert(id); 
    }
  }, [id]); 

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  if (!certificate) {
    return <div>No certificate found.</div>; // Show message if no certificate is found
  }

  return (
    <section className="ml-20 bg-cyan-50 border-2 rounded-lg px-20 py-20 mr-20 mt-10">
      <section className="px-96 py-20 inline-block border-2 border-gray-1 -mt-1">
        <h2 className="-mt-10 text-center font-bold text-2xl">Kerala Blockchain Academy</h2>
        <img
          src="https://img.freepik.com/premium-vector/happy-students-celebrating-graduation-from-college-happy-graduate-student-concept-vector_549515-546.jpg?w=740"
          className="w-48 mt-10 px-96"
          alt="Graduation"
        />
        <img
          src="https://img.freepik.com/premium-vector/happy-students-celebrating-graduation-from-college-happy-graduate-student-concept-vector_549515-546.jpg?w=740"
          className="w-72 mt-10 mx-auto"
          alt="Graduation"
        />
        <section className="mt-16 text-center font-normal text-2xl font-serif">
          <p className="font-serif text-xl text-center">{`This is to certify that ${certificate.name}`}</p>
          <p className="font-serif text-xl text-center">{`has successfully completed ${certificate.course}`}</p>
          <p className="font-serif text-xl text-center">{`with grade ${certificate.grade} on ${certificate.date}`}</p>
        </section>
      </section>
    </section>
  );
}

export default ViewCertificate;
