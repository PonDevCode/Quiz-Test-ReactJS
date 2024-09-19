import React from 'react'


const TableUser = (props) => {

    const { listUsers, handleBtnUpdate, handleBtnView ,handleBtnDelete} = props;

    return (
        <>
            <table className="table table-hover table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Role</th>
                        <th scope="col">Setting</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.username}</td>
                                <td>{item.role}</td>
                                <td >
                                    <div className='d-flex g-1' style={{ gap: '5px' }}>
                                        <button
                                            className="btn btn-outline-primary"
                                            onClick={() => { handleBtnView(item) }}
                                        >
                                            View
                                        </button>
                                        <button
                                            className="btn btn-outline-success"
                                            onClick={() => { handleBtnUpdate(item) }}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className='btn btn-outline-danger'
                                            onClick={() => { handleBtnDelete(item) }}

                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}

                    {listUsers && listUsers.length === 0 && <tr>
                        <td colSpan={4} style={{ textAlign: 'center' }}>not default</td>
                    </tr>}

                </tbody>
            </table>
        </>
    )
}

export default TableUser