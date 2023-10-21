import React from "react";
import ReactDOM from "react-dom/client";




const Header = () =>{ 
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src='https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg'/>
      </div>

      <div className="navitems">
          <ul>
            <li>Homes</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Carts</li>
          </ul>
      </div>
    </div>
  )
}

const ResturantCard = () => {
  return (
    <div className="res-card">
      <img className="res-logo" src="https://b.zmtcdn.com/data/dish_photos/e4d/6e78e833885e2f78228856a0b23d7e4d.jpg"/>
        <h3>Meghna</h3>
        <h4>Biriyani, North Indian</h4>
        <h4>4.3 stars </h4>
        <h4>38 mins</h4>

    </div>
  )
}

const Body = ()=>{
  return (
    <div className="body">
        <div className="search">
          search
        </div>

        <div className="resturant-container">
           <ResturantCard/>
        </div>

    </div>
  )
}

const App = () => {
  return (
    <div>
      <div className="">
        <Header/>
        <Body/>

      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
