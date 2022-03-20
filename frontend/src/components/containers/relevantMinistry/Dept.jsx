import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { relevantdelDept, relevantloadDept } from '../../../Actions/RelevantUser';
import {toast} from 'react-hot-toast';
const Dept = () => {
    let dispatch = useDispatch();
    let {deptData} = useSelector((state)=>state.RelevantDept);
    useEffect(()=>{
        dispatch(relevantloadDept())
    },[])

    const deleteDept = (e,id) => {
        e.preventDefault();
        dispatch(relevantdelDept(id));
        toast.success('Successfully deleted!')
        const thisClicked = e.currentTarget;
        thisClicked.closest("tr").remove();
    }
  return (
    <>
    <div className='breadCrumb'>
                        <h3>Relevent Ministry</h3>
                        <div>
                            Home <span> All Departments</span>
                        </div>
                    </div>
                    <div className='main_content_wrapper'>
                    <div className='caption_wrapper'>
                    <caption>All Department</caption>
                    <Link to="/relevant/dashboard/add-departments">Add Department</Link>
                    </div>
                    <table>
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {deptData && deptData.length > 0 ? deptData.map((item)=>(
                                 <tr key={item.office_id}>
                                 <td data-label="no">{item.office_id}</td>
                                 <td data-label="name">{item.office_name}</td>
                                 <td data-label="action">
                                     <Link to={`/relevant/dashboard/edit-department/${item.office_id}`} className='active_btn'>Edit</Link>
                                     <button className='delete_btn' onClick={(e)=>deleteDept(e,item.office_id)}>Delete</button>
                                 </td>
                                 </tr>
                            )) : 'no data found'}
                               
                            
                        </tbody>
                        </table>
                    </div>
    </>
  )
}

export default Dept