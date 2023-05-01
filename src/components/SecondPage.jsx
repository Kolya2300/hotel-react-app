import React from 'react'
import { useNavigate } from 'react-router-dom';
const SecondPage = () => {
    const navigate = useNavigate();

    const handlePage = async () => {
        try {
            navigate('/home');
            console.log('You are logged out')
        } catch (e) {
            console.log(e.message);
        }
    };
    return (
    <div>
      Second Page
      <br />
      <button onClick={handlePage} className='border px-6 py-2 my-4'>
        Home
      </button>
    </div>
  )
}

export default SecondPage
