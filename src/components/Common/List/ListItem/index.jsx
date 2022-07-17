import React from "react";
import './styles.css'
const ListItem = ({ id, title, status, serial, handleDelete, handleComplete }) => {


    return (
        <div className='todoItem'>
            <p className="index">{serial}</p>
            <div className={`card ${status ? 'boreders' : ''}`}>
                <div>
                    <p className="title">{title && title.substring(0, 30)}</p>
                    <hr color="green" />
                    <div className="subset">
                        <p onClick={() => handleComplete(id)} className="status">{!status ? 'Mark as completed' : 'Mark as incompleted'}</p>
                        <button onClick={() => handleDelete(id)} className="delete">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
