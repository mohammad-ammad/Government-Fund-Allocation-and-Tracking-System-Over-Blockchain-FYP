import AddRelevantMinistry from "../components/containers/financeMinistry/AddRelevantMinistry";
import Dashboard from "../components/containers/financeMinistry/Dashboard";
import EditRelevantMinistry from "../components/containers/financeMinistry/EditRelevantMinitry";
import ReleventMinistry from "../components/containers/financeMinistry/ReleventMinistry";

const routes = [
    {path:'/dashboard', exact:true, name:'Dashboard', component: Dashboard},
    {path:'/dashboard/relevant-ministry', exact:true, name:'RelevantMinistry', component: ReleventMinistry},
    {path:'/dashboard/add-relevant-ministry', exact:true, name:'Add_RelevantMinistry', component: AddRelevantMinistry},
    {path:'/dashboard/edit-relevant-ministry/:id', exact:true, name:'Edit_RelevantMinistry', component: EditRelevantMinistry},

];


export default routes;