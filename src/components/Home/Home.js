import React from "react";

const Home = () => {
  return (
    <section
      className="home-section"
      style={{
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0NFtmrk8gJkhrXWZk9vxSH_I9OqUnTTkLw&usqp=CAU)",
        backgroundSize: "cover",
        height: "400px",
      }}
    >
      <div className="container d-flex w-100 h-100 align-items-center justify-content-center  flex-column">
        <div className="content text-center">
          <h3 className="content-title">
            Best Different Type of Grocery Store
          </h3>
          <p className="content-des">
            Quickly aggregate empowered networks after emerging products...
          </p>
        </div>
        <div className="search-filed">
          <input
            style={{ width: "400px" }}
            className="form-control "
            placeholder="Search Meals"
            type="text"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
