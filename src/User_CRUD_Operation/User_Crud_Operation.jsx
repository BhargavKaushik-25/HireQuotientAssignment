import React, { useEffect, useState } from 'react'
import './User_curd_operation_CSS.css'
import { Header } from './Header/Header'
import { Operation_Screen } from './Operation_Screen/Operation_Screen'
export const User_Curd_Operation = () => {

  const [data,setdata]=useState([]);
  const[deletealldata,setdeletealldata]=useState(false);
  const [search,setsearch]=useState("");

  useEffect(()=>{
    if(data.length<1)
    fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
  .then(res=>res.json())
  .then(d=>setdata(d));
  
  });

  

  return (
    <div className='Main_curd_div_panel'>
          <Header setdeletealldata={setdeletealldata} search={search} setsearch={setsearch} />
          <Operation_Screen data={data} setdata={setdata} deletealldata={deletealldata} search={search}/>
    </div>
  )
}
