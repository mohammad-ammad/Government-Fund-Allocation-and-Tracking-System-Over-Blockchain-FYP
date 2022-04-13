import React from 'react'
import Card from '../../chunks/Card'
import {FaUsers} from 'react-icons/fa';
import {BiGitPullRequest,BiTransfer} from 'react-icons/bi';
import {MdPendingActions} from 'react-icons/md';
import {BsClipboardCheck} from 'react-icons/bs';
import {RiFundsFill} from 'react-icons/ri';

const DeptDashboard = () => {
  return (
    <div className='dashboard__wrapper'>
      <div className="dashboard__top_container">
        <div>
          Welcome Admin
        </div>
        <div>
          <button>Connect Wallet</button>
        </div>
      </div>
      <div className="dashboard__mid_container">
        <div>
          Account: <span>0xFE7Cd4f19D1CfAA58F95a1E854fF82092c2497cb</span>
        </div>
        <div>
          Balance: <span>1 Eth</span>
        </div>
      </div>
      <div className="dashboard__bottom_container">
        <Card title="Relevant Ministry" icon={<FaUsers/>} num={0}/>
        <Card title="Pending Fund Request" icon={<BiGitPullRequest/>} num={0}/>
        <Card title="Processing Fund Request" icon={<MdPendingActions/>} num={0}/>
        <Card title="Approved Fund Request" icon={<BsClipboardCheck/>} num={0}/>
        <Card title="Fund transfer" icon={<BiTransfer/>} num={0}/>
        <Card title="Pending Budget" icon={<RiFundsFill/>} num={0}/>
      </div>
    </div>
  )
}

export default DeptDashboard