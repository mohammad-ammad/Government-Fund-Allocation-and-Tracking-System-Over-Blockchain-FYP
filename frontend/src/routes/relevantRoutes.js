import Dept from "../components/containers/relevantMinistry/Dept";
import RelevantDashboard from "../components/containers/relevantMinistry/RelevantDashboard";
import AddDept from "../components/containers/relevantMinistry/AddDept";
import EditDept from "../components/containers/relevantMinistry/EditDept";

const releventRoutes = [
    {path:'/relevant/dashboard', exact:true, name:'relevant', component: RelevantDashboard},
    {path:'/relevant/dashboard/departments', exact:true, name:'relevant_Dept', component: Dept},
    {path:'/relevant/dashboard/add-departments', exact:true, name:'add_relevant_Dept', component: AddDept},
    {path:'/relevant/dashboard/edit-department/:id', exact:true, name:'edit_relevant_Dept', component: EditDept}
];

export default releventRoutes;