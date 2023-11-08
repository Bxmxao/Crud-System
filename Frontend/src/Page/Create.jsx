import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {Helmet} from "react-helmet";

function Create (){
    const navigate = useNavigate();
    const [Value , setValue] = useState({
        f_name: "",
        s_name: "",
        class: "",
        number: ""
    })

    const handleChange = (event) => {
        const value = event.target.value;
        setValue({
          ...Value,
          [event.target.name]: value
        });
      };

    const handleSumbit = (event) => {
        event.preventDefault();
        const UserData = {
            f_name: Value.f_name,
            s_name: Value.s_name,
            class: Value.class,
            number: Value.number,
        }

        axios.post('http://localhost:3000/user/create', UserData)
        .then(res => {
            navigate('/')
        })
        .catch(err => console.log(err));
    }

    return(
    <div className="bg-gray-100 text-gray-600 h-screen px-20  font-Prompt font-semibold">
        <Helmet>
            <title>CRUD CREATE</title>
        </Helmet>
        <form onSubmit={handleSumbit}>
            <div className="relative py-3 sm:w-96 mx-auto text-center">
                <div className="mt-4 bg-white shadow-md rounded-lg text-left font-Prompt">
                    <div className="bg-gray-50 dark:bg-gray-700"></div>
                        <div className="px-8 py-6 ">
                        <label className="block font-semibold">ชื่อ</label>
                        <input 
                            type="text"  
                            className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                            name="f_name"
                            value={Value.f_name}
                            onChange={handleChange}
                        />
                        
                        <label className="block mt-3 font-semibold">นามสกุล</label>
                        <input 
                            type="text" 
                            className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                            name="s_name"
                            value={Value.s_name}
                            onChange={handleChange}
                        />

                        <label className="block mt-3 font-semibold">ชั้น</label>
                        <input 
                            type="text" 
                            className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                            name="class"
                            value={Value.class}
                            onChange={handleChange}
                        />

                        <label className="block mt-3 font-semibold">เลขที่</label>
                        <input 
                            type="text" 
                            className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                            name="number"
                            value={Value.number}
                            onChange={handleChange}
                        />
                        
                        <div className="flex justify-between items-baseline py-2">
                            <button type="submit" className="bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded">เพิ่มข้อมูล</button>
                            <Link className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"  to="/">กลับหน้าแรก</Link> 
                        </div>
                    </div>
                </div>
            </div> 
        </form>
    </div>
    ); 
}

export default Create;