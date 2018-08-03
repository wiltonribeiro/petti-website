import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"

const styles ={
    root: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
};

class NewsModel extends Component {

    loadButton = () =>{
        let result = [];
        (this.props.buttons).forEach((item, i)=>{
            let variant = item.variant;
            if(variant == null)
                variant = "contained";

            result.push(
                <Button onClick={() => {window.location.href = item.link}} key={i} variant={variant} color={item.color} style={{margin:10}}>
                    {item.content}
                </Button>
            );
        });

        return result;
    };

    render() {
        return (
            <div style={{marginBottom:20}}>
                <Paper style={styles.root} elevation={3}>
                    <div className="w3-row-padding" style={{opacity:"0.60", fontFamily: "Raleway"}}>
                        <div className="w3-half">
                            <h4>{this.props.title}</h4>
                        </div>
                        <div className="w3-half">
                            <span style={{float:"right", fontSize:"12px"}}>Publicada em: | Atualizada em: {this.props.date}</span>
                        </div>
                    </div>
                    <hr style={{opacity:"0.20"}}/>
                    <div className="w3-row-padding" style={{fontSize:"15px", marginLeft:10, fontFamily: "Poppins"}}>
                        <p>{this.props.content}</p>
                    </div>
                    {
                       this.loadButton()
                    }
                </Paper>
            </div>
        );
    }
}

export default NewsModel;
