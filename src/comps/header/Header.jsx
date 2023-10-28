import React, { useRef, useState } from 'react'
import './Header.scss'
import { Dropdown } from 'primereact/dropdown';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import Navbar from '../navigation/Navbar';
import { Button } from 'primereact/button';

export default function Header() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const options = [
        { name: 'Profile', code: 'profile' },
        { name: 'Log Out', code: 'logout' },
    ];
    const handleDropdown = (e) => {
        if (e.value.code == 'profile') {

        }
        else if (e.value.code == 'logout') {
            localStorage.clear();
            navigate('/');
        }
    }
    // Create a ref to the dropdown component
    const dropdownRef = useRef(null);

    const openDropdown = () => {
        if (dropdownRef.current) {
            dropdownRef.current.show();
        }
    };
    return (
        <div className="header">
            <div>
                <Sidebar visible={visible} onHide={() => setVisible(false)}>
                    <Navbar />
                </Sidebar>
                <Button icon="pi pi-bars" onClick={() => setVisible(true)} />
            </div>
            <div className='user-profile'>
                <div role='button' className="d-flex align-items-center ml-lg-0 ml-3">
                    <div className="circle-small-icon" onClick={openDropdown} >{"K"}</div>
                </div>
                <Dropdown ref={dropdownRef} id="user-profile" className='user-profile-main' value={"KULDIP"} onChange={(e) => { handleDropdown(e) }} options={options} optionLabel="name"
                    placeholder={"KULDIP"} />
            </div>
        </div>
    )
}
