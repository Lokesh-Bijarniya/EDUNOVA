// src/ProfileCard.js
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import NearMeIcon from '@mui/icons-material/NearMe';
import PropTypes from 'prop-types';

const ProfileCard = ({data, handleCloseProfile}) => {
    console.log(data);
  return (
    <div className="fixed z-1 w-1/2 top-20 pb-12 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-sky-800 p-4 flex gap-8 justify-between">
        <div className="flex gap-8">
        <img
          src={data.imageUrl}
          className="h-36 w-36 rounded-full"
          alt=""
        />
        <div className="flex flex-col gap-3 justify-center">
          <h2 className="text-white text-xl font-semibold">{data.name}</h2>
          <div className="flex gap-4">
            <div>
              <div>
                <p className="text-white font-extralight">@{data.username}</p>
              </div>
              <div>
                <p className="text-white">USER ID</p>
              </div>
            </div>

            <div className="border-l pl-4">
              <div>
                <p className="text-white font-extralight">{data.role}</p>
              </div>
              <div>
                <p className="text-white">Role</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div onClick={() => handleCloseProfile(true)} className="cursor-pointer">
            <CloseIcon className="text-white"/>
        </div>
        </div>
        


      <div className="p-4 ">
        <h3 className="text-gray-700 font-semibold bg-slate-200 p-2 rounded-sm">Personal Information</h3>
        <div className="flex flex-col gap-2 py-1">
        <p className="border-b p-1">Date of Birth: <span className="text-gray-500 ">{data.dob}</span></p>
        <p className="border-b p-1">Gender: <span className="text-gray-500">{data.gender}</span></p>
        <p className="border-b p-1">Nationality: <span className="text-gray-500">{data.nationality}</span></p>
        <p className="border-b p-1">Contact No: <span className="text-gray-500">{data.contactNo}</span></p>
        <p className="border-b p-1">Work email Address: <span className="text-gray-500">{data.workingEmailAddress}</span></p>
        </div>
       
      </div>
      <div className="px-4">
        <h3 className="text-gray-700 font-semibold bg-slate-200 p-2 rounded-sm">Research & Publication</h3>
        <h4 className="font-semibold mt-4">AI and User Experience: The Future of Design</h4>
        <p className="flex gap-6 text-gray-500 text-sm">Published in in the Journal of Modern Design 
            <ul className="list-disc">
                <li>2022</li>
            </ul>
        </p>
        <p className="py-4 text-gray-500">
          AI, IoT based real time condition monitoring of Electrical Machines
          using Python language. Abstract: Maintaining induction motors in good working order before they fail benefits small
          <span className="text-orange-500 ml-2 font-light cursor-pointer">See More...</span>
        </p>
        <a href="#" className="text-orange-600 text-lg font-medium hover:underline">
          <NearMeIcon/> SEE PUBLICATION
          <hr/>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;


  
ProfileCard.propTypes = {
    data: PropTypes.object.isRequired,
    handleCloseProfile: PropTypes.func.isRequired,
};