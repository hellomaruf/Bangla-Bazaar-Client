import axios from "axios";
import { useRef, useState } from "react";
// import { ImSpinner6 } from "react-icons/im";
import upload from "../assets/Imgs/upload.png";
import { ImageUpload } from "../Utils/imgUpload";
import toast from "react-hot-toast";
import useUser from "../Hooks/useUser";
import { CgSpinnerTwo } from "react-icons/cg";

function Profile() {
  const { userData, refetch } = useUser();
  const [avatarURL, setAvatarURL] = useState(upload);
  const [image, setImage] = useState(Object);
  const fileUploadRef = useRef();
  const [gender, setGender] = useState("");
  const profileImage = userData?.photo;
  const userName = userData?.name;
  const userEmail = userData?.email;
  const [loading, setLoading] = useState(false);
  // Upload img Functionality------------------------------>
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

  // Update profile--------------------->
  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleUpdateProfile = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phoneNum = form.number.value;
    const dateOfBirth = form.date.value;
    const photo = await ImageUpload(image);
    console.log(photo);

    const userUpdateInfo = {
      name,
      email,
      photo,
      phoneNum,
      dateOfBirth,
      gender,
    };
    console.log(userUpdateInfo);
    axios
      .patch(
        `${import.meta.env.VITE_LOCALHOST_URL}/update-profile`,
        userUpdateInfo
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount === 1) {
          toast.success("Your Profile Update Successfully!");
          refetch();
          setLoading(false);
        }
      })
      .catch((error) => {
        toast.error(error.message);
        refetch();
      });
  };

  return (
    <div className="mt-28 max-w-7xl mx-auto">
      <div className="grid grid-cols-6 gap-4 ">
        <div className="col-span-2 border border-gray-400 ">
          <div className=" p-6">
            <div className="flex items-center justify-center">
              <img
                className="w-[160px] rounded-full "
                src={profileImage}
                alt=""
              />
            </div>
            <div className="text-center my-3">
              <h2 className="text-xl font-semibold text-gray-800">
                {userName}
              </h2>
              <h4 className=" text-sm text-gray-500">{userEmail}</h4>
            </div>
            <hr className="text-gray-600 border-gray-300 my-3 " />
            <div className="">
              <div className="flex items-center justify-between bg-gray-50 p-4">
                <h3 className="font-medium ">Total Orders</h3>
                <h3 className="font-semibold text-[#36A853]">12</h3>
              </div>
            </div>
          </div>
        </div>

        {/******************** User update form ********************/}
        <div className="col-span-4 border border-gray-400 p-6">
          <form
            onSubmit={handleUpdateProfile}
            action="#"
            className="mt-8 grid grid-cols-6 gap-6"
          >
            <div className="col-span-6">
              <label
                htmlFor="FirstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>

              <input
                type="text"
                id="Name"
                name="name"
                defaultValue={userName}
                className="mt-1 w-full p-3 outline-none border focus:border-[#36A853] rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Email{" "}
              </label>

              <input
                type="email"
                id="Email"
                name="email"
                disabled
                defaultValue={userEmail}
                className="mt-1 w-full p-3 outline-none border focus:border-[#36A853] rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="numver"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Phone Number{" "}
              </label>

              <input
                type="number"
                id="number"
                name="number"
                placeholder="Enter Your Phone Number"
                className="mt-1 w-full p-3 outline-none border focus:border-[#36A853] rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Gender{" "}
              </label>

              <div className="flex items-center gap-4">
                <div className="form-control ">
                  <label className="label cursor-pointer flex gap-2">
                    <span className="label-text">Male</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-[#36A853]"
                      value={"male"}
                      onChange={handleGender}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer flex gap-2">
                    <span className="label-text">Female</span>
                    <input
                      type="radio"
                      onChange={handleGender}
                      name="radio-10"
                      className="radio checked:bg-[#36A853]"
                      value="female"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="PasswordConfirmation"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>

              <input
                type="date"
                id="date"
                name="date"
                className="mt-1 w-full p-3 outline-none border focus:border-[#36A853] rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="PasswordConfirmation"
                className="block text-sm font-medium text-gray-700"
              >
                Change Photo
              </label>

              {/* upload img */}
              <div className=" mt-4 ">
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
            </div>

            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                disabled={loading}
                className="btn disabled:bg-gray-400 disabled:text-gray-200 bg-[#36A853] text-white"
              >
                {loading && <CgSpinnerTwo className="text-xl animate-spin" />}
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
