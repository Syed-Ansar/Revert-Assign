import React from "react";
import './styles.css'
import { BsFillCheckCircleFill } from 'react-icons/bs';



const ListItem = ({ id, title, status, serial, handleDelete, handleComplete }) => {

    return (
        <div className='todoItem'>
            <p className="index">{serial}</p>
            <div className={`card ${status ? 'boreders' : ''}`}>
                {status && <p className="complete_status"><BsFillCheckCircleFill className="circle" /></p>}
                <div>
                    <p className="title">{title && title.substring(0, 30)}</p>
                    <hr color="green" />
                    <div className="subset">
                        <p onClick={() => handleComplete(id)} className={`${!status ? 'status statuesbg' : 'status '}`}>{!status ? 'Mark as completed' : 'Mark as incompleted'}</p>
                        <button onClick={() => handleDelete(id)} className={`delete ${!status && 'deletefalse'}`}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
