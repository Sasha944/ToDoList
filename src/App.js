import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/ToDoList';

const CreateItem = (value, id = 0) => (
        [
            {
                id,
                completed: false,
                title: value
            }
        ]
    )
;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: '',
            id: 0,
            filter: "all"
        };
        this.onChangeInputText = this.onChangeInputText.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.changeFilterAll = this.changeFilterAll.bind(this);
        this.changeFilterCompleted = this.changeFilterCompleted.bind(this);
        this.changeFilterActive = this.changeFilterActive.bind(this);
        this.handleToDoClick = this.handleToDoClick.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.onToDoRemoveClick = this.onToDoRemoveClick.bind(this);
    }

    onChangeInputText(text) {
        this.setState({text})
    }

    handleChangeText() {
        const item = CreateItem(this.state.text, this.state.id);
        this.setState({
            id: this.state.id + 1,
            items: item.concat(this.state.items),
            text: ''
        });
    }

    handleSelectChange(e) {
        this.setState({
            filter: e.target.value
        });
    }

    onToDoRemoveClick(e, id) {
        e.stopPropagation();
        this.setState({
            items: this.state.items.filter((todoItem) => todoItem.id !== id)
        });
    }

    changeFilterAll(event) {
      event.preventDefault();
      this.setState({
          filter: "all"
      })
    }

    changeFilterCompleted(event) {
        event.preventDefault();
        this.setState({
            filter: "completed"
        })
    }
    changeFilterActive(event) {
        event.preventDefault();
        this.setState({
            filter: "active"
        })
    }

    handleToDoClick(id) {
        const newArray = [...this.state.items];
        console.log(newArray)

        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].id === id)
                newArray[i].isCompleted = !newArray[i].isCompleted;
        }
        this.setState({
            items: newArray
        });

    }
    render() {
        return (
            <>
                <Header changeFilterAll={this.changeFilterAll} changeFilterCompleted={this.changeFilterCompleted} changeFilterActive={this.changeFilterActive} value={this.state.text} onChangeText={this.onChangeInputText} onClick={this.handleChangeText}/>
                <TodoList onToDoRemoveClick={this.onToDoRemoveClick}  filter={this.state.filter} items={this.state.items}
                          onToDoClick={this.handleToDoClick}/>
            </>
        );
    }
}

export default App;
