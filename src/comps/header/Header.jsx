import React, { useRef, useState } from 'react'
import './Header.scss'
import { Dropdown } from 'primereact/dropdown';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import Navbar from '../navigation/Navbar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import Menu from '../../assets/images/menu.svg';
import Arrow from '../../assets/images/arrow.svg';
import Divider from '../../assets/images/Divider.svg';
import Bell from '../../assets/images/Bell.svg';

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
            {/* <div>
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
            </div> */}
            {/* <div>
                <img src={Menu} />
            </div> */}
            <div className='flex'>
                <img src={Bell} className='mr-3' />
                <img src={Divider} />
                <button className={'w-full flex align-items-center pr-2'}>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" shape="circle" />
                    <div className="flex flex-column align">
                        <span className="text-user">Ajay Shah</span>
                    </div>
                </button>
                <img src={Arrow} />
            </div>

        </div>
    )
}
