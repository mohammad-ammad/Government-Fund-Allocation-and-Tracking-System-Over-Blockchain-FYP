import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { deptaddFund, deptfindOneFundReq, updateDeptFund } from '../../../Actions/DeptUser';
import {toast} from "react-hot-toast";
import axios from "axios";
const AddFundRequest = (props) => {
    const [pname, setPname] = useState("");
    const [pdesc, setPdesc] = useState("");
    const [pamount, setPamount] = useState("");
    const [rdetail, setRdeatil] = useState("");
    const [pfeed, setPfeed] = useState("");

    const {relevant_ministry_id} = useSelector((state)=> state.DeptUser.user);

    const dispatch = useDispatch();

    useEffect(()=> {
        const id = props.match.params.id;
        if(id != undefined)
        {
            
            axios.get(`/api/v1/department/project-request/${id}`).then(res => {
                if(res.status == 201)
                {
                    setPname(res.data.result.project_name);
                    setPdesc(res.data.result.project_description);
                    setPamount(res.data.result.funds_amount);
                    setRdeatil(res.data.result.request_details);
                    setPfeed(res.data.result.project_feedback);
                }
            })

        }
    }, [])

    const handleFundRequest = async (e) => {
        e.preventDefault();
       if(props.match.params.id != undefined)
       {
           await dispatch(updateDeptFund(pamount,pname,pdesc,rdetail,pfeed,props.match.params.id));
           toast.success("Request Updated Successfully");
       }
       else 
       {
            await dispatch(deptaddFund(pamount,pname,pdesc,rdetail,pfeed,relevant_ministry_id));
            toast.success("Request Send Successfully");
            setPname("");
            setPdesc("");
            setPamount("");
            setRdeatil("");
            setPfeed("");
       }
    }
  return (
    <>
    <div className='breadCrumb'>
        <h3>Departments</h3>
        <div>
            Home <span> {props.match.params.id != undefined ? 'Edit' : 'Add'} Fund Request</span>
        </div>
    </div>
    <div className='main_content_wrapper'>
        <div className='caption_wrapper'>
            <caption>{props.match.params.id != undefined ? 'Edit' : 'Add New'} Fund Request</caption>
            <Link to="/department/dashboard/project-request">Back</Link>
        </div>
        <form className='form_wrapper' onSubmit={handleFundRequest}>
            <div>
                <input type="text" name="" id="" placeholder='Project Name'
                value={pname}
                onChange={(e)=>setPname(e.target.value)}
                required
                />
            </div>
            <div>
                <input type="text" name=""  id="" placeholder='Project Description' 
                value={pdesc}
                onChange={(e)=>setPdesc(e.target.value)}
                    required
                    />
            </div>
            <div>
                <input type="text" name="" id="" placeholder='Fund Amount'
                value={pamount}
                onChange={(e)=>setPamount(e.target.value)}
                required
                />
            </div>
            <div>
                <input type="text" name="" id="" placeholder='Request Details'
                value={rdetail}
                onChange={(e)=>setRdeatil(e.target.value)}
                required
                />
            </div>
            <div>
                <input type="text" name="" id="" placeholder='Project Feedback'
                value={pfeed}
                onChange={(e)=>setPfeed(e.target.value)}
                required
                />
            </div>
            <div>
                <button type='submit' className='form_btn'>Save</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default AddFundRequest