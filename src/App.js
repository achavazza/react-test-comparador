import React, { useState } from "react";

function App() {
  const [inputList, setInputList] = useState([
    {
      price: 0,
      quantity: 0,
      result: 0,
    },
    {
      price: 0,
      quantity: 0,
      result: 0,
    }
  ]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;

    const input = list[index];

    let numFirst = parseInt(input.price);
    let numSecond = parseInt(input.quantity);

    list[index].result = numFirst / numSecond;

    //console.log(numFirst, numSecond);
    //console.log(value);
    //console.log(index);
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
    setInputList([...inputList, { price: 0, quantity: 0, result: 0 }]);
  };





  return (
    <div className="App container">
      <div className="mb-1 collection collection-header with-header">
        <div className="collection-header teal lighten-2">
          <div className="row">
            <div className="col s12">
              <h4 className="white-text">Comparador de precios</h4>
            </div>
          </div>
        </div>
        {inputList.map((x, i) => {
          let removeButton = <button className="btn waves-light btn-floating" onClick={() => handleRemoveClick(i)}><i className="material-icons text-black">clear</i></button>;
          let addButton = <button className="btn-floating btn-large waves-effect waves-light teal" onClick={handleAddClick}><i className="material-icons">add</i></button>;



          let min = Math.min(...inputList.map(el => el.result))
          let result = inputList.find(el => el.result === min)
          //console.log(result);
          let lesser = '';
          if (result === inputList[i]) {
            lesser = 'teal';
          }

          return (
            <div key={i} className={"collection-item " + lesser}>
              <div className="row">
                <div className="col s11">
                  <div className="row">
                    <div className="input-field col s6">
                      <input type="number" name="price" default="0" placeholder="Enter First Name" value={x.price} onChange={e => handleInputChange(e, i)} />
                      <label className="active" htmlFor="first_name2">Precio</label>
                    </div>
                    <div className="input-field col s6">
                      <input type="number" name="quantity" default="0" placeholder="Enter Last Name" value={x.quantity} onChange={e => handleInputChange(e, i)} />
                      <label className="active" htmlFor="first_name2">Cantidad</label>
                    </div>

                  </div>
                </div>
                <div className="input-field col s1">
                  {inputList.length !== 1 && removeButton}
                </div>
              </div>
              <div className="fixed-action-btn">
                {inputList.length - 1 === i && addButton}
              </div>
            </div>
          );
        })}
        
      </div>

        <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>

    </div>
  );
}

export default App;