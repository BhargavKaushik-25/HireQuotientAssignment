import React, { useEffect, useState } from 'react'
import './Operation_Screen_CSS.css'
import update_icon from '../Images/update_icon.png'
import delete_icon from '../Images/delete_icon_blue_color.png'
import left_icon from '../Images/left_icon.png'
import right_icon from '../Images/right_icon.png'
export const Operation_Screen = ({data,setdata,deletealldata,search}) => {

  const [page_no,setpageno]=useState(1);
  const[start_index,setstart_index]=useState(1);
  const[end_index,setend_index]=useState(10);
  const[selectallrow,setselectallrow]=useState(false);
         
          
  useEffect(()=>{
    const checkboxes=document.querySelectorAll('#selectrow');
    checkboxes.forEach(element => {
      if(selectallrow){
        element.checked=true;
      }
      else {
        element.checked=false;
      }
    });  
  });
          
         


function next_page(){
  if(page_no+1<=parseInt(data.length/10)+1){
    setpageno(page_no+1);
    setstart_index(start_index+10);
    setend_index(end_index+10);
  }
          
}
function pervious_page(){
  if(page_no-1!=0){
    setpageno(page_no-1);
    setstart_index(start_index-10);
    setend_index(end_index-10);
  }
}


function handle_delete(e){
  setdata(data.filter((x)=>x.id!==e.id));
}

function handlealldelete(){ 
  if(selectallrow){
    setselectallrow(false);
  }
  else {
    setselectallrow(true);
  }
}

          

  return (
    <div>
    <table className='data_table' >
    <thead>
    <th>
    <input type="checkbox" name="selectall" id="selectall" onClick={handlealldelete}/>
    <font> Selected</font>
    </th>
    <th><font className='change_color'>Id</font></th>
    <th><font className='change_color'>Name</font></th>
    <th><font className='change_color'>Email</font></th>
    <th><font className='change_color'>Role</font></th>
    <th><font className='change_color'>Actions</font></th>
    </thead>
    <tbody>
                              
  {
                              
    (search!="")?
    data
    .filter((x)=>x.name.toLocaleLowerCase().includes(search))
    .map((x)=>{
      return(
        <tr key={x.id}>
          <td><input type="checkbox" name="selectrow" id="selectrow" /></td>
          <td>{x.id}</td>
          <td>{x.name}</td>
          <td>{x.email}</td>
          <td>{x.role}</td>
                                                        
          <td>
            <img src={delete_icon} width={'30px'} height={'30px'}  onClick={()=>handle_delete(x)}></img>
          </td>
        </tr>
      )})
      :
      data
      .filter((x)=>{if((x.id<=end_index && x.id>=start_index))return x})
      .map((x)=>{
        return(
            <tr key={x.id}>
                  <td><input type="checkbox" name="selectrow" id="selectrow"/></td>
                  <td>{x.id}</td>
                  <td>{x.name}</td>
                  <td>{x.email}</td>
                  <td>{x.role}</td>
                                                        
                 <td>
                    
                    <img src={delete_icon} width={'30px'} height={'30px'}  onClick={()=>handle_delete(x)}></img>
                  </td>
            </tr>
        )})}
    </tbody>
    </table>
          

  <div className='naviation_panel'>
      <div className='navigation_button'>
        <img src={left_icon} alt=""  width={'30px'} height={'30px'} onClick={pervious_page}/>
            {page_no}
        <img src={right_icon}  width={'30px'} height={'30px'} onClick={next_page} ></img></div>
        </div>
  </div>
  )
}
