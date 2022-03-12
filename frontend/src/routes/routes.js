import AddUser from "../components/containers/releventMinistry/AddUser";
import Dashboard from "../components/containers/releventMinistry/Dashboard";
import User from "../components/containers/releventMinistry/User";
import Layout from "../components/layouts/frontend/Layout";

const routes = [
    {path:'/dashboard', exact:true, name:'Dashboard', component: Dashboard},
    {path:'/dashboard/user', exact:true, name:'User', component: User},
    {path:'/dashboard/add-user', exact:true, name:'Add_User', component: AddUser},

];

export default routes;