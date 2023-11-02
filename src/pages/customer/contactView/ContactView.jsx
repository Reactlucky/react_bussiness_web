import { Avatar } from 'primereact/avatar'
import { TabPanel, TabView } from 'primereact/tabview'
import React from 'react'
import InnerHeader from '../../../comps/inner-header/InnerHeader';
import ProjectIcon1 from '../../../assets/images/arrow_up.svg';
import arrow_up from "../../../assets/images/arrow_up.svg";
import arrow_down from "../../../assets/images/arrow_down.svg";
import { Card } from 'primereact/card';
import "./ContactView.scss";

export default function ContactView() {
    function CommonCard({ title, number, company, iconSrc, bgColor }) {
        return (
            <div className="rec-card" style={{ backgroundColor: bgColor }}>
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
        <div className='contact-view-main'>
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
        </div>
    )
}
