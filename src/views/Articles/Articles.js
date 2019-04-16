import React, { Component } from 'react';
import Description from "./Sections/Description";
import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";
import ArticleList from "./Sections/ArticleList";

class Articles extends Component {

  render() {
    return (
        <div>
            <AppBar/>
            <Description/>
            <ArticleList/>
            <Footer/>
        </div>
    );
  }
}

export default Articles;
