import AddRelevantMinistry from "../components/containers/financeMinistry/AddRelevantMinistry";
import Dashboard from "../components/containers/financeMinistry/Dashboard";
import ReleventMinistry from "../components/containers/financeMinistry/ReleventMinistry";

const routes = [
    {path:'/dashboard', exact:true, name:'Dashboard', component: Dashboard},
    {path:'/dashboard/relevant-ministry', exact:true, name:'RelevantMinistry', component: ReleventMinistry},
    {path:'/dashboard/add-relevant-ministry', exact:true, name:'Add_RelevantMinistry', component: AddRelevantMinistry},

];

export default routes;