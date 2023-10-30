import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Navbar from "../navigation/Navbar";

export default function Layout() {
    const [visible, setVisible] = useState(false);
    
    const toggle = () =>{
        setVisible(!visible);
    }

    useEffect(()=>{
        console.log("Visible :",visible);
    },[visible])

    return (
        <>
            <Header setVisibleValue={visible} onToggle={()=> toggle()} />
            {visible && <Navbar />}
        </>
    );
};

