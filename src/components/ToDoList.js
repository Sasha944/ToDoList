import React from 'react';
import ToDoItem from "./ToDoItem";

const ToDoList = (
    {
        items,
        onToDoClick,
        filter,
        onToDoRemoveClick
    }
) => {
    let array =[];
    if (filter === "all")
        array = [...items];
    else if (filter === "completed")
        array = [...items.filter((item) => item.isCompleted)];
    else if (filter === "active")
        array = [...items.filter((item) => !item.isCompleted)];
    return (
    <>
        <ul>
            {array.map(i => <ToDoItem onRemoveClick={onToDoRemoveClick} onClick={onToDoClick} key={i.id} id={i.id} {...i} is={i.isCompleted}/>)}
        </ul>
    </>

)};

export default ToDoList;
