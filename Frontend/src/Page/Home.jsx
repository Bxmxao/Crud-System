import { useEffect, useState } from 'react'
import {Helmet} from "react-helmet";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [DataList, setDataList] = useState([]);
    
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/user/delete/'+id)
        .then(res => {
            window.location.reload(); 
        }).catch(err => console.log(err));
    }

    useEffect( ()=>{
        axios.get('http://localhost:3000/user')
        .then(res => setDataList(res.data))
        .catch(err => console.log(err));
    }, [])

  return (
    <div className='bg-gray-100 text-gray-600 h-screen px-20  font-Prompt font-semibold'>
        <Helmet>
            <title>CRUD HOME</title>
        </Helmet>
        
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-3">
                            ลำดับ
                        </th>
                        <th scope="col" className="px-4 py-3">
                            ชื่อ
                        </th>
                        <th scope="col" className="px-4 py-3">
                            นามสกุล
                        </th>
                        <th scope="col" className="px-4 py-3">
                            ชั้น
                        </th>
                        <th scope="col" className="px-4 py-3">
                            เลขที่
                        </th>
                        <th scope="col" className="px-4 py-3">
                            การจัดการ                           
                        </th>             
                        <th scope="col" className="px-4 py-3">     
                            <Link className="bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded"  to="/Create">เพิ่มข้อมูล</Link>                      
                        </th>          
                        
                    </tr>
                </thead>
                <tbody>
                        { 
                            DataList.map((data,i) => (
                                <tr key={i}  className ="bg-white text-black border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className ="px-6 py-4">{data.id}</td>
                                <td className ="px-6 py-4">{data.f_name}</td>
                                <td className ="px-6 py-4">{data.s_name}</td>
                                <td className ="px-6 py-4">{data.class}</td>
                                <td className ="px-6 py-4">{data.number}</td>

                                <td className ="px-6 py-4">
                                    <Link to={`/Read/${data.id}`} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>ดูข้อมูล</Link>
                                    <Link to={`/Edit/${data.id}`} className='bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-4'>แก้ไขข้อมูล</Link>
                                    <button onClick={ e => handleDelete(data.id) } className='bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded-r'>ลบข้อมูล</button>    
                                </td>
                                <td className ="px-6 py-4"></td>                               
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </div>
    </div>
  )
}


export default Home
