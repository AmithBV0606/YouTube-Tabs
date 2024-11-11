import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const SideBar = () => {
  return (
    <aside className="sidebar fixed top-0 left-0 h-screen w-20 bg-[#1A1C1E] text-white">
        <ul className="p-4 flex flex-col justify-between items-center h-full">
            {/* Top Icons */}
            <div className="top">
                <li className="mb-3">
                    <div className="flex items-center">
                        <FaHome className="mr-2 mb-3 cursor-pointer" size={22}/>
                    </div>
                </li>

                <li className="mb-3">
                    <div className="flex items-center">
                        <FaUser className="mr-2 mb-3 cursor-pointer" size={22}/>
                    </div>
                </li>

                <li className="mb-3">
                    <div className="flex items-center">
                        <FaSearch className="mr-2 mb-3 cursor-pointer" size={22}/>
                    </div>
                </li>
            </div>

            {/* Bottom Icons */}
            <div className="bottom">
                <li>
                    <IoMdSettings size={22}/>
                    <FaUser className="mt-5" size={22}/>
                </li>
            </div>
        </ul>
    </aside>
  )
}

export default SideBar;