import React, { Component } from 'react';
import Description from "./Sections/Description";
import Activity from "./Sections/Activity";

const styles = {

};

class Activities extends Component {

  render() {
    return (
        <div>
            <Description/>
            <Activity/>
        </div>
    );
  }
}

export default Activities;
