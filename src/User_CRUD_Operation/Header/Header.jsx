import React from 'react'
import './Header_CSS.css'
import delete_icon from '../Images/delete_icon.png'

export const Header = ({setdeletealldata,search,setsearch}) => {

  return (
    <div className='Header_panel'>
          <div className='header_align'>
              <h2>Team Database</h2>
              <input type="search" name="search" id="search" placeholder='Search' value={search} onChange={(e)=>setsearch(e.target.value)} />
              
          </div>
          <div className='operation_'>
          <img src={delete_icon} width={'25px'} height={'25px'} onClick={()=>{setdeletealldata(true)}}></img> <font>Delete All</font>
          </div>

    </div>
  )
}
