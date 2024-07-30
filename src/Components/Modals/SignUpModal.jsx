import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import logo from "../../assets/Imgs/BanglaBazar.png";
import { useContext, useRef, useState } from "react";
import upload from "../../assets/Imgs/upload.png";
import { AuthContaxt } from "../../Services/AuthProvider";

function SignUpModal({ isOpenSignUp, signUpClose }) {
  const [avatarURL, setAvatarURL] = useState(upload);
  const { createNewUser } = useContext(AuthContaxt);
  console.log(createNewUser);
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
  };

  // user sing up
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createNewUser(email, password)
      .then((res) => {
        console.log(res.user);
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

                <div className="flex items-center justify-between mt-4">
                  <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                  <a
                    href="#"
                    className="text-xs text-center text-gray-500 uppercase hover:underline"
                  >
                    or login with Social Media
                  </a>

                  <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                </div>

                <div className="flex items-center mt-6 -mx-2">
                  <button
                    type="button"
                    className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
                  >
                    <svg
                      className="w-4 h-4 mx-2 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                    </svg>

                    <span className="hidden mx-2 sm:inline">
                      Sign in with Google
                    </span>
                  </button>
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-400">
                  {" "}
                  Dont have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-[#36A853]  hover:underline"
                  >
                    Create One
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
