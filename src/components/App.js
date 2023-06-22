
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [text,setText] = useState("");
  const [data,setData] = useState([]);

  const addToList = () => {
    if(text.trim() !== ''){
      setData([...data, text]);
      setText("");
    }
    
  }
  const handleDelete = (index) => {
    const updatedItems = [...data];
    updatedItems.splice(index,1);
    setData(updatedItems);
  }
  return (
    <div>
        <h1>To-Do List</h1>
        <div className="container">
          <input type="text" placeholder="Add To List" value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={addToList}>Add</button>
        </div>

        <ul className="list-container">
          {data.length > 0 && data.map((item,index)=>(
            <li key={index}>
              {item}
              <button onClick={()=>handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>

    </div>
  )
}

export default App
