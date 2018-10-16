import React from 'react';

const ToDoItem = ({
                      title,
                      id,
                      completed,
                      onClick,
                      onRemoveClick
                  }) => {
    return (
        <li className="main">
            <div className="title" onClick={() => onClick(id)}>{title}</div>
            <button onClick={ event => onRemoveClick(event,id)}>
                remove item
            </button>
        </li>
    );
};

export default ToDoItem;