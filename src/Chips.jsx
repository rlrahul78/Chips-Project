import React, { useState } from 'react'

const Chips = () => {

    const [inputtext, setInputtext] =useState("Rahul");
    const [chipslist, setChipslist] = useState([]);
    const handleEnter = (e)=>{
        if(e.key === 'Enter'){
            setChipslist([...chipslist,inputtext]);
            setInputtext("");
        };
    }

    const handleDelete = (index)=>{
        const updatedarr = [...chipslist]
         let arr = updatedarr.splice(index,1);
        setChipslist([...updatedarr]);

    }

  return (
    <div>
        <div className='flex justify-center'>
              <input value={inputtext} onKeyDown={(e)=>handleEnter(e)} onChange={(e)=>setInputtext(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[1/2] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' ></input>
        </div>
        <div> 
              {chipslist.map((chip,index)=><span key={index} className='items-center rounded-lg bg-amber-400 p-5 m-3'>{chip} <button className='focus:outline-none m-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={()=>handleDelete(index)}>X</button></span> )}
        </div>
    </div>
  )
}

export default Chips