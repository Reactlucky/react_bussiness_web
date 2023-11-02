import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable'
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react'

export default function Invoices() {
    const [searchText, setSearchText] = useState('');
    const handleSearchInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const contactList = [
        {
            "image": "https://example.com/profile-image1.jpg",
            "contact_name": "John Doe",
            "profile_type": "Friend",
            "email": "john.doe@example.com",
            "phone": "123-456-7890",
            "group": "Work",
            "actions": ''
        },
        {
            "image": "https://example.com/profile-image2.jpg",
            "contact_name": "Jane Smith",
            "profile_type": "Family",
            "email": "jane.smith@example.com",
            "phone": "987-654-3210",
            "group": "Friends",
            "actions": ''
        },
        {
            "image": "https://example.com/profile-image3.jpg",
            "contact_name": "Alice Johnson",
            "profile_type": "Colleague",
            "email": "alice.johnson@example.com",
            "phone": "555-123-4567",
            "group": "Work",
            "actions": ''
        }
    ];

    const filteredContactList = contactList && contactList.filter((item) =>
        item.contact_name?.toLowerCase().includes(searchText?.toLowerCase())
    );


    const columns = [
        { header: 'Image', body: (data) => { return <span><Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" shape="circle" /></span>; } },
        { header: 'Contact Name', body: (data) => { return <span>{data?.contact_name}</span>; } },
        { header: 'Profile Type', body: (data) => { return <span>{data?.profile_type}</span>; } },
        { header: 'Email', body: (data) => { return <span>{(data?.email)}</span>; } },
        { header: 'Phone', body: (data) => { return <span>{(data?.phone)}</span>; } },
        { header: 'Group', body: (data) => { return <span>{data?.group}</span>; } },
        { header: 'Actions', body: (data) => { return <span>{"Action"}</span>; } },
    ];

    const headers = (
        <div className='flex justify-content-between align-items-center table-header'>
            <h2>Invoices</h2>
            <div>
                <InputText
                    placeholder="Search"
                    value={searchText}
                    onChange={handleSearchInputChange}
                />
            </div>
        </div>
    );
    return (
        <div className="mt-30 custom-table">
            <DataTable paginator dataKey="id"
                header={headers}
                rows={10}
                scrollable scrollHeight="calc(100vh - 482px)"
                size={'small'}
                value={filteredContactList && filteredContactList}
                tableStyle={{ minWidth: '50rem', maxWidth: '100%' }}
            >
                {columns.map((col, i) => (<Column key={i} body={col.body} header={col.header} />))}
            </DataTable>
        </div>
    )
}
