import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    colorTheme: "#6481b4",
    appBar: {
        position: 'relative',
    },
    internalImage:{
        position:"absolute",
        top:"50%",left:"50%",
        transform:"translate(-50%,-50%)",
        msTransform:"translate(-50%,-50%)",
        whiteSpace:"nowrap",
        width: "100%",
        maxWidth: "600px",
        height: "auto",
        maxHeight:"100%"
    },
    flex: {
        flex: 1,
    },
};

class ModalPhoto extends Component {
    state = {
        open: false
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentWillReceiveProps(nextProps, nextContent){
        this.setState({ open: nextProps.open});
    }

    render() {
        return (
            <div>
                <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={this.handleClose}>
                    <AppBar style={styles.appBar} color={styles.colorTheme}>
                        <Toolbar>
                            <Typography variant="subheading" color="inherit" style={styles.flex}>
                                {this.props.alt}
                            </Typography>
                            <Button style={{fontFamily:'Varela Round'}} color="primary" onClick={this.handleClose}>
                                FECHAR
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <div style={{width:"100%", height:"100%", backgroundColor:"#000" , textAlign: "center"}}>
                        <div style={{display:"inline-block"}}>
                            <img src={this.props.image} alt={this.props.alt} style={styles.internalImage}/>
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default ModalPhoto;
