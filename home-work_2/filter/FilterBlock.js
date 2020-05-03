const FilterBlock = React.createClass({

    displayName: 'FilterBlock',

    propTypes: {
        listArr: React.PropTypes.array.isRequired,
    },

    getState(callback) {
        this.setState((prevState) => {
            callback(prevState);
        })
    },

    sortTextValue: function(EO) {

        // EO.persist();

        let listCodeArrFilter = this.props.listArr.filter(elem => elem.indexOf(EO.target.value) !== -1);

        let listCodeArrFilterSort = listCodeArrFilter.slice().sort();
        
        // this.setState({
        //     listCodeArr: listCodeArrFilter,
        //     inputValue: EO.target.value,
        // });

        if(this.state.isTrue) {

            this.setState({
                listCodeArr: listCodeArrFilterSort,
                listCodeArrСopy: listCodeArrFilter,
                inputValue: EO.target.value,
            });

        } else {

            this.setState({
                listCodeArr: listCodeArrFilter,
                listCodeArrСopy: listCodeArrFilter,
                inputValue: EO.target.value,
            });

        }

        // this.setState(() => {
            
        //     if(this.state.isTrue) {
                
        //         return {
        //             listCodeArr: listCodeArrFilter.sort(),
        //             listCodeArrСopy: listCodeArrFilter,
        //             inputValue: EO.target.value,
        //         }
        //     } else {

        //         return {
        //             listCodeArr: listCodeArrFilter,
        //             listCodeArrСopy: listCodeArrFilter,
        //             inputValue: EO.target.value,
        //         }
        //     }
        // });
    },

    sortList: function() {

        if(!this.state.isTrue) {

            let listCodeArrClone = this.state.listCodeArr.slice();
          
            let listCodeArrSort = this.state.listCodeArr.slice().sort();

            this.setState({ 
                listCodeArr: listCodeArrSort,
                listCodeArrCopy: listCodeArrClone,
                isTrue: true,
            });

        } else {

            let listCodeArrUnsort = this.state.listCodeArrCopy.slice();

            this.setState({ 
                listCodeArr: listCodeArrUnsort,
                listCodeArrCopy: [],
                isTrue: false,
            });
        }
        
    },

    resetList: function() {

        this.setState({
            listCodeArr: this.props.listArr,
            listCodeArrCopy: [],
            inputValue: '',
            isTrue: false,
        });
    },

    getInitialState: function() {
        return {
            listCodeArr: this.props.listArr,
            listCodeArrCopy: [],
            inputValue: '',
            isTrue: false,
        }
    },

    render: function() {

        const listCode = this.state.listCodeArr.map( (elem, index) => 
            React.createElement('p', {
                key: index,
            }, elem)
        );

        return React.DOM.div({className: 'FilterBlock'},
            React.DOM.input({type: 'checkbox', onClick: this.sortList, checked: this.state.isTrue}),
            React.DOM.input({type: 'text', value: this.state.inputValue, onChange: this.sortTextValue}),
            React.DOM.input({type: 'button', value: 'Сброс', onClick: this.resetList}),
            React.DOM.div({className: 'TextBlock'}, listCode),
        );
    }
});