import React, { useState, useEffect } from 'react'
import './MaganeUser.scss'
import { FcPlus } from "react-icons/fc";

import ModelCreatUser from './ModelUser/ModelCreatUser';
import TableUser from './TableUser';

import { getAllUser } from '../../../services/apiServices';
import ModelUpdateUser from './ModelUser/ModelUpdateUser';
import ModelViewUser from './ModelUser/ModelViewUser';
import ModelDeleteUser from './ModelUser/ModelDeleteUser';
const ManageUser = () => {

    const [showModalCreatUser, setShowModalCreatUser] = useState(false)
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [showModalViewUser, setShowModalViewUser] = useState(false)
    const [showModalDeleteUser, setShowModalDeleteUserr] = useState(false)



    const [dataUpdate, setDataUpdate] = useState({})
    const [dataView, setDataView] = useState({})
    const [dataDelete , setDataDelete] = useState({})



    const [listUsers, setlistUsers] = useState([]);

    useEffect(() => {
        fecthUserAll()
    }, [])
    const fecthUserAll = async () => {
        let res = await getAllUser();
        // console.log(res);
        if (res.EC === 0) {
            setlistUsers(res.DT)
        }
    }

    const handleBtnUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)
    }
    const handleBtnView = (user) => {
        setShowModalViewUser(true)
        setDataView(user)
    }
    const handleBtnDelete = (user) => {
        setShowModalDeleteUserr(true)
        setDataDelete(user)
    }

    const resetUpdateData = (user) => {
        setDataUpdate('')
    }
    return (
        <div className='manage-user-content'>
            <div className='title-manage'>
                <h4>Manage User</h4>
            </div>
            <div className='user-content'>
                <div className='btn-add-new'>
                    <button className='btn btn-outline-info'
                        onClick={() => { setShowModalCreatUser(true) }} >
                        <FcPlus />
                        Add new user
                    </button>
                </div>
                <div className='table-user-container'>
                    <TableUser
                        listUsers={listUsers}
                        handleBtnUpdate={handleBtnUpdate} // truyền true mở models lên cho thằng cha
                        handleBtnView={handleBtnView}
                        handleBtnDelete={handleBtnDelete}
                    />
                </div>
                {/* <ModelCreatUser show={showModalCreatUser}/> */}
                <ModelCreatUser
                    show={showModalCreatUser}
                    setShow={setShowModalCreatUser}
                    fecthUserAll={fecthUserAll}
                />
                <ModelUpdateUser
                    show={showModalUpdateUser} // từ thằng cha nó sẽ trả xuống đây
                    setShow={setShowModalUpdateUser} // setShow = fale khi nhấn nó sẽ tắt đi vì setState lại
                    dataUpdate={dataUpdate}
                    fecthUserAll={fecthUserAll}
                    resetUpdateData={resetUpdateData}
                />
                <ModelViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataView={dataView}
                    resetUpdateData={resetUpdateData}
                />
                <ModelDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUserr}
                    dataDelete={dataDelete}
                    fecthUserAll={fecthUserAll}
                />

            </div>


        </div>
    )
}

export default ManageUser