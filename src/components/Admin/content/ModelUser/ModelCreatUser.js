import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import { toast } from 'react-toastify';
import { postCreateNewUser } from '../../../../services/apiServices';



const ModelCreatUser = (props) => {
    const { show, setShow } = props;


    const handleClose = () => {
        setShow(false)
        setEmail('');
        setPassword('')
        setUsername('')
        setImg('')
        setPreviewImg('')
        setRole('USER')


    };
    // const handleShow = () => setShow(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [img, setImg] = useState('');
    const [role, setRole] = useState('user')

    const [previewImg, setPreviewImg] = useState(''); // show lại ảnh upload


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
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleSubmitCreateUser = async () => {

        // validate
        const isValidateEmail = validateEmail(email);
        if (!isValidateEmail) {
            toast.error('invalid email')
            return;
        }
        if (!password) {
            toast.error('invalid passwwod')
            return
        }
        // call api
        // let data = {
        //     email: email,
        //     password: password,
        //     username: username,
        //     role: role,
        //     userImage: img
        // }
        // console.log(data);

        // check trạng thái lỗi thành công
        let data = await postCreateNewUser(email, password, username, role, img);

        if (data && data.EC === 0) {
            toast.success('success user')
            handleClose(true)
            await props.fecthUserAll()
        }
        if (data && data.EC !== 0) {
            toast.error(`email  already exists`)

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
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
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
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleSubmitCreateUser() }}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModelCreatUser