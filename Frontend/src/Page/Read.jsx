import React, { useEffect, useState } from "react";
import {Helmet} from "react-helmet";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function Read(){
    const [Data, setData] = useState([])
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://45.141.26.228:3000/user/'+ id)
        .then(res => setData(res.data[0]))
        .catch(err => console.log(err));
    }, [])

    return(
        <div className="bg-gray-100 text-gray-600 h-screen px-20  font-Prompt font-semibold">
            <Helmet>
            <title>CRUD READ</title>
            </Helmet>
            <div className="relative py-3 sm:w-96 mx-auto text-center">
                <div className="mt-4 bg-white shadow-md rounded-lg text-left font-Prompt">
                    <div className="bg-gray-50 dark:bg-gray-700"></div>
                        <div className="px-8 py-6 ">

                        <label className="block mt-3 font-semibold">ลำดับ</label>
                        <input 
                            type="text" 
                            className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                            name="id"
                            value={Data.id}
                        />

                        <label className="block mt-3 font-semibold">ชื่อ</label>
                        <input 
                            type="text" 
                            className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                            name="f_name"
                            value={Data.f_name}
                        />
                        
                        <label className="block mt-3 font-semibold">นามสกุล</label>
                        <input 
                            type="text" 
                            className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                            name="s_name"
                            value={Data.s_name}
                        />
    
                        <label className="block mt-3 font-semibold">ชั้น</label>
                        <input 
                            type="text" 
                            className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                            name="class"
                            value={Data.class}
                        />
    
                        <label className="block mt-3 font-semibold">เลขที่</label>
                        <input 
                            type="text" 
                            className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                            name="number"
                            value={Data.number}
                        />
                        
                        <div className="flex justify-between items-baseline py-2">
                            <Link className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"  to="/">กลับหน้าแรก</Link>                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );     
}

export default Read;