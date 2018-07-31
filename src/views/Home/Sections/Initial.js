import React, { Component } from 'react';
import background from '../../../images/campus2.jpg'
import Hidden from '@material-ui/core/Hidden';

const styles = {
    root: {
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        minHeight: "500px",
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    divText:{
        marginTop:150,paddingRight:40, float:"right", textAlign:"right", maxWidth:400,
        color:"#fff"
    },
    title: {
        fontFamily: 'Varela Round',
        fontSize: '50px'
    },
    subTitle: {
        marginTop:'-40px',
        fontFamily: 'Varela Round',
        fontSize: '15px',
    }
};

class Initial extends Component {

    render() {
        return (
            <div style={styles.root}>
                <div style={styles.divText}>
                    <p style={styles.title}>Bem-Vindo</p>
                    <Hidden  only={['sm', 'xs']}>
                        <p style={styles.subTitle}><strong>Conheça nossa nova página do
                            PET TI - Conexões de Saberes, UFC Quixáda</strong>
                        </p>
                    </Hidden>
                </div>
            </div>
        );
    }
}

export default Initial;
