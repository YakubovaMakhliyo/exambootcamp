import React from "react";
import FilterBtn from "../components/filterBtn/FilterBtn";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import BlogText from "../components/blogText/BlogText";
import Courses from "../components/courses/Courses"
import Login from "../components/form/Login"
import Register from "../components/form/Register"
import Footer from "../components/footer/Footer";

const Main = () => {
  const [filtterName, setFilterName] = React.useState("dasturlash");
  const [cardData,setCardData]=React.useState([])
  const [ showRegister, setSHowRegister] = React.useState(false)
  return (
    <>
   
    {showRegister && <Register setSHowRegister={setSHowRegister} />}
    {/* <Login/> */}
      <header>
        <div className="container">
          {" "}
          <Navbar setSHowRegister={setSHowRegister}  />
        </div>
      </header>
      <main>
        <div className="container">
          <h1 className="main-title">
            <p>Bosh sahifa </p> <ArrowRightAltIcon sx={{ fontSize: "35px" }} />{" "}
            <h4>Bloglar</h4>
          </h1>
        </div>
        <Hero />
        <BlogText filtterName={filtterName} />
        <FilterBtn filtterName={filtterName} setFilterName={setFilterName} />
        <Courses  cardData={cardData} setCardData={setCardData} filtterName={filtterName} setFilterName={setFilterName}/>
        <Footer/>
      </main>
 
    </>
  );
};

export default Main;
