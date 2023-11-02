import React, { useState } from "react";

const Playground = () => {
  const [list, setlist] = useState([
    { name: "Tabeeb", age: 20 },
    { name: "Pragya", age: 34 },
  ]);

  const [formdata, setFormData] = useState({
    name: "",
    age: "",
  });

  const handleonchange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const adddata = () => {
    const newdata = {
      name: formdata.name,
      age: formdata.age,
    };
    setlist((prevData) => {
      return [...prevData, newdata];
    });
  };

  const deletenode = (item) => {
    const updatedItems =[...list] ;
    updatedItems.splice(item, 1);
    setlist(updatedItems);
  };



  const [numbercounter, setnumbercounter] = useState(1)
  const counter = () =>{

  

    for(let i=0; i<=5; i++) {
        
        return setTimeout(() => {
            setnumbercounter(numbercounter+1)
        }, 1000);

    }

    
  }
  const minuscounter = () =>{
    setnumbercounter(numbercounter-1)
  }

  return (
    <div>
      <div className="">
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleonchange}
        ></input>
        <input
          type="text"
          placeholder="Age"
          name="age"
          onChange={handleonchange}
        ></input>
        <button onClick={adddata}> Add </button>
      </div>

      {list.map((result) => {
        return (
          <div
            onClick={() => {
              deletenode(result.name);
            }}
          >
            Name: {result.name} - Age : {result.age}{" "}
          </div>
        );
      })}


      <button className="counter" onClick={counter}>COUNTER</button>
      <p>{numbercounter}</p>
      <button className="" onClick={minuscounter}>Minus Counter</button>
    </div>

    
  );
};

export default Playground;
