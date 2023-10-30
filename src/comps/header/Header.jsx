import React, { useRef, useState } from 'react'
import './Header.scss'
// import { Dropdown } from 'primereact/dropdown';
// import { Link, Navigate, useNavigate } from 'react-router-dom';
// import { Sidebar } from 'primereact/sidebar';
// import Navbar from '../navigation/Navbar';
// import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import Menu from '../../assets/images/menu.svg';
import Arrow from '../../assets/images/arrow.svg';
import Divider from '../../assets/images/Divider.svg';
import Bell from '../../assets/images/Bell.svg';

export default function Header(props) {
    // const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    return (
        <div className="header">
            <div>
                <img onClick={()=> props.onToggle()} src={Menu} />
            </div>
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
