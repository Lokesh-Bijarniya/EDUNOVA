import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function DeleteDialog({ handleClose, rowData }) {
  return (
    <div className='fixed z-1 p-6 bg-white border rounded-lg w-1/2 flex flex-col gap-4'>
        <div className='flex justify-between my-2'>
            <h1 className='text-xl font-semibold'>Delete Member Details</h1>
            <button onClick={() => handleClose(false)}><CloseIcon/></button>
        </div>
      
      <p className='text-gray-400'>Are you sure you want to delete {rowData.name}'s details? This option cannot be undone.</p>
      <div className='flex justify-end'>
        <button onClick={() => handleClose(true)} className='bg-purple-600 text-white p-1 text-lg rounded-lg px-2 w-24'>Delete</button>
      </div>
      
    </div>
  );
}
