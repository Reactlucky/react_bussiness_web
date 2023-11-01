import React, { useState } from "react";
// import { Sidebar } from 'primereact/sidebar';
// import { Button } from 'primereact/button';
// import Navbar from '../../comps/navigation/Navbar';
import Header from "../../comps/header/Header";
import { Card } from "primereact/card";
import "./Dashboard.scss";
import LineDemo from "./chart/LineChart";
import VerticalBarDemo from "./chart/BarChart";
import Navbar from "../../comps/navigation/Navbar";
import Layout from "../../comps/layout/Layout";
import { TabView, TabPanel } from "primereact/tabview";
import { Avatar } from "primereact/avatar";
import arrow_up from "../../assets/images/arrow_up.svg";
import arrow_down from "../../assets/images/arrow_down.svg";
import InnerHeader from "../../comps/inner-header/InnerHeader";

const Dashboard = () => {
  const [showBarChart, setShowBarChart] = useState(false);

  function CommonCard({ title, number, company, iconSrc, bgColor }) {
    return (
      <div className="rec-card" style={{backgroundColor:bgColor}}>
        <div className="rec-card-content">
          {/* <h2>{title}</h2>
          <p className="p-count">{number}</p>
          <p className="p-bottom-text">{company}</p> */}
          <div className="card-first-text">{title}</div>
          <div className="card-second-text">{number}</div>
          <div className="card-third-text">{company}</div>
        </div>
        <div className="rec-card-header">
          <img src={arrow_up} />
        </div>
      </div>
    );
  }
  return (
    <>
      <div>
        <InnerHeader />
      </div>
      <div>
        <div className="main-top-div">
          <div className="row">
            <div className="column">
              <div className="card">
                <Avatar
                  className="avatar-image"
                  icon="pi pi-user"
                  size="xlarge"
                  shape="circle"
                />

                <div className="card-content">
                  <h2 style={{ color: "#54636E" }}> John Doe</h2>
                  <p style={{ color: "#B3BDC4" }}>Group: Example Group</p>
                </div>
              </div>
            </div>
            <div className="column">
              <CommonCard
                bgColor={'#D7FFE0'}
                title="Total Projects"
                number="123"
                company="Up 73% from last year"
                iconSrc="project-icon1.png"
              />
              <CommonCard
                bgColor={'#FEFFE3'}
                title="Total Payment"
                number="456"
                company="Up 73% from last year"
                iconSrc="project-icon2.png"
              />
            </div>
            <div className="column">
              <CommonCard
                bgColor={'#E8EBFF'}
                title="Invoice Value"
                number="789"
                company="Up 73% from last year"
                iconSrc="project-icon3.png"
              />
              <CommonCard
                bgColor={'#FFE7E7'}
                title="Total Due"
                number="999"
                company="Up 73% from last year"
                iconSrc="project-icon4.png"
              />
            </div>
          </div>
        </div>
        <TabView>
          <TabPanel header="Header I">
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel header="Header II">
            <p className="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
              velit, sed quia non numquam eius modi.
            </p>
          </TabPanel>
          <TabPanel header="Header III">
            <p className="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </TabPanel>
        </TabView>
      </div>
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
  );
};
export default Dashboard;
