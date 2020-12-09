import React, { useState } from "react";

function App() {
    const [inputList, setInputList] = useState([
        {
            firstName: "",
            lastName: ""
        }
    ]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        console.log(...inputList);
        console.log(list);
        console.log(value);
        console.log(index);
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", lastName: "" }]);
    };

    return (
        <div className="App">
            <h3><a href="https://cluemediator.com">Clue Mediator</a></h3>
            {inputList.map((x, i) => {
                let removeButton = <button onClick={() => handleRemoveClick(i)}>Remove</button>;
                let addButton = <button onClick={handleAddClick}>Add</button>;
                return (
                    <div className="box" key={inputList.i}>
                        <input name="firstName" placeholder="Enter First Name" value={x.firstName} onChange={e => handleInputChange(e, i)} />
                        <input name="lastName" placeholder="Enter Last Name" value={x.lastName} onChange={e => handleInputChange(e, i)} />
                        <div className="btn-box">
                            {inputList.length !== 1 && removeButton}
                            {inputList.length - 1 === i && addButton}
                        </div>
                    </div>
                );
            })}
            <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
        </div>
    );
}

export default App;