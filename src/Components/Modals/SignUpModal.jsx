import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import logo from "../../assets/Imgs/BanglaBazar.png";
import { useContext, useRef, useState } from "react";
import upload from "../../assets/Imgs/upload.png";
import { AuthContaxt } from "../../Services/AuthProvider";
import { ImageUpload } from "../../Utils/imgUpload";
import toast from "react-hot-toast";
import axios from "axios";

function SignUpModal({ isOpenSignUp, signUpClose }) {
  const [avatarURL, setAvatarURL] = useState(upload);
  const [image, setImage] = useState(Object);
  console.log(image);
  const { createNewUser, updateUserProfile } = useContext(AuthContaxt);
  const fileUploadRef = useRef();
  const handleUploadImg = (e) => {
    e.preventDefault();
    fileUploadRef.current.click();
  };
  const handleDisplayUploadedImg = () => {
    const uploadedFile = fileUploadRef.current.files[0];
    const cachedURL = URL.createObjectURL(uploadedFile);
    console.log(cachedURL, uploadedFile);
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
    console.log(name, email, password, photo);
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
          console.log(res.user);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .post(`${import.meta.env.VITE_LOCALHOST_URL}/user`, userInfo)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
                  <img className="w-40" src={logo} alt="" />
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
                  <div>
                    <label className="block text-sm text-gray-800 ">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg   dark:border-gray-600 outline-none focus:border-2 focus:border-[#36A853]"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm text-gray-800 ">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg   dark:border-gray-600 outline-none focus:border-2 focus:border-[#36A853]"
                    />
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <label className="block text-sm text-gray-800">
                        Password
                      </label>
                      <a
                        href="#"
                        className="text-xs text-gray-600 hover:underline"
                      >
                        Forget Password?
                      </a>
                    </div>

                    <input
                      type="password"
                      name="password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg   dark:border-gray-600 outline-none focus:border-2 focus:border-[#36A853]"
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={signUpClose}
                      className="w-full px-6 py-2.5 text-sm font-medium tracking-wide bg-[#36A853] text-white capitalize transition-colors duration-300 transform  rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                    >
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
