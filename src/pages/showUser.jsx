import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import {  useNavigate } from "react-router-dom";
const ShowUser = () => {
    const navigator = useNavigate()
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get("/getUsers");
        console.log(response.data, "kko");
        setData(response.data);
      } catch (err) {
        console.error(err);
        console.error("Error fetching users:", err);
      }
    };
    fetchUser();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axiosInstance.delete(`/deleteUser/${userId}`);
      // Update the state to reflect the deletion
      setData((prevData) => prevData.filter((user) => user._id !== userId));
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  const editUser = async (userId) => {
    await axiosInstance.put(`/editUser/${userId}`);

    navigator('/editUser')

  };
  const printUser = () => {
    window.print();
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      <div className="mb-4 flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Back
        </button>
      </div>
      <div>
        {data.map((user, index) => (
          <div key={index} className="bg-gray-100 p-4 mb-4 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <div>
                  <button
                    onClick={() => {
                      editUser(user._id);
                    }}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 mr-2 rounded"
                  >
                    Edit
                  </button>

                <button
                  onClick={() => {
                    deleteUser(user._id);
                  }}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
                
              </div>
            </div>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            {/* Add more user fields here */}
          </div>
        ))}
        <button
                  onClick={printUser}
                  className="bg-blue-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
                >
                  Print
                </button>
      </div>
    </div>
  );
};

export default ShowUser;
