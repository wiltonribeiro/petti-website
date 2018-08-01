import React, { Component } from 'react';

class Parallax extends Component {
  render() {
    const { img, content, size, opacity } = this.props;

    let opcValue = 1;
    if(opacity==="max")
        opcValue = 0.25;
    else if(opacity==="min")
        opcValue = 0.75

    const styles = {
        bg:{
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position:"relative",
            minHeight:size,
            opacity:opcValue,
            backgroundImage: "url(" + img + ")"
        },
        internalDiv:{
            position:"absolute",
            top:"50%",left:"50%",
            transform:"translate(-50%,-50%)",
            msTransform:"translate(-50%,-50%)",
            whiteSpace:"nowrap"
        }
    };

    return (
        <div style={styles.bg}>
          <div style={styles.internalDiv}>
              {content}
          </div>
        </div>
    );
  }
}

export default Parallax;
