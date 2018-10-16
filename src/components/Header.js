import React from 'react';

const Header = ({
                    value,
                    onClick,
                    onChangeText,
                    filter,
                    changeFilterAll,
                    changeFilterCompleted,
                    changeFilterActive
                }) => (
    <div>
        <input value={value} onChange={event => onChangeText(event.target.value)}/>
        <button onClick={onClick}>
            Add item
        </button>
        <ul>
            <li>
                <a href="" onClick={e => changeFilterAll(e)}>All</a>
            </li>
            <li>
                <a href="" onClick={e => changeFilterCompleted(e)}>Completed</a>
            </li>
            <li>
                <a href="" onClick={e => changeFilterActive(e)}>Active</a>
            </li>
        </ul>
    </div>
);

export default Header;