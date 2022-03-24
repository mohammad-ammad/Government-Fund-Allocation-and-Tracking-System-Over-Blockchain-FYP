import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
const ViewFeedBack = (props) => {
    const [feed,setFeed] = useState(null);

    useEffect(()=>{
        const id = props.match.params.id;
        axios.get(`/api/v1/department/project-feedback/${id}`).then(res => {
            if(res.status === 201)
            {
                setFeed(res.data.result.project_feedback);
            }
        })
    },[])
  return (
    <>
    <div className='breadCrumb'>
        <h3>Departments</h3>
        <div>
            Home <span> Fund Request FeedBack</span>
        </div>
    </div>
    <div className='main_content_wrapper'>
        <div className='caption_wrapper'>
            <caption>Fund Request FeedBack</caption>
            <Link to="/department/dashboard/project-request">Back</Link>
        </div>
        <form className='form_wrapper'>
            <div>
                <label htmlFor="">Project Fund FeedBack</label>
                <textarea name="" id="" cols="30" rows="10" value={feed}></textarea>
            </div>
        </form>
    </div>
    </>
  )
}

export default ViewFeedBack