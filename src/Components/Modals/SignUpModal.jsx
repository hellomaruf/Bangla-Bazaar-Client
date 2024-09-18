import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import logo from "../../assets/Imgs/BanglaBazar.png";
import { useContext, useRef, useState } from "react";
import upload from "../../assets/Imgs/upload.png";
import { AuthContaxt } from "../../Services/AuthProvider";
import { ImageUpload } from "../../Utils/imgUpload";
import toast from "react-hot-toast";
import axios from "axios";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { CgSpinnerTwo } from "react-icons/cg";

function SignUpModal({ isOpenSignUp, signUpClose }) {
  const [avatarURL, setAvatarURL] = useState(upload);
  const [image, setImage] = useState(Object);
  const { createNewUser, updateUserProfile } = useContext(AuthContaxt);
  const fileUploadRef = useRef();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
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
          setLoading(false);
     
        }
      })
      .catch((error) => {
     
        toast.error(error?.message)
        setLoading(false);
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
    <div>
      <Dialog
        open={isOpenSignUp}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={signUpClose}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-[470px] rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {/* SignInForm */}
              <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg ">
                <div className="flex justify-center mx-auto">
                  <img
                    className="bg-white p-2 rounded-full border-2 border-[#36A853] w-[180px]"
                    src={logo}
                    alt=""
                  />
                </div>

                <form onSubmit={handleSignUp} className="mt-6">
                  {/* upload img */}
                  <div className=" mt-4 flex justify-center">
                    <button className="" onClick={handleUploadImg}>
                      <img
                        className="w-24 rounded-full"
                        src={avatarURL}
                        alt="avatar"
                      />
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

                  <div className="mt-4">
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
                    <button
                      // onClick={signUpClose}
                      disabled={loading}
                      className="w-full disabled:text-gray-200 disabled:bg-gray-400 btn px-6 py-2.5 text-sm font-medium tracking-wide bg-[#36A853] text-white capitalize transition-colors duration-300 transform  rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                    >
                      {loading && (
                        <CgSpinnerTwo className="text-xl animate-spin" />
                      )}
                      Sign Up
                    </button>
                  </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-400">
                  {" "}
                  Dont have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-[#36A853]  hover:underline"
                  >
                    Sign In
                  </a>
                </p>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default SignUpModal;
