import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { routePath } from "../../services/routelink";
import "./Navbar.scss";

export default function Navbar() {
    const navigate = useNavigate();
    const menuLeft = useRef(null);

    const user = localStorage.getItem("user");
    const authUser = user ? JSON.parse(user) : null;

    const href = window.location.href;
    const activeLink = (path, classes) => { return href.indexOf(`${path}`) > -1 ? 'active ' + classes : classes; }

    const userMenu = [
        {
            label: "Dashboard",
            icon: "pi pi-th-large",
            command: () => { navigate(routePath.dashboard); },
            template: (item, options) => <div onClick={(e) => options.onClick(e)}
                className={activeLink(routePath.dashboard, "p-menuitem-link")}>
                <i className="p-menuitem-icon pi pi-th-large"></i>
                <span className="p-menuitem-text">Dashboard</span>
            </div>

        },
        {
            label: "Customers",
            icon: "pi pi-chart-bar",
            command: () => { navigate(routePath.reports) },
            template: (item, options) => <div onClick={(e) => options.onClick(e)}
                className={activeLink(routePath.reports, "p-menuitem-link")}>
                <i className="p-menuitem-icon pi pi-chart-bar"></i>
                <span className="p-menuitem-text">Customers</span>
            </div>
        },
        {
            label: "Leads",
            icon: "pi pi-code",
            command: () => {
                navigate(routePath.projects);
            },
            template: (item, options) => <div onClick={(e) => options.onClick(e)}
                className={activeLink(routePath.projects, "p-menuitem-link")}>
                <i className="p-menuitem-icon pi pi pi-code"></i>
                <span className="p-menuitem-text">Leads</span>
            </div>
        },
        {
            label: "Projects",
            icon: "pi pi-users",
            command: () => { navigate(routePath.users); },
            template: (item, options) => <div onClick={(e) => options.onClick(e)}
                className={activeLink(routePath.users, "p-menuitem-link")}>
                <i className="p-menuitem-icon pi pi-users"></i>
                <span className="p-menuitem-text">Projects</span>
            </div>
        },
        {
            label: "Tasks",
            icon: "pi pi-ticket",
            command: () => {
                navigate(routePath.leaves);
            },
            template: (item, options) => <div onClick={(e) => options.onClick(e)}
                className={activeLink(routePath.leaves, "p-menuitem-link")}>
                <i className="p-menuitem-icon pi pi-ticket"></i>
                <span className="p-menuitem-text">Tasks</span>
            </div>
        },

        {
            label: "Products",
            icon: "pi pi-home",
            command: () => {
                navigate(routePath.wfh);
            },
            template: (item, options) => <div onClick={(e) => options.onClick(e)}
                className={activeLink(routePath.wfh, "p-menuitem-link")}>
                <i className="p-menuitem-icon pi pi-home"></i>
                <span className="p-menuitem-text">Products</span>
            </div>
        },
        {
            label: "Service",
            icon: "pi pi-book",
            command: () => {
                navigate(routePath.contact);
            },
            template: (item, options) => <div onClick={(e) => options.onClick(e)}
                className={activeLink(routePath.contact, "p-menuitem-link")}>
                <i className="p-menuitem-icon pi pi-book"></i>
                <span className="p-menuitem-text">Service</span>
            </div>
        },
        {
            label: "Suppliers",
            icon: "pi pi-exclamation-circle",
            command: () => {
                navigate(routePath.getpolicy);
            },
            template: (item, options) => <div onClick={(e) => options.onClick(e)}
                className={activeLink(routePath.getpolicy, "p-menuitem-link")}>
                <i className="p-menuitem-icon pi pi-exclamation-circle"></i>
                <span className="p-menuitem-text">Suppliers</span>
            </div>
        },
        {
            label: "Purchase",
            icon: "pi pi-exclamation-circle",
            command: () => {
                navigate(routePath.getpolicy);
            },
            template: (item, options) => <div onClick={(e) => options.onClick(e)}
                className={activeLink(routePath.getpolicy, "p-menuitem-link")}>
                <i className="p-menuitem-icon pi pi-exclamation-circle"></i>
                <span className="p-menuitem-text">Purchase</span>
            </div>
        },
        {
            label: "Return",
            icon: "pi pi-exclamation-circle",
            command: () => {
                navigate(routePath.getpolicy);
            },
            template: (item, options) => <div onClick={(e) => options.onClick(e)}
                className={activeLink(routePath.getpolicy, "p-menuitem-link")}>
                <i className="p-menuitem-icon pi pi-exclamation-circle"></i>
                <span className="p-menuitem-text">Return</span>
            </div>
        },
        {
            label: "Sales",
            icon: "pi pi-exclamation-circle",
            command: () => {
                navigate(routePath.getpolicy);
            },
            template: (item, options) => <div onClick={(e) => options.onClick(e)}
                className={activeLink(routePath.getpolicy, "p-menuitem-link")}>
                <i className="p-menuitem-icon pi pi-exclamation-circle"></i>
                <span className="p-menuitem-text">Sales</span>
            </div>
        },
        {
            label: "Accounts",
            icon: "pi pi-exclamation-circle",
            command: () => {
                navigate(routePath.getpolicy);
            },
            template: (item, options) => <div onClick={(e) => options.onClick(e)}
                className={activeLink(routePath.getpolicy, "p-menuitem-link")}>
                <i className="p-menuitem-icon pi pi-exclamation-circle"></i>
                <span className="p-menuitem-text">Accounts</span>
            </div>
        },
        {
            label: "Transactions",
            icon: "pi pi-exclamation-circle",
            command: () => {
                navigate(routePath.getpolicy);
            },
            template: (item, options) => <div onClick={(e) => options.onClick(e)}
                className={activeLink(routePath.getpolicy, "p-menuitem-link")}>
                <i className="p-menuitem-icon pi pi-exclamation-circle"></i>
                <span className="p-menuitem-text">Transactions</span>
            </div>
        },
        {
            label: "Recurring Transactions",
            icon: "pi pi-exclamation-circle",
            command: () => {
                navigate(routePath.getpolicy);
            },
            template: (item, options) => <div onClick={(e) => options.onClick(e)}
                className={activeLink(routePath.getpolicy, "p-menuitem-link")}>
                <i className="p-menuitem-icon pi pi-exclamation-circle"></i>
                <span className="p-menuitem-text">Recurring Transactions</span>
            </div>
        },
        {
            label: "File Manager",
            icon: "pi pi-exclamation-circle",
            command: () => {
                navigate(routePath.getpolicy);
            },
            template: (item, options) => <div onClick={(e) => options.onClick(e)}
                className={activeLink(routePath.getpolicy, "p-menuitem-link")}>
                <i className="p-menuitem-icon pi pi-exclamation-circle"></i>
                <span className="p-menuitem-text">File Manager</span>
            </div>
        },
        {
            label: "Staff's",
            icon: "pi pi-exclamation-circle",
            command: () => {
                navigate(routePath.getpolicy);
            },
            template: (item, options) => <div onClick={(e) => options.onClick(e)}
                className={activeLink(routePath.getpolicy, "p-menuitem-link")}>
                <i className="p-menuitem-icon pi pi-exclamation-circle"></i>
                <span className="p-menuitem-text">Staff's</span>
            </div>
        },
        {
            label: "Reports",
            icon: "pi pi-exclamation-circle",
            command: () => {
                navigate(routePath.getpolicy);
            },
            template: (item, options) => <div onClick={(e) => options.onClick(e)}
                className={activeLink(routePath.getpolicy, "p-menuitem-link")}>
                <i className="p-menuitem-icon pi pi-exclamation-circle"></i>
                <span className="p-menuitem-text">Reports</span>
            </div>
        },
        {
            label: "Settings",
            icon: "pi pi-exclamation-circle",
            command: () => {
                navigate(routePath.getpolicy);
            },
            template: (item, options) => <div onClick={(e) => options.onClick(e)}
                className={activeLink(routePath.getpolicy, "p-menuitem-link")}>
                <i className="p-menuitem-icon pi pi-exclamation-circle"></i>
                <span className="p-menuitem-text">Settings</span>
            </div>
        },

    ];

    return (
        <>
            <Menu model={userMenu} />
        </>
    );
};

