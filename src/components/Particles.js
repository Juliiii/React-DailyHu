import React from 'react'
import P from 'react-particles-js';


export const Particles = (props) => {

    const params = {
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 5
                }
              },
              number: {
                density: {
                  value_area: 5000,
                  enable: true
                }
              },
             color: {
              value: '#80397b'
             },
             shape: {
               type: 'circle',
               stroke: {
                 width: 0,
                 color: '#80397b'
               },
               polygon: {
                 nb_sides: 5
               }
             }
            }
    }

    const style = {
            position: "fixed",
            top:      0,
            left:     0,
            width:    "100%",
            height:   "100%",
            zIndex:   "-5"    
    };

    return(
        <P params={params}
           style={style}
        />
    )
}

export default Particles