import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Template from './components/Template'

const App = () => {
  const [nid, setNid] = useState(" "); 
  const [dob, setDob] = useState(" "); 
  const [data, setData] = useState(); 
  const [isloading, setIsloading] = useState(false); 
  console.log(data)
         const handleVerify = async () => {
        setIsloading(true);
        try {
          const url = `https://proxy.cors.sh/https://badolhzbd.serv00.net/svs.php?nid=${nid}&dob=${dob}`;
          const response = await fetch(url, {
            headers: {
              'x-cors-api-key': 'temp_cf68fdf42381130906be94d0c3115e84'
            }
          });
          const result = await response.json();
          setData(result.data);
          setIsloading(false);
          console.log(data)
        } catch (error) {
          console.error('Error:', error);
          setIsloading(false);
        }
      };

  return (
    <>
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='w-full max-w-md p-10 space-y-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl'>
        <h1 className='text-2xl font-semibold text-center text-gray-800 mb-8'>
          {/* NID Verification */}
        </h1>
        <div className='space-y-6'>
          <div>
            <label className='text-sm font-medium text-gray-600 mb-1 block'>
              NID Number
            </label>
            <input 
              className='w-full p-3 bg-gray-50 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:bg-white transition-all duration-300' 
              type="text" 
              placeholder="Enter your NID number"
              onChange={(e) => setNid(e.target.value)}
            />
          </div>
          <div>
            <label className='text-sm font-medium text-gray-600 mb-1 block'>
              Date of Birth
            </label>
            <input 
              className='w-full p-3 bg-gray-50 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:bg-white transition-all duration-300' 
              type="text" 
              placeholder="YYYY-MM-DD"
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <button 
            className='w-full py-3 px-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            onClick={handleVerify}
          >
            {isloading ? 'Loading' : 'Verify NID'}
          </button>
        </div>
      </div>
    </div>
    {
      data ? <Template data={data}  /> : null
    }

    </>
  );
};

export default App;