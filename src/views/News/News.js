import React, { Component } from 'react';
import Description from "./Sections/Description";
import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";
import NewsList from "./Sections/NewsList";

class News extends Component {

  render() {
    return (
        <div>
            <AppBar/>
            <Description/>
            <NewsList/>
            <Footer/>
        </div>
    );
  }
}

export default News;
