import backgroundImage from "../assets/HomePage.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cam from "../assets/camera.png";
import axios from "axios";
import { ChatState } from "../context/ChatProvider";

const Settings = () => {
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState(""); 
  const [selectedFile, setSelectedFile] = useState(null);
  



  const { user } = ChatState();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const submitData = async (e) => {
    e.preventDefault();

    const userData = {
      employeeId,
      role,
      password: newPassword,
      name,
      
    };

    try {
      const response = await axios.put(`/editUser/${user.id}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);

      if (response.status === 200) {
        toast.success("Updated Successfully");
        navigate("/home");
      } else {
        toast.error(
          `Failed to update user. Server responded with status ${response.status}`
        );
        console.error(response);
      }
    } catch (error) {
      toast.error(`Error updating user: ${error.message}`);
      console.error(error);
    }
  };

  const changeHandler = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Read the selected file and set it to the state
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
    }
  };
  const handleDropdownToggle = () => {
    setShowPasswordFields(!showPasswordFields);
  };

  const goBack = () => {
    navigate(-1);
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    setEmployeeId(user?.employeeId || "");
    setRole(user?.role || "");
    setName(user?.name || ""); // Set name state
    setNewPassword("");
    setSelectedFile(user?.image || null);
    
    
  }, [user, ]);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div
          className="bg-gray-400 text-black font-bold p-2 rounded flex items-center cursor-pointer"
          onClick={goBack}
        >
          <span className="mr-2" dangerouslySetInnerHTML={{ __html: "&lt;" }} />
          <h1>Settings</h1>
        </div>
        <div style={containerStyle}>
          <div className="max-w-md text-center  ">
            <div className="flex justify-end relative">
            <label
                htmlFor="profilePicture"
                className="cursor-pointer rounded-full border-4 border-gray-500 p-2 h-40 w-40"
              >
                {/* Add your icon or text for "Choose File" */}
                {selectedFile && (
                  <img 
                    src={selectedFile}
                    alt="Selected Profile"
                    className="object-cover h-full w-full rounded-full"
                  />
                )}
                <img src={Cam} alt="" className="absolute bottom-0 right-0" />
              </label>
              <input
                type="file"
                id="profilePicture"
                className="hidden"
                onChange={changeHandler}
                accept="image/*"
              />
            </div>
            <div className="mb-[100%] flex flex-col">
              <h1 className="text-black font-sans font-extrabold mt-5  ">
                {user?.name}
              </h1>
              <h1 className="text-black font-serif font-light">
                {user?.email}
              </h1>
            </div>
          </div>
          <div className="flex h-screen ml-40">
            <div className="lg:flex items-center justify-center flex-1 bg-white text-black">
              <div className="border-l border-solid ml-20 border-gray-300/90  h-full mx-4"></div>
            </div>
            <div className="w-full   flex items-center justify-center">
              <div className="max-w-md w-full p-6">
                <form className="space-y-4 ml-10" onSubmit={submitData}>
                  <div>
                    <label
                      htmlFor="employeeId"
                      className="block text-sm text-black font-extrabold"
                    >
                      Employee Id
                    </label>
                    <input
                      type="text"
                      id="employeeId"
                      name="employeeId"
                      value={employeeId}
                      onChange={(e) => setEmployeeId(e.target.value)}
                      className="mt-1 p-2 w-96 bg-gray-200 text-black rounded-xl focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm text-black font-extrabold"
                    >
                      Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="mt-1 p-2 w-96 bg-gray-200 text-black rounded-xl focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-black font-extrabold"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 p-2 w-96 bg-gray-200 text-black rounded-xl focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="relative inline-block text-left">
                      <div>
                        <span
                          onClick={handleDropdownToggle}
                          className="cursor-pointer w-96 mt-10 bg-gray-200 text-smd border border-blue-500 text-black font-bold py-2 px-4 rounded-xl inline-flex items-center"
                        >
                          Change Password
                          <svg
                            className="ml-[54%] h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-.707.293z"
                            />
                          </svg>
                        </span>
                      </div>
                      {showPasswordFields && (
                        <div className="origin-top-left absolute left-0 mt-2 w-96 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <input
                              type="password"
                              placeholder="New Password"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              className="block w-full p-2 mt-2 bg-gray-200 text-sm text-black rounded-xl focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-[200px] ml-[25%] mt-40 bg-gradient-to-r from-gray-900 to-gray-400/90 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
