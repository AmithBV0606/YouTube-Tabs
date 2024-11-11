import { useState } from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState(
    "https://via.placeholder.com/1500x400"
  );
  const [profileUrl, setProfileUrl] = useState(
    "https://via.placeholder.com/100"
  );

  const handleBannerChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setBannerUrl(URL.createObjectURL(file));
      // This line of code is used to create a temperaury URL that points to file object in javascript.
    }
  };

  const handleProfileChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setProfileUrl(URL.createObjectURL(file));
      // This line of code is used to create a temperaury URL that points to file object in javascript.
    }
  };

  return (
    <div className="relative w-[95%] ml-[5rem]">
      {/* Banner Image */}
      <div className="relative">
        <img
          src={bannerUrl}
          alt="background image"
          className="w-full h-60 object-cover"
        />

        <button className="absolute top-2 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>

          {/* Main learning of this project */}
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      {/* Channel Logo */}
      <div className="flex items-center pl-4 pb-4 -mt-[1.5rem] bg-slate-200">
        <img
          src={profileUrl}
          alt="Channel Logo"
          className="w-40 h-40 object-cover rounded-full border-2 border-white relative"
        />

        <button className="absolute ml-[6rem] z-10 mt-[9rem] bg-gray-800 text-white p-2 border-2 border-white rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>

          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>

        {/* Channel details */}
        <div className="ml-4 mt-8">
          <h1 className="text-2xl font-bold">Quant Developer</h1>
          <p className="text-x  s">1M views</p>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quia, suscipit mollitia blanditiis neque ratione.
          </p>
          <button className="mt-2 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-400">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;