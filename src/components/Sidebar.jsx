import WidgetsIcon from '@mui/icons-material/Widgets';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [active, setActive] = useState("/");

  const handleClick = (path) => {
    setActive(path);
  }

  return (
    <div className="sticky top-0 border-gray-200 h-screen">
      <div className='p-8'>
         <ul className='flex flex-col gap-5'>
          <Link to="/" onClick={()=>handleClick('/')} >
            <li className={`flex gap-2 items-center ${active === "/" && 'text-purple-700 font-semibold'}  `}>
                <WidgetsIcon/>
                <span>Overview</span>
            </li>
            </Link>
            <Link to='/people' onClick={()=>handleClick('/people')} >
            <li className={`flex gap-2 items-center ${active === "/people" && 'text-purple-700 font-semibold'} `}>
                <WidgetsIcon/>
                <span>People Directory</span>
            </li>
            </Link>
         </ul>
      </div>
    </div>
  );
}
