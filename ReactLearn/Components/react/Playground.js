
import React, { useState } from "react";

const Playground = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [total, setTotal] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleInputChange = (e, inputType) => {
    const value = parseInt(e.target.value, 10);

    console.log(value);

    if (!isNaN(value)) {
      if (inputType === "input1") {
        setInput1(value);
      } else {
        setInput2(value);
      }
    }

    setIsDisabled(isNaN(value) || isNaN(input1) || isNaN(input2));
  };

  const add = () => {
    const sum = input1 + input2;
    setTotal(sum);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter number"
        value={input1}
        onChange={(e) => handleInputChange(e, "input1")}
      />
      <input
        type="text"
        placeholder="Enter number"
        value={input2}
        onChange={(e) => handleInputChange(e, "input2")}
      />
      <button onClick={add} disabled={isDisabled}>
        Add
      </button>
      <p>{total}</p>
    </div>
  );
};

export default Playground;

// import React, { useState } from "react";

// const Playground = () => {
//   const [input1, setInput1] = useState(0);
//   const [input2, setInput2] = useState(0);
//   const [total, setTotal] = useState(0);

//   const [isDisabled, setisDisabled] = useState(true);

//   const handleInputChange1 = (e) => {
//     const value = e.target.value;
//     setInput1(parseInt(value, 10));

//     if (value && input2) {
//       setisDisabled(false);
//     } else {
//       setisDisabled(true);
//     }
//   };

//   const handleInputChange2 = (e) => {
//     const value = e.target.value;
//     setInput2(parseInt(value, 10));
//     if (input1 && value) {
//       setisDisabled(false);
//     } else {
//       setisDisabled(true);
//     }
//   };

//   const add = () => {
//     const sum = input1 + input2;
//     setTotal(sum);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter number"
//         value={input1}
//         onChange={handleInputChange1}
//       />
//       <input
//         type="text"
//         placeholder="Enter number"
//         value={input2}
//         onChange={handleInputChange2}
//       />
//       <button onClick={add} disabled={isDisabled}>
//         Add
//       </button>
//       <p>{total}</p>
//     </div>
//   );
// };

// export default Playground;
