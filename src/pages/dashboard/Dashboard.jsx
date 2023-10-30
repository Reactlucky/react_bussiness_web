

import React, { useState } from 'react';
// import { Sidebar } from 'primereact/sidebar';
// import { Button } from 'primereact/button';
// import Navbar from '../../comps/navigation/Navbar';
import Header from '../../comps/header/Header';
import { Card } from 'primereact/card';
import './Dashboard.scss'
import LineDemo from './chart/LineChart';
import VerticalBarDemo from './chart/BarChart';
import Navbar from '../../comps/navigation/Navbar';
import Layout from '../../comps/layout/Layout';


const Dashboard = () => {
    const [showBarChart, setShowBarChart] = useState(false);

    return (
        <>
        <Layout />
            {/* <Header />
            <Navbar /> */}
            {/* <div className='dashboard-card'>
                <Card className='card-blue' title="Current Month Income">
                    <span className="card-value">$0.00</span>
                </Card>
                <Card className='card-green' title="Current Month Expense">
                    <span className="card-value">$0.00</span>
                </Card>
                <Card className='card-yellow' title="Project Inprogress">
                    <span className="card-value">2</span>
                </Card>
                <Card className='card-red' title="Completed Project">
                    <span className="card-value">0</span>
                </Card>
                <Card className='card-blue' title="Total Invoice">
                    <span className="card-value">5</span>
                </Card>
                <Card className='card-green' title="Unpaid Invoice">
                    <span className="card-value">5</span>
                </Card>
                <Card className='card-yellow' title="Invoice Due Amount">
                    <span className="card-value">$411.00</span>
                </Card>
                <Card className='card-red' title="Cancelled Invoice">
                    <span className="card-value">0</span>
                </Card>
            </div> */}
            {/* <div className='p-4'>
                <div className='m-4 flex justify-content-between'>
                    <h2>Income Vs Expense - 2023</h2>
                    <span>
                    <i className="pi pi-chart-line m-2" style={{ fontSize: '2rem', color:`${showBarChart == false ? "blue" : "gray"}` }} role='button' onClick={()=> setShowBarChart(false)}></i>
                    <i className="pi pi-chart-bar m-2" style={{ fontSize: '2rem', color:`${showBarChart == true ? "blue" : "gray"}` }} role='button' onClick={()=> setShowBarChart(true)}></i>
                    </span>
                </div>
                {!showBarChart && <div>
                    <LineDemo />
                </div>}
                {showBarChart && <div>
                    <VerticalBarDemo />
                </div>}

            </div> */}
        </>
    )
}
export default Dashboard;