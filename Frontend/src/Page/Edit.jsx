import React, { useEffect, useState } from "react";
import {Helmet} from "react-helmet";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Edit(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [Data, setData] = useState({
        f_name: "",
        s_name: "",
        class: "",
        number: ""
    })

    const handleChange = (event) => {
        const value = event.target.value;
        setData({
          ...Data,
          [event.target.name]: value
        });
      };

    const handleSumbit = (event) => {
        event.preventDefault();

        axios.put('http://localhost:3000/user/edit/'+id, Data)
        .then(res => {
            navigate('/')
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        axios.get('http://localhost:3000/user/'+ id)
        .then(res => setData(res.data[0]))
        .catch(err => console.log(err));
    }, [])

    return(
        <div className="bg-gray-100 text-gray-600 h-screen px-20  font-Prompt font-semibold">
            <Helmet>
            <title>CRUD EDIT</title>
            </Helmet>
            <form onSubmit={handleSumbit}>
                <div className="relative py-3 sm:w-96 mx-auto text-center">
                    <div className="mt-4 bg-white shadow-md rounded-lg text-left font-Prompt">
                        <div className="bg-gray-50 dark:bg-gray-700"></div>
                            <div className="px-8 py-6 ">

                            <label className="block font-semibold">ชื่อ</label>
                            <input 
                            type="text" 
                            name="f_name"
                            value={Data.f_name}
                            onChange={handleChange} 
                            className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                            />
                            
                            <label className="block mt-3 font-semibold">นามสกุล</label>
                            <input 
                            type="text" 
                            name="s_name"
                            value={Data.s_name}
                            onChange={handleChange} 
                            className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                            />
        
                            <label className="block mt-3 font-semibold">ชั้น</label>
                            <input 
                            type="text" 
                            name="class"
                            value={Data.class}
                            onChange={handleChange} 
                            className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                            />
        
                            <label className="block mt-3 font-semibold">เลขที่</label>
                            <input 
                            type="text" 
                            name="number"
                            value={Data.number}
                            onChange={handleChange} 
                            className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                            />
                            
                            <div className="flex justify-between items-baseline py-2">
                                <button type="submit" className="bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded">ยืนยันแก้ไขข้อมูล</button>          
                                <Link className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"  to="/">กลับหน้าแรก</Link>                    
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        );     
}

export default Edit;