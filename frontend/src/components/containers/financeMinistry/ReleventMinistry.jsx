import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { loadRelevantMinistry } from '../../../Actions/FinanceRelevantMinistry';
const ReleventMinistry = () => {
    const dispatch = useDispatch();
    const {loading, result} = useSelector((state)=> state.financeRelevantMinistry);
    useEffect(()=>{
        dispatch(loadRelevantMinistry());
      },[dispatch]);
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
                    <table>
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
                                        <button className='active_btn'>Edit</button>
                                        <button className='delete_btn'>Delete</button>
                                    </td>
                                    </tr>
                                )) : 'No data found'
                            }
                            
                        </tbody>
                        </table>
                    </div>
    </>
  )
}

export default ReleventMinistry