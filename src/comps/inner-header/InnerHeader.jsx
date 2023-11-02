import React, { useEffect } from 'react';
import BlueHeader from '../../assets/images/blue-header.png';
import { useLocation, useParams } from 'react-router-dom';
import { Button } from 'primereact/button';


export default function InnerHeader() {
    const params = useParams();

    // Get the current route information using the useLocation hook
    const location = useLocation();

    // Access the route name from the location object
    const routeName = location.pathname;
    useEffect(() => {
        console.log("===>>", routeName)
    }, [routeName])
    return (
        <div className='inner-header'>
            <img className='w-full h-full' src={BlueHeader} />
            <div className='flex overlay justify-content-between'>
                <div className='flex flex-column'>
                    {/* <div>{params.customer}</div>
                    <div>{params.customer} {">>"} {params.contactlist}</div> */}
                </div>
                <div className='flex'>
                    <Button className='btn-header mr-3' label="Contact Group" icon="pi pi-plus" outlined />
                    <Button className='btn-header' label="Add New" icon="pi pi-plus" outlined />
                </div>
            </div>
        </div>
    )
}
