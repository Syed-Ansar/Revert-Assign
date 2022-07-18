import axios from "axios";
import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import InputBox from "../Common/Input";
import List from "../Common/List";
import './styles.css'

const Home = () => {
    const [inputdata, setInputdata] = useState('')
    const [data, setData] = useState([])

    const getInput = (event) => {
        setInputdata(event.target.value)
    }

    const getData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            const resData = response.data;
            setData(resData.reverse())
        } catch (error) {
            console.error(error);
        };
    }

    const handleSubmit = async () => {
        const newTodo = { completed: false, title: inputdata, userId: 1 }
        if (inputdata) {
            try {
                const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
                const todo = [...data, response.data];
                setData(todo)
                setInputdata('')
            } catch (error) {
                console.error(error);
            }
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            const filterData = data.filter((item) => {
                return item.id !== id
            });
            setData(filterData)
        } catch (error) {
            console.error(error);
        }
    }
    const handleComplete = async (id) => {
        const filterData = data.filter((item) => {
            return item.id === id
        });
        const dataChange = filterData[0];
        const completed = { title: dataChange.title, completed: !dataChange.completed }
        try {
            const response = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, completed)
            setData(data.map((item) => item.id === id ? { ...response.data } : item))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="todos">
            <p className="additems">Add a new task in the list</p>
            <div>
                <div className=''>
                    <InputBox Inputdata={inputdata} handleSubmit={handleSubmit} getInput={getInput} />
                    <h1 className="list-head">Added task in to-do list</h1>
                </div>
                <div className=''>
                    {data.length ? <List data={data} handleDelete={handleDelete} handleComplete={handleComplete} /> :
                        <div className="loading">
                            <Circles color="#7AB530" height={80} width={80} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
