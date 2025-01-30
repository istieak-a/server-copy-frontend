import React, { useState } from "react";
import axios from "axios";
import Template from "./components/Template";

const App = () => {
  const [nid, setNid] = useState("");
  const [dob, setDob] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    setError(""); 
    setIsLoading(true);
    setData(null);

    try {
      const url = `/api/?key=w3PA1sURO5v2kG3J&nid=${nid}&dob=${dob}`;
      const response = await axios.get(url, {
        timeout: 15000,
      });
      
      if (response.data) {
        setData(response.data);
      } else {
        throw new Error("No data received");
      }
    } catch (error) {
      setError(
        error.response?.data?.message || 
        "Failed to verify NID. Please check your information and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full max-w-md p-10 space-y-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl">
          <h1 className="text-2xl font-semibold text-center text-gray-800">
            NID Verification
          </h1>
          
          <form onSubmit={handleVerify} className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-600 mb-1 block">
                NID Number
              </label>
              <input
                className="w-full p-3 bg-gray-50 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:bg-white transition-all"
                type="text"
                placeholder="Enter your NID number"
                value={nid}
                onChange={(e) => setNid(e.target.value)}
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-600 mb-1 block">
                Date of Birth
              </label>
              <input
                className="w-full p-3 bg-gray-50 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:bg-white transition-all"
                type="text"
                placeholder="DD/MM/YYYY"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                  Verifying...
                </div>
              ) : (
                "Verify NID"
              )}
            </button>
          </form>
        </div>
      </div>

      {data && (
        <div className="min-h-screen">
          <Template data={data} />
        </div>
      )}
    </div>
  );
};

export default App;