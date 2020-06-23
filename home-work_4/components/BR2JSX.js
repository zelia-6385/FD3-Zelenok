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


        for (let item of resultArray) {

            if(!brRegExp.test(item)) {

                resultArrayCode.push(item);
                resultArrayCode.push(<br/>);
            }

        }

        // resultArrayCode = resultArrayCode.map((elem, index) => {
        //     if(typeof elem === "string") {
        //         console.log(elem);
        //         return <span key={index}>{elem}</span>
        //     }

        //     return elem
        // })

        return (
            <div className="BR2JSX">{resultArrayCode}</div>
        );
    }
}

export default BR2JSX