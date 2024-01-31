import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Sidebar.css";
import Dashboard from "./Dashboard";

const Sidebar1 = () => {
    const navigate = useNavigate();
    const SideBar1 = () => {
        return (
            <div className="dashboardSideBar">
                <div className="dashboardSidebarInnerContainer">
                    <Link to="/adminpage">
                        <button className="dashboardSidebarBtn">Home</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/admintheme">
                        <button className="dashboardSidebarBtn">Edit theme</button>
                    </Link>
                    <Link to="/themes">
                        <button className="dashboardSidebarBtn">view theme</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/addons">
                        <button className="dashboardSidebarBtn">Edit Addons</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/profile">
                        <button className="dashboardSidebarBtn">Profile</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/">
                        <button className="dashboardSidebarBtn">Logout</button>
                    </Link>
                    &nbsp;&nbsp;
                </div>
            </div>
        );
    }

    return (
        <div className="dashboardMainContainer">
            <SideBar1 />
            <h1></h1>
            <Dashboard/>
        </div>
    );
}

export default Sidebar1;

