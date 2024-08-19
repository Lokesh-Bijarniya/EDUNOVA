import React, { useState, useMemo } from 'react';
import { useReactTable, getCoreRowModel, getSortedRowModel, getPaginationRowModel, createColumnHelper, flexRender } from '@tanstack/react-table';
import { staticData } from '../data';
import Profile from '../components/EditProfile';
import DeleteDialog from '../components/DeleteDialog';
import ProfileCard from "../components/ProfileCard";
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const columnHelper = createColumnHelper();

const columns = [
  // Define your columns here
  {
    id: 'nameWithImage',
    accessorFn: (row) => ({
      name: row.name,
      imageUrl: row.imageUrl,
      username: row.username,
    }),
    header: () => (
      <div className="flex items-center space-x-2">
        <span>Name</span>
        <ArrowDownwardIcon className="text-gray-500" />
      </div>
    ),
    cell: (info) => {
      const { name, imageUrl, username } = info.getValue();
      return (
        <div className="flex items-center space-x-2">
          <img src={imageUrl} alt={name} className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <span className="font-semibold">{name}</span>
            <span className="text-sm">{username}</span>
          </div>
        </div>
      );
    },
    enableSorting: false,
  },
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => {
      const status = info.getValue();
      return (
        <div className="flex items-center px-1 border rounded-lg text-center">
          <p className={`h-2 w-2 rounded-full inline-block mr-1 ${status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`}></p>
          <h1>{status}</h1>
        </div>
      );
    },
    enableSorting: true,
  }),
  columnHelper.accessor('role', {
    header: 'Role',
    cell: (info) => info.getValue(),
    enableSorting: false,
  }),
  columnHelper.accessor('email', {
    header: 'Email address',
    cell: (info) => info.getValue(),
    enableSorting: false,
  }),
  columnHelper.accessor('teams', {
    header: 'Teams',
    cell: (info) => {
      const team = info.getValue();
      return (
        <h1 className="bg-blue-50 border border-blue-400 text-center rounded-full text-blue-400">
          {team}
        </h1>
      );
    },
    enableSorting: false,
  }),
  columnHelper.display({
    id: 'actions',
    cell: (info) => (
      <>
        <button
          onClick={() => handleEdit(info.row.original)}
          className="px-2 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 mr-2"
        >
          <EditIcon />
        </button>
        <button
          onClick={() => handleDelete(info.row.original)}
          className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          <DeleteIcon />
        </button>
      </>
    ),
    enableColumnFilter: true,
  }),
];

const People = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profileData, setProfileData] = useState();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(staticData);
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      sorting,
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  const handleEdit = (rowData) => {
    setEditData(rowData);
    setIsOpen(true);
  };

  const handleDelete = (rowData) => {
    setDeleteData(rowData);
    setIsDeleteOpen(true);
  };

  const handleClose = (data) => {
    setIsOpen(data);
  };

  const handleClick = (data) => {
    setIsProfileOpen(true);
    setProfileData(data);
  };

  const handleCloseProfile = () => {
    setIsProfileOpen(false);
  };

  const handleDeleteClose = (confirmDelete) => {
    if (confirmDelete && deleteData) {
      setData((prevData) => prevData.filter((item) => item.id !== deleteData.id));
    }
    setIsDeleteOpen(false);
    setDeleteData(null);
  };

  return (
    <div className="space-y-4 border rounded-lg">
      <div className="px-4 py-3 flex justify-between">
        <div className="flex gap-1 items-center">
          <h1 className="font-semibold">Team members</h1>
          <span className="bg-purple-100 border rounded-full px-1 text-purple-700">
            {data.length} users
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex justify-between border rounded-t-sm border-b-2 border-b-black border-opacity-40 w-64 p-1">
            <input
              type="text"
              placeholder="Search"
              className="pl-3 outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon className="font-extralight text-purple-700" />
          </div>
          <div>
            <FilterAltIcon />
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            <AddIcon />
            Add MEMBER
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="relative left-[430px] bottom-12">
          <Profile data={editData} handleClose={handleClose} />
        </div>
      )}

      {isDeleteOpen && deleteData && (
        <div className="relative left-[230px] top-24">
          <DeleteDialog handleClose={handleDeleteClose} rowData={deleteData} />
        </div>
      )}

      {isProfileOpen && (
        <div className="relative">
          <ProfileCard handleClose={handleCloseProfile} profileData={profileData} />
        </div>
      )}

      <div className="overflow-x-auto border-t">
        <table className="table-auto w-full">
          <thead className="bg-gray-50 border-b">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-6 py-3 text-left">
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} onClick={() => handleClick(row.original)} className="hover:bg-gray-100 cursor-pointer">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default People;
