import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import { toast } from 'react-toastify';
import { postCreateNewUser, putUpdateUser } from '../../../../services/apiServices';
import _ from 'lodash'



const ModelViewUser = (props) => {
    const { show, setShow, dataView, resetUpdateData } = props;
    const handleClose = () => {
        setShow(false)
        setEmail('');
        setPassword('')
        setUsername('')
        setImg('')
        setPreviewImg('')
        setRole('USER')
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [img, setImg] = useState('');
    const [role, setRole] = useState('user')
    const [previewImg, setPreviewImg] = useState(''); // show lại ảnh upload

    useEffect(() => {
        // cheack dateUpdate là rỗng trả ra true ! nếu biến không rỗng
        if (!_.isEmpty(dataView)) {
            setEmail(dataView.email);
            setUsername(dataView.username)
            if (dataView.image) {
                setPreviewImg(`data:image/jpeg;base64,${dataView.image}`)
            }
            setRole(dataView.role)
            resetUpdateData();
        }

    }, [dataView])

    const handleUploadImg = (e) => {
        // kiểm tra nếu tồn tại thì set ko thì thôi trong trường hợp người dùng ko upload file thì ko set biến này
        if (e.target && e.target.files && e.target.files[0]) {
            setPreviewImg(URL.createObjectURL(e.target.files[0]))
            // URL.createObjectURL cho ra 1 cái ảnh preview (tạo ra 1 cái đường link tại lch dưới dạng blod)
            setImg(e.target.files[0])
        } else {
            // setPreviewImg('');
        }
    }
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Add New User
            </Button> */}

            <Modal
                backdrop='static'
                size="lg"
                show={show}
                onHide={handleClose}
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                disabled
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                disabled
                                onChange={(e) => setPassword(e.target.value)}

                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">UserName</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}

                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" onChange={(e) => setRole(e.target.value)}>
                                <option value='user'>USER</option>
                                <option>ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label label-upload" htmlFor='uploadImg'>
                                <FcPlus />Upload File Image
                            </label>
                            <input
                                type='file'
                                id='uploadImg'
                                hidden
                                onChange={(e) => handleUploadImg(e)}
                            />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImg ? <img src={previewImg} /> : <span> Preview Image</span>}
                            {/* điều kiện nếu previewImg có tồn tại thig show img */}

                        </div>


                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModelViewUser