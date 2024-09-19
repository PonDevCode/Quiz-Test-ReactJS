import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../../services/apiServices';
import { toast } from 'react-toastify';


const ModelDeleteUser =  (props) => {


    const { show, setShow, dataDelete } = props
    const handleClose = () => {
        setShow(false)
    }

    const handleDelete = async() => {
        let data = await deleteUser(dataDelete.id);
        if (data && data.EC === 0) {
            toast.success('success delete')
            handleClose(true)
            await props.fecthUserAll()
        }
        if (data && data.EC !== 0) {
            toast.error(`email  already exists`)

        }
    }


    // console.log(dataDelete);

    return (
        <>


            <Modal
                backdrop='static'
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có Thật sự muốn xóa ! email: {dataDelete.email}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModelDeleteUser