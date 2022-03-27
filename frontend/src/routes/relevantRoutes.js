import Dept from "../components/containers/relevantMinistry/Dept";
import RelevantDashboard from "../components/containers/relevantMinistry/RelevantDashboard";
import AddDept from "../components/containers/relevantMinistry/AddDept";
import EditDept from "../components/containers/relevantMinistry/EditDept";
import FundReq from "../components/containers/relevantMinistry/FundReq";
import FundStatus from "../components/containers/relevantMinistry/FundStatus";
import FinanceFundReq from "../components/containers/relevantMinistry/FinanceFundReq";
import EditFinanceRequest from "../components/containers/relevantMinistry/EditFinanceRequest";

const releventRoutes = [
    {path:'/relevant/dashboard', exact:true, name:'relevant', component: RelevantDashboard},
    {path:'/relevant/dashboard/departments', exact:true, name:'relevant_Dept', component: Dept},
    {path:'/relevant/dashboard/add-departments', exact:true, name:'add_relevant_Dept', component: AddDept},
    {path:'/relevant/dashboard/edit-department/:id', exact:true, name:'edit_relevant_Dept', component: EditDept},
    {path:'/relevant/dashboard/fund-request', exact:true, name:'relevant_Dept_fund', component: FundReq},
    {path:'/relevant/dashboard/fund-status/:id', exact:true, name:'relevant_Dept_fund', component: FundStatus},
    {path:'/relevant/dashboard/finance-funds-request', exact:true, name:'relevant_finance_fund', component: FinanceFundReq},
    {path:'/relevant/dashboard/edit-finance-request/:id', exact:true, name:'relevant_finance_fund_edit', component: EditFinanceRequest},
];

export default releventRoutes;