import React, { Component } from 'react';
const styles = {

};



class NotFound extends Component {

  render() {

    return (
        <div>
            <div className="code-area">
                <span style={{color: "#777",fontStyle:"italic"}}>// 404 Página não encontrada.</span>
                <span>
                    <span style={{color:"#d65562"}}>if </span>(
                    <span style={{color:"#4ca8ef"}}>!</span>
                    <span style={{fontStyle: "italic",color:"#444"}}>found</span>)
                </span>
                <span>
                    <span style={{paddingLeft: "15px",color:"#2796ec"}}>throw</span>
                    <span>
                        (<span style={{color: "#a6a61f"}}>"No !!!!"</span>)
                    </span>
                </span>
            </div>
        </div>
    );
  }
}

export default NotFound;
