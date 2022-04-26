import AddRelevantMinistry from "../components/containers/financeMinistry/AddRelevantMinistry";
import Dashboard from "../components/containers/financeMinistry/Dashboard";
import EditRelevantMinistry from "../components/containers/financeMinistry/EditRelevantMinitry";
import FundRequest from "../components/containers/financeMinistry/FundRequest";
import ReleventMinistry from "../components/containers/financeMinistry/ReleventMinistry";
import TransferFund from "../components/containers/financeMinistry/TransferFund";
import ViewTransaction from "../components/containers/financeMinistry/ViewTransaction";

const routes = [
    {path:'/dashboard', exact:true, name:'Dashboard', component: Dashboard},
    {path:'/dashboard/relevant-ministry', exact:true, name:'RelevantMinistry', component: ReleventMinistry},
    {path:'/dashboard/add-relevant-ministry', exact:true, name:'Add_RelevantMinistry', component: AddRelevantMinistry},
    {path:'/dashboard/edit-relevant-ministry/:id', exact:true, name:'Edit_RelevantMinistry', component: EditRelevantMinistry},
    {path:'/dashboard/fund-request', exact:true, name:'fund_request', component: FundRequest},
    {path:'/dashboard/transfer-funds', exact:true, name:'transfer Funds', component: TransferFund},
    {path:'/dashboard/view-transactions/:address', exact:true, name:'view transaction', component:   ViewTransaction},

];


export default routes;