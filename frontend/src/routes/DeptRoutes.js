import AddFundRequest from "../components/containers/department/AddFundRequest";
import DeptDashboard from "../components/containers/department/DeptDashboard";
import DeptRequestFunds from "../components/containers/department/DeptRequestFunds";
import ViewFeedBack from "../components/containers/department/ViewFeedBack";
import ViewTransaction from "../components/containers/department/ViewTransaction";

const deptRoutes = [
    {path:'/department/dashboard', exact:true, name:'department', component: DeptDashboard},
    {path:'/department/dashboard/project-request', exact:true, name:'Dept_req', component: DeptRequestFunds},
    {path:'/department/dashboard/add-project-request', exact:true, name:'Dept_add_req', component: AddFundRequest},
    {path:'/department/dashboard/add-project-request/:id', exact:true, name:'Dept_edit_req', component: AddFundRequest},
    {path:'/department/dashboard/view-project-feedback/:id', exact:true, name:'Dept_view_feedback', component: ViewFeedBack},
    {path:'/department/dashboard/view-transaction', exact:true, name:'Dept_view_transaction', component: ViewTransaction},
];

export default deptRoutes;