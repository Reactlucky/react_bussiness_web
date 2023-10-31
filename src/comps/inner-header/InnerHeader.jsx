import React, { useEffect } from 'react';
import BlueHeader from '../../assets/images/blue-header.png';
import { useParams } from 'react-router-dom';
import { Button } from 'primereact/button';
        

export default function InnerHeader() {
    const params = useParams();
    useEffect(() => {
        console.log("===>>", params)
    }, [params])
    return (
        <div className='inner-header'>
            <img className='w-full' src={BlueHeader} />
            <div className='flex overlay justify-content-between'>
                <div className='flex flex-column'>
                    <div>{params.customer}</div>
                    <div>{params.customer} {">>"} {params.contactlist}</div>
                </div>
                <div className='flex'>
                <Button className='btn-header mr-3' label="Contact Group" icon="pi pi-plus" outlined />
                <Button className='btn-header' label="Add New" icon="pi pi-plus" outlined />
                </div>
            </div>
        </div>
    )
}
