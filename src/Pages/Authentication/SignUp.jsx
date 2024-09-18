import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useRef } from "react";
import { ImageUpload } from "./../../Utils/imgUpload";
import toast from "react-hot-toast";
import { AuthContaxt } from "./../../Services/AuthProvider";
import upload from "../../assets/Imgs/upload.png";
import logo from "../../assets/Imgs/BanglaBazar.png";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";


function SignUp() {
  const [avatarURL, setAvatarURL] = useState(upload);
  const [image, setImage] = useState(Object);
  const { createNewUser, updateUserProfile } = useContext(AuthContaxt);
  const fileUploadRef = useRef();
  const handleUploadImg = (e) => {
    e.preventDefault();
    fileUploadRef.current.click();
  };
  const handleDisplayUploadedImg = () => {
    const uploadedFile = fileUploadRef.current.files[0];
    const cachedURL = URL.createObjectURL(uploadedFile);
    
    setAvatarURL(cachedURL);
    setImage(uploadedFile);
  };


  // user sing up
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = await ImageUpload(image);
    const userInfo = {
      name,
      email,
      password,
      photo,
      role: "user",
    };
    createNewUser(email, password)
      .then((res) => {
        updateUserProfile(name, photo);
        if (res.user) {
          toast.success("Successfully SignUp!");
         
        }
      })
      .catch((error) => {
        toast.error(error?.message)
      });

    await axios
      .post(`${import.meta.env.VITE_LOCALHOST_URL}/users`, userInfo)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const CustomTextField = styled(TextField)(() => ({
    "& .MuiInputLabel-root": {
      color: "gray", // Default label color
      // fontSize: ".9rem",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#36A853", // Label color when focused
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#36A853", // Default border color
      },
      "&:hover fieldset": {
        borderColor: "#36A853", // Hover border color
      },
      "&.Mui-focused fieldset": {
        borderColor: "#36A853", // Focused border color
      },
    },
  }));

  return (
    <div className="h-screen flex items-center justify-center mx-4">
      <div className="w-full max-w-sm p-6 m-auto mx-auto backdrop-blur-xl border bg-gray-100 bg-opacity-60 rounded-lg  ">
        <div className="flex justify-center mx-auto ">
          <img
            className=" bg-white p-2 rounded-full border-2 border-[#36A853] w-[180px]"
            src={logo}
            alt=""
          />
        </div>

        <form onSubmit={handleSignUp} className="mt-6">
          {/* upload img */}
          <div className=" mt-4 flex justify-center">
            <button className="" onClick={handleUploadImg}>
              <img className="w-24 rounded-full" src={avatarURL} alt="avatar" />
            </button>
            <input
              onChange={handleDisplayUploadedImg}
              ref={fileUploadRef}
              type="file"
              className="hidden"
            />
          </div>
          <div className="mt-4">
            <CustomTextField
              className="w-full bg-white "
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="mt-4">
            <CustomTextField
              className="w-full bg-white "
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              required
            />
          </div>

          <div className="mt-4 relative">
            <CustomTextField
              className="w-full bg-white "
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              required
            />
         
          </div>

          <div className="mt-6">
            <button className="w-full btn px-6 py-2.5 text-sm font-medium tracking-wide bg-[#36A853] hover:bg-[#2d9547] text-white capitalize transition-colors duration-300 transform  rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          {" "}
          Dont have an account?{" "}
          <Link
            to={"/signin"}
            className="font-medium text-[#36A853]  hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
