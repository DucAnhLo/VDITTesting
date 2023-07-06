import { BsGearFill, BsCalendarFill, BsCart4 } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { FcSalesPerformance } from 'react-icons/fc';


const SideBar = () => {
  return (
    <div className=" top-0 left-0 h-screen w-24 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<BsCalendarFill size="28" />} />
        <SideBarIcon icon={<FaUsers size="32" />} />
        <SideBarIcon icon={<FcSalesPerformance size="20" />} />
        <SideBarIcon icon={<BsCart4 size="20" />} />
        <div className=' mt-48'>
          <SideBarIcon icon={<BsGearFill size="22" />} />
        </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;