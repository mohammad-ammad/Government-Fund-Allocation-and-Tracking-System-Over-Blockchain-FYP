import DeptDashboard from "../components/containers/department/DeptDashboard";
import DeptRequestFunds from "../components/containers/department/DeptRequestFunds";

const deptRoutes = [
    {path:'/department/dashboard', exact:true, name:'department', component: DeptDashboard},
    {path:'/department/dashboard/project-request', exact:true, name:'Dept_req', component: DeptRequestFunds},
];

export default deptRoutes;