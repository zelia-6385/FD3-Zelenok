import React from 'react';

function withRainbowFrame(colors) {
    
    return function(Component) {

        return class extends React.Component {

            componentDidMount() {
              console.log('Текущие пропсы: ', this.props);
              console.log(this.props.children)
            }

            showBorder = (iteration) => {

                if(iteration >= 0) {
        
                    return (
                        <div className="RainbowBorder" style={{border:"5px solid "+colors[iteration]}} key={iteration}>
                            {this.showBorder(iteration-1)}
                        </div> 
                    );
                }
        
                return <Component {...this.props}></Component>;
         
            }
        
            render() {

                return this.showBorder(colors.length);
            }
        }
    }
}

export {withRainbowFrame}
