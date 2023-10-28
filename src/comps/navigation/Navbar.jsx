// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { Menu } from "primereact/menu";
// import { Button } from "primereact/button";
// import { routePath } from "../../services/routelink";
// import "./UserNav.scss";

// export const UserNav = () => {
//     const navigate = useNavigate();
//     const menuLeft = useRef(null);

//     const user = localStorage.getItem("user");
//     const authUser = user ? JSON.parse(user) : null;

//     const href = window.location.href;
//     const activeLink = (path, classes) => { return href.indexOf(`${path}`) > -1 ? 'active ' + classes : classes; }

//     const userMenu = [
//         {
//             label: "Profile",
//             icon: "pi pi-box",
//             command: (e) => { menuLeft.current.toggle(e); },
//             template: (item, options) => <div className="flex gap-1 align-items-center user-menu justify-content-start">
//                 <span className="name-latter">
//                     {authUser ? `${authUser.first_name[0]}${authUser.last_name[0]}` : ""}
//                 </span>
//                 <div className="flex gap-0">
//                     <Button label={authUser ? `${authUser.first_name}` : ""} className="user-menu-dropdown" aria-controls="popup_menu_left" aria-haspopup />
//                     <Button className="user-menu-dropdown" onClick={(e) => options.onClick(e)} ><i className="pi pi-chevron-down"></i></Button>
//                 </div>
//             </div>
//         },
//         { separator: true },
//         {
//             label: "Common",
//             items: [
//                 {
//                     label: "Dashboard",
//                     icon: "pi pi-th-large",
//                     command: () => { navigate(routePath.dashboard); },
//                     template: (item, options) => <div onClick={(e) => options.onClick(e)}
//                         className={activeLink(routePath.dashboard, "p-menuitem-link")}>
//                         <i className="p-menuitem-icon pi pi-th-large"></i>
//                         <span className="p-menuitem-text">Dashboard</span>
//                     </div>

//                 },
//                 {
//                     label: "Reports",
//                     icon: "pi pi-chart-bar",
//                     command: () => { navigate(routePath.reports) },
//                     template: (item, options) => <div onClick={(e) => options.onClick(e)}
//                         className={activeLink(routePath.reports, "p-menuitem-link")}>
//                         <i className="p-menuitem-icon pi pi-chart-bar"></i>
//                         <span className="p-menuitem-text">Reports</span>
//                     </div>
//                 },
//                 {
//                     label: "Projects",
//                     icon: "pi pi-code",
//                     command: () => {
//                         navigate(routePath.projects);
//                     },
//                     template: (item, options) => <div onClick={(e) => options.onClick(e)}
//                         className={activeLink(routePath.projects, "p-menuitem-link")}>
//                         <i className="p-menuitem-icon pi pi pi-code"></i>
//                         <span className="p-menuitem-text">Projects</span>
//                     </div>
//                 },
//                 {
//                     label: "Teams",
//                     icon: "pi pi-users",
//                     command: () => { navigate(routePath.users); },
//                     template: (item, options) => <div onClick={(e) => options.onClick(e)}
//                         className={activeLink(routePath.users, "p-menuitem-link")}>
//                         <i className="p-menuitem-icon pi pi-users"></i>
//                         <span className="p-menuitem-text">Teams</span>
//                     </div>
//                 },
//                 {
//                     label: "Leaves",
//                     icon: "pi pi-ticket",
//                     command: () => {
//                         navigate(routePath.leaves);
//                     },
//                     template: (item, options) => <div onClick={(e) => options.onClick(e)}
//                         className={activeLink(routePath.leaves, "p-menuitem-link")}>
//                         <i className="p-menuitem-icon pi pi-ticket"></i>
//                         <span className="p-menuitem-text">Leaves</span>
//                     </div>
//                 },

//                 {
//                     label: "WFH",
//                     icon: "pi pi-home",
//                     command: () => {
//                         navigate(routePath.wfh);
//                     },
//                     template: (item, options) => <div onClick={(e) => options.onClick(e)}
//                         className={activeLink(routePath.wfh, "p-menuitem-link")}>
//                         <i className="p-menuitem-icon pi pi-home"></i>
//                         <span className="p-menuitem-text">WFH</span>
//                     </div>
//                 },
//                 {
//                     label: "Contact",
//                     icon: "pi pi-book",
//                     command: () => {
//                         navigate(routePath.contact);
//                     },
//                     template: (item, options) => <div onClick={(e) => options.onClick(e)}
//                         className={activeLink(routePath.contact, "p-menuitem-link")}>
//                         <i className="p-menuitem-icon pi pi-book"></i>
//                         <span className="p-menuitem-text">Contact</span>
//                     </div>
//                 },
//                 {
//                     label: "Policy",
//                     icon: "pi pi-exclamation-circle",
//                     command: () => {
//                         navigate(routePath.getpolicy);
//                     },
//                     template: (item, options) => <div onClick={(e) => options.onClick(e)}
//                         className={activeLink(routePath.getpolicy, "p-menuitem-link")}>
//                         <i className="p-menuitem-icon pi pi-exclamation-circle"></i>
//                         <span className="p-menuitem-text">Policy</span>
//                     </div>
//                 },
//             ],
//         },
//         { separator: true },
//         {
//             label: "Management",
//             items: [
//                 {
//                     label: "Clients",
//                     icon: "pi pi-home",
//                     command: () => {
//                         navigate(routePath.clients);
//                     },
//                     template: (item, options) => <div onClick={(e) => options.onClick(e)}
//                         className={activeLink(routePath.clients, "p-menuitem-link")}>
//                         <i className="p-menuitem-icon pi pi-user"></i>
//                         <span className="p-menuitem-text">Clients</span>
//                     </div>
//                 },

//                 {
//                     label: "HR Dept",
//                     icon: "pi pi-box",
//                     command: () => { navigate(routePath.vacancy); },
//                     template: (item, options) => <div onClick={(e) => options.onClick(e)}
//                         className={activeLink('/hrapp', "p-menuitem-link")}>
//                         <i className="p-menuitem-icon pi pi-box"></i>
//                         <span className="p-menuitem-text">HR Dept</span>
//                     </div>
//                 },
//             ],
//         },
//         { separator: true },
//     ];
//     const profileMenu = [
//         {
//             label: "Sign out",
//             icon: "pi pi-fw pi-power-off",
//             command: () => {
//                 localStorage.removeItem("token");
//                 localStorage.removeItem("user");
//                 navigate(routePath.login);
//             },
//         },
//     ];

//     return (
//         <div className="flex flex-column custom-sidebar">
//             <Menu model={userMenu} />
//             <Menu className="main-menu" model={profileMenu} appendTo="self" popup ref={menuLeft} id="popup_menu_left" />
//         </div >
//     );
// };

import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div><h2>Kuldip IT Solutions</h2></div>
            <div>
                <ol>
                    <li>Dashboard</li>
                    <li>Customer</li>
                    <li>Leads</li>
                    <li>Projects</li>
                    <li>Tasks</li>
                    <li>Products</li>
                    <li>Service</li>
                    <li>Suppliers</li>
                    <li>Purchase</li>
                    <li>Return</li>
                    <li>Sales</li>
                    <li>Accounts</li>
                    <li>Transactions</li>
                    <li>Recurring Transaction</li>
                    <li>File Manager</li>
                    <li>Staff</li>
                    <li>Reports</li>
                    <li>Settings</li>
                </ol>
            </div>
        </div>
    )
}

