import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { loadRelevantMinistry, deleteRelevantMinistry } from '../../../Actions/FinanceRelevantMinistry';
import {toast} from 'react-hot-toast';
const ReleventMinistry = () => {
    const dispatch = useDispatch();
    const {result} = useSelector((state)=> state.financeRelevantMinistry);
    useEffect(()=>{
        dispatch(loadRelevantMinistry());
      },[]);

    const deleteRelevant = (e,id) => {
        e.preventDefault();
        dispatch(deleteRelevantMinistry(id));
        toast.success('Successfully deleted!')
        const thisClicked = e.currentTarget;
        thisClicked.closest("tr").remove();
    }
  return (
    <>
    <div className='breadCrumb'>
                        <h3>Finance Ministry</h3>
                        <div>
                            Home <span> Relevant Ministry</span>
                        </div>
                    </div>
                    <div className='main_content_wrapper'>
                    <div className='caption_wrapper'>
                    <caption>All Users</caption>
                    <Link to="/dashboard/add-relevant-ministry">Add Users</Link>
                    </div>
                    <div className="table-wrapper">
                    <table class="fl-table">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                result && result.length > 0 ? result.map((item)=>(
                                    <tr key={item.relevant_ministry_id}>
                                    <td data-label="no">{item.relevant_ministry_id}</td>
                                    <td data-label="name">{item.relevant_ministry_name}</td>
                                    <td data-label="action">
                                        <Link to={`/dashboard/edit-relevant-ministry/${item.relevant_id}`} className='active_btn'>Edit</Link>
                                        <button className='delete_btn' onClick={(e)=>deleteRelevant(e,item.relevant_id)}>Delete</button>
                                    </td>
                                    </tr>
                                )) : 'No data found'
                            }
                            
                        </tbody>
                        </table>
                    </div>
                    </div>
    </>
  )
}

export default ReleventMinistry