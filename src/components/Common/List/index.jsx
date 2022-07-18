import React from "react";
import ListItem from "./ListItem";
import './styles.css'

const List = ({ data, handleDelete, handleComplete }) => {
    const listData = data.slice(-50).reverse();
    return (
        <div>
            <div className="list-items">
                {listData && listData.map((item, index) => (
                    <div key={item.userId * item.id}>
                        <ListItem id={item.id} title={item.title} status={item.completed} serial={index + 1} handleDelete={handleDelete} handleComplete={handleComplete} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
