import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css'

class BR2JSX extends React.Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render() {

        let resultArray = this.props.text.split(/(?<=<br[\s\/]?\/?>)|(?=<br[\s\/]?\/?>)/g);

        let brRegExp = /<br[\s\/]?\/?>/;

        let resultArrayCode = [];

        for(let i = 0; i < resultArray.length; i++) {
            
            if(!brRegExp.test(resultArray[i]) && i < resultArray.length) {

                resultArrayCode.push(resultArray[i]);

                if(i !== resultArray.length - 1) {
                    resultArrayCode.push(<br key={i}/>);
                }  
            }
        }

        console.log(resultArrayCode);

        // resultArrayCode = resultArrayCode.map((elem, index) => {
        //     if(typeof elem === "string") {
        //         console.log(elem);
        //         return <span key={index}>{elem}</span>
        //     }

        //     return elem
        // })

        // console.log(resultArrayCode);

        return (
            <div className="BR2JSX">{resultArrayCode}</div>
        );
    }
}

export default BR2JSX