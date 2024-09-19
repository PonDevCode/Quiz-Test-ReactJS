import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { TfiDashboard } from "react-icons/tfi";
import SidebarHeader from '../sidebar/SidebarHeader';
import { BiBrain } from "react-icons/bi";
import { IoDiamondSharp } from "react-icons/io5"
// Đảm bảo import CSS nếu cần

const SidebarAdmin = ({ collapsed }) => {
    return (
        <Sidebar
            collapsed={collapsed}
            image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <SidebarHeader style={{ marginBottom: '24px', marginTop: '16px' }} />
                <div style={{ flex: 1, marginBottom: '32px' }}>
                    <div style={{ padding: '0 24px', marginBottom: '8px', opacity: '0.7' }}>
                        <h5 style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                            General
                        </h5>
                    </div>
                    <Menu >
                        <SubMenu label={
                                <>
                                    <TfiDashboard />
                                    <Link to="/admin"> Dashboard</Link>
                                </>
                            }>
                            
                        </SubMenu>
                        <SubMenu
                            label={
                                <>
                                    <IoDiamondSharp /> Features
                                </>
                            }
                        >
                            <MenuItem>
                                <Link to="/admin/manageUser"> Quản Lý User</Link>
                            </MenuItem>
                            <MenuItem> Quản Lý Câu hỏi</MenuItem>
                            <MenuItem> Quản Lý Bài Quiz</MenuItem>
                        </SubMenu>


                        {/* <SubMenu label="Components" >
                            <MenuItem> Grid</MenuItem>
                            <MenuItem> Layout</MenuItem>
                            <SubMenu label="Forms">
                                <MenuItem> Input</MenuItem>
                                <MenuItem> Select</MenuItem>
                                <SubMenu label="More">
                                    <MenuItem> CheckBox</MenuItem>
                                    <MenuItem> Radio</MenuItem>
                                </SubMenu>
                            </SubMenu>
                        </SubMenu> */}
                        {/* <SubMenu label="E-commerce" >
                            <MenuItem> Product</MenuItem>
                            <MenuItem> Orders</MenuItem>
                            <MenuItem> Credit card</MenuItem>
                        </SubMenu> */}
                    </Menu>

                    {/* <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}>
                            extra
                    </div>

                    <Menu >
                        <MenuItem >
                            Calendar
                        </MenuItem>
                        <MenuItem >Documentation</MenuItem>
                        <MenuItem disabled>
                            Examples
                        </MenuItem>
                    </Menu> */}
                </div>

            </div>
        </Sidebar>
    );
};

export default SidebarAdmin;