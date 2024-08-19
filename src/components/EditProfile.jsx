import React from "react";
import PropTypes from "prop-types";
import ReplayIcon from "@mui/icons-material/Replay";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Profile({ data, handleClose }) {
  console.log("this is data", data);

  return (
    <div className="bg-white w-1/2 fixed z-1 p-2 border rounded-md">
      <h1 className="text-2xl p-4 font-semibold">Edit Profile</h1>
      <div className="flex flex-col items-center gap-4">
        <img src={data.imageUrl} alt="" className="rounded-full" />
        <div className="flex items-center gap-2">
          <span className="border bg-gray-100 p-2">
            <label htmlFor="image" className="cursor-pointer">
              <ReplayIcon />
              CHANGE PHOTO
            </label>
            <input type="file" id="image" hidden />
          </span>
          <span className="border bg-gray-100 p-2">
            <label className="cursor-pointer">
              <DeleteForeverIcon />
              REMOVE PHOTO
            </label>
            <input type="file" id="image" hidden />
          </span>
        </div>
      </div>

      <form className="flex flex-wrap  mt-6">
        <div className="flex flex-col p-2 w-1/2 ">
          <label htmlFor="name" className="text-lg">Name</label>
          <input type="text" id="name" value={data.name}  className="bg-gray-100 p-2 border border-b-black outline-none"/>
        </div>
        <div className="flex flex-col p-2 w-1/2 ">
          <label htmlFor="email" className="text-lg">Email</label>
          <input type="text" id="email" value={data.email} disabled className="bg-gray-100 p-2 border border-b-black outline-none"/>
        </div>
        <div className="flex flex-col p-2 w-1/2">
          <label htmlFor="role" className="text-lg">Role</label>
          <span className="bg-gray-100 flex justify-between items-center border border-b-black">
            <input type="text" id="role" value={data.role}  className="p-2 outline-none bg-gray-100"/>
            <KeyboardArrowDownIcon />
          </span>
        </div>
        <div className="flex flex-col p-2 w-1/2">
          <label htmlFor="status" className="text-lg">Status</label>
          <span className="bg-gray-100 flex justify-between items-center border border-b-black">
            <input type="text" id="status" value={data.status} placeholder={data.status}  className="p-2 bg-gray-100 outline-none"/>
             <KeyboardArrowDownIcon />
          </span>
          
        </div>
        <div className="flex flex-col w-full p-2">
          <label htmlFor="teams">Teams</label>
          <span className="w-full bg-gray-100 flex justify-between items-center border border-b-black">
            <input type="text" id="teams" value={data.teams} className="bg-gray-100 p-2 outline-none text-purple-500"/>
          <KeyboardArrowDownIcon />
          </span>
        </div>
      </form>

      <div className="text-end p-4 mt-6">
        <button className="bg-gray-50 p-2 text-lg border mx-2 rounded-md" onClick={()=>handleClose(false)}>CANCEL</button>
        <button className="bg-gray-50 opacity-50 p-2 text-lg rounded-md" disabled>SAVE</button>
      </div>
    </div>
  );
}

Profile.propTypes = {
  data: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};
