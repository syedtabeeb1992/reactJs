import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  arrayUnion,
  updateDoc,
  doc,
  arrayRemove,
} from "firebase/firestore";

const App = () => {
  const [householditems, sethouseholditems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    boughtdate: '',
    expirydate: '',
    veg: true, // Default to veg
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const collectionRef = collection(db, "householditems");
  

  const handleSubmit = async () => {
    const newCategory = formData

    try {
      const docRef = doc(db, "householditems", "7lJo4W3RGRuZ9zL5a4FW");
      await updateDoc(docRef, {
        categories: arrayUnion(newCategory),
      });

      console.log("New category added successfully");
      getdata();
    } catch (error) {
      console.error("Error adding new category: ", error);
    }
  };


  const getdata = async () => {

     console.log("API CALEED");
    const data = await getDocs(collectionRef);
    sethouseholditems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteItems = async (itemName, documentId) => {
    try {
      // Remove the item from Firestore
      const docRef = doc(db, "householditems", documentId);
      await updateDoc(docRef, {
        categories: arrayRemove(householditems.find(item => item.id === documentId).categories.find(category => category.name === itemName)),
      });

      // Update the state to reflect the changes in the UI
      sethouseholditems((prevItems) => {
        const updatedItems = prevItems.map((item) => {
          if (item.id === documentId && item.categories) {
            item.categories = item.categories.filter((category) => category.name !== itemName);
          }
          return item;
        });
        return updatedItems;
      });

      console.log(`Deleted item with name: ${itemName}`);
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  };



  useEffect(() => {
    getdata();
  }, []);


  const edit = (response)=>{
    console.log("BOBO", response);
    setFormData((prevData) => ({
      ...prevData,
         name: response.name,
      quantity: response.quantity,
      boughtdate: response.boughtdate,
      expirydate: response.expirydate,
      veg: response.veg, // Default to veg
    }));
  }

  const update = async () => {
    console.log("UPDATED");
    try {
      if (!formData.name) {
        console.error("Name is required for update");
        return;
      }

      const docRef = doc(db, "householditems", "7lJo4W3RGRuZ9zL5a4FW");

      // Find the index of the category to be updated
      const categoryIndex = householditems.findIndex(
        (item) => item.categories.some((category) => category.name === formData.name)
      );

      if (categoryIndex === -1) {
        console.error("Category not found for update");
        return;
      }

      // Update the category in Firestore
      await updateDoc(docRef, {
        categories: arrayRemove(householditems[categoryIndex].categories.find(category => category.name === formData.name)),
      });

      await updateDoc(docRef, {
        categories: arrayUnion(formData),
      });

      // Update the state to reflect the changes in the UI
      sethouseholditems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[categoryIndex].categories = updatedItems[categoryIndex].categories.map((category) =>
          category.name === formData.name ? formData : category
        );
        return updatedItems;
      });

      console.log("Category updated successfully");
    } catch (error) {
      console.error("Error updating category: ", error);
    }
  };


  return (
    <div>





      <div className="" style={{border:"1px solid green", padding:"10px"}}>



        <h1>Add Itedddsssssms</h1>

      <input
        type="text"
        placeholder="Name of the item"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Quantity"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Bought Date"
        name="boughtdate"
        value={formData.boughtdate}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Expiry date"
        name="expirydate"
        value={formData.expirydate}
        onChange={handleChange}
      />
      <select
        name="veg"
        value={formData.veg}
        onChange={handleChange}
      >
        <option value="veg">Veg</option>
        <option value="nonVeg">Non-Veg</option>
      </select>

      <button onClick={handleSubmit}>Add Item</button>
      <button onClick={update}>UPDATE</button>
 

      </div>
      {householditems.map((items) => {
        if (items.categories && Array.isArray(items.categories)) {
          return items.categories.map((response) => {
            return (
              <div key={response.name}>
                <h1>{response.name}</h1>
                <p>Bought on - {response.boughtdate}</p>
                <p>Expiring on - {response.expirydate}</p>
                <p>Quantity - {response.quantity}</p>
                <button onClick={() => deleteItems(response.name, items.id)}>Delete</button>
                <button onClick={()=>edit(response)}>EDIT</button>
              </div>
            );
          });
        }
        return null; // or handle the case where categories is not an array
      })}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
