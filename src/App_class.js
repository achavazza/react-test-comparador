import React, { useState, Component } from "react";

class App extends Component {
    state = {
        firstName: "",
        lastName: ""
    }
    /*
    const[inputList, setInputList] = useState([
      {
        firstName: "",
        lastName: ""
      }
    ]);
    */
    constructor(props) {
        super(props);
        this.state = {
            inputList: 0
        };
    }


    // handle input change
    handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...this.state.list];
        list[index][name] = value;
        console.log(...this.state.list);
        console.log(list);
        console.log(value);
        console.log(index);
        this.setState({ list: list });
    };

    // handle click event of the Remove button
    handleRemoveClick = (index) => {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({ list: list });
    };

    // handle click event of the Add button
    handleAddClick() {
        this.state.list([...this.state.list, { firstName: "", lastName: "" }]);
    };
    render() {
        return (
            <div className="App">
                <h3><a href="https://cluemediator.com">Clue Mediator</a></h3>
                {this.state.list.map((x, i) => {
                    let removeButton = <button onClick={() => { this.handleRemoveClick(i) }}>Remove</button>;
                    let addButton = <button onClick={() => { this.handleAddClick() }}>Add</button>;
                    return (
                        <div className="box" key={i}>
                            <input name="firstName" placeholder="Enter First Name" value={x.firstName} onChange={e => this.handleInputChange(e, i)} />
                            <input name="lastName" placeholder="Enter Last Name" value={x.lastName} onChange={e => this.handleInputChange(e, i)} />
                            <div className="btn-box">
                                {this.state.list.length !== 1 && removeButton}
                                {this.state.list.length - 1 === i && addButton}
                            </div>
                        </div>
                    );
                })}
                <div style={{ marginTop: 20 }}>{JSON.stringify(this.state.list)}</div>
            </div>
        );
    }
}

export default App;