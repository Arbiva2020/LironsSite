import React, { useEffect } from "react";
import "./App.css";
import "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Splash from "./Splash";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
//import Utils from "./SliderData";
import Blog from "./Blog";
import Treatments from "./Treatments";
import Gallery from "./Gallery";
import Reviews from "./Reviews";
import CarouselPage from "./CarouselPage";
import Map from "./Map";
import { SliderData } from "./SliderData";
import ContactUs from "./ContactUs";
import "leaflet/dist/leaflet.css";
import BlogsList from "./BlogsList";
import Liron from "./Liron";
import Store from "./Store";
import CheckOutPage from "./CheckOutPage";
import Tip from "./Tip";
import Subtotal from "./Subtotal";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/contactUs">
            <ContactUs />
            <Map />
          </Route>
          <Route path="/blog">
            <CarouselPage />
            <Blog />
          </Route>
          <Route path="/treatments">
            <Treatments />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/blogsList">
            <BlogsList />
          </Route>
          <Route path="/liron">
            <Liron />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/checkOutPage">
            <CheckOutPage />
          </Route>
          <Route path="/">
            <CarouselPage slides={SliderData} />
            {/* <Tip /> */}
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
