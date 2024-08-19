import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { Route, Routes } from "react-router-dom"
import Overview from "./pages/Overview.jsx"
import People from "./pages/People.jsx"
import ProfileCard from "./components/ProfileCard.jsx"

function App() {

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-64">
          <Sidebar />
        </div>

        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/profile" element={<ProfileCard />} />
            <Route path="/people" element={<People />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App

// import React, { useState, useMemo } from 'react';  
// import { useReactTable,  getSortedRowModel } from '@tanstack/react-table';  
// import { useForm } from 'react-hook-form';  
// import { zodResolver } from '@hookform/resolvers/zod';  
// import { z } from 'zod';  

// // Validation Schema for Member  
// const memberSchema = z.object({  
//     name: z.string().min(1, "Name is required"),  
//     username: z.string().min(1, "Username is required"),  
//     email: z.string().email("Invalid email"),  
//     role: z.string().min(1, "Role is required"),  
//     teams: z.array(z.string()).min(1, "At least one team is required")  
// });  

// const App = () => {  
//     const [members, setMembers] = useState([]);  
//     const [selectedMember, setSelectedMember] = useState(null);  
//     const [query, setQuery] = useState('');  

//     const columns = useMemo(() => [  
//         { Header: 'Name', accessor: 'name' },  
//         { Header: 'Username', accessor: 'username' },  
//         { Header: 'Email', accessor: 'email' },  
//         { Header: 'Role', accessor: 'role' },  
//         // Other columns can be added as needed  
//     ], []);  

//     const filteredMembers = useMemo(() => {  
//         return members.filter(member =>  
//             member.name.toLowerCase().includes(query.toLowerCase())  
//         );  
//     }, [members, query]);  

//     const {  
//         getTableProps,  
//         getTableBodyProps,  
//         headerGroups,  
//         rows,  
//         prepareRow,  
//     } = useReactTable({  
//         columns,  
//         data: filteredMembers,  
//         initialState: { sortBy: [{ id: 'name', desc: false }] },  
//     }, getSortedRowModel);  

//     const handleSubmit = (data) => {  
//         if (selectedMember) {  
//             setMembers(prev => prev.map(member => member.id === selectedMember.id ? data : member));  
//         } else {  
//             setMembers(prev => [...prev, { ...data, id: Date.now() }]);  
//         }  
//         setSelectedMember(null);  
//     };  

//     const handleDelete = (id) => {  
//         setMembers(prev => prev.filter(member => member.id !== id));  
//     };  

//     return (  
//         <div>  
//             <h1>Members List</h1>  
//             <input  
//                 type="text"  
//                 value={query}  
//                 onChange={e => setQuery(e.target.value)}  
//                 placeholder="Search by name"  
//             />  
//             <table {...getTableProps()}>  
//                 <thead>  
//                     {headerGroups.map(headerGroup => (  
//                         <tr {...headerGroup.getHeaderGroupProps()}>  
//                             {headerGroup.headers.map(column => (  
//                                 <th {...column.getHeaderProps(column.getSortByToggleProps())}>  
//                                     {column.render('Header')}  
//                                     <span>  
//                                         {column.isSorted  
//                                             ? column.isSortedDesc  
//                                                 ? ' 🔽'  
//                                                 : ' 🔼'  
//                                             : ''}  
//                                     </span>  
//                                 </th>  
//                             ))}  
//                         </tr>  
//                     ))}  
//                 </thead>  
//                 <tbody {...getTableBodyProps()}>  
//                     {rows.map(row => {  
//                         prepareRow(row);  
//                         return (  
//                             <tr {...row.getRowProps()} onClick={() => setSelectedMember(row.original)}>  
//                                 {row.cells.map(cell => (  
//                                     <td {...cell.getCellProps()}>{cell.render('Cell')}</td>  
//                                 ))}  
//                                 <td>  
//                                     <button onClick={() => handleDelete(row.original.id)}>Delete</button>  
//                                 </td>  
//                             </tr>  
//                         );  
//                     })}  
//                 </tbody>  
//             </table>  

//             {selectedMember && (  
//                 <MemberForm member={selectedMember} onSubmit={handleSubmit} onClose={() => setSelectedMember(null)} />  
//             )}  
//         </div>  
//     );  
// };  

// const MemberForm = ({ member, onSubmit, onClose }) => {  
//     const { register, handleSubmit, formState: { errors } } = useForm({  
//         resolver: zodResolver(memberSchema),  
//         defaultValues: member,  
//     });  

//     return (  
//         <form onSubmit={handleSubmit(onSubmit)}>  
//             <input {...register('name')} placeholder="Name" />  
//             {errors.name && <p>{errors.name.message}</p>}  
//             <input {...register('username')} placeholder="Username" />  
//             {errors.username && <p>{errors.username.message}</p>}  
//             <input {...register('email')} placeholder="Email" />  
//             {errors.email && <p>{errors.email.message}</p>}  
//             <select {...register('role')}>  
//                 <option value="">Select Role</option>  
//                 <option value="Product Designer">Product Designer</option>  
//                 <option value="Fullstack Developer">Fullstack Developer</option>  
//                 <option value="UX Designer">UX Designer</option>  
//                 <option value="Product Manager">Product Manager</option>  
//                 <option value="QA Engineer">QA Engineer</option>  
//                 <option value="Marketing Specialist">Marketing Specialist</option>  
//             </select>  
//             <select {...register('teams')} multiple>  
//                 <option value="Development">Development</option>  
//                 <option value="Design">Design</option>  
//                 <option value="Marketing">Marketing</option>  
//             </select>  
//             <button type="submit">Submit</button>  
//             <button type="button" onClick={onClose}>Cancel</button>  
//         </form>  
//     );  
// };  

// export default App;