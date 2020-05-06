const FilterBlock = React.createClass({

    displayName: 'FilterBlock',

    propTypes: {
        listArr: React.PropTypes.array.isRequired,
    },

    getInitialState: function() {
        return {
            listCodeArr: this.props.listArr,
            filterStr: '',
            isSort: false,
        }
    },

    resetList: function() {

        this.setState({
            listCodeArr: this.props.listArr,
            filterStr: '',
            isSort: false,
        });
    },

    sortFilterList: function(EO) {

        this.state.filterStr = EO.target.value;

        if(this.state.filterStr && this.state.isSort) {

            this.setState({
                listCodeArr: this.props.listArr.slice().filter(elem => elem.indexOf(this.state.filterStr) !== -1).sort(),
                filterStr: EO.target.value,    
            });

        } else if (this.state.filterStr) {

            this.setState({
                listCodeArr: this.props.listArr.slice().filter(elem => elem.indexOf(this.state.filterStr) !== -1),
                filterStr: EO.target.value,     
            });

        } else if (this.state.isSort) {

            this.setState({
                listCodeArr: this.props.listArr.slice().sort(),
                filterStr: EO.target.value,     
            });

        } else {

            this.setState({
                listCodeArr: this.props.listArr,
                filterStr: EO.target.value,     
            });
        }
    },

    sortCheckbox: function() {
        
        if (this.state.isSort) {

            this.setState({
                listCodeArr: this.props.listArr.slice().filter(elem => elem.indexOf(this.state.filterStr) !== -1),
                isSort: !this.state.isSort,
            })
        } else {
    
            this.setState({
                listCodeArr: this.props.listArr.slice().filter(elem => elem.indexOf(this.state.filterStr) !== -1).sort(),
                isSort: !this.state.isSort,
            })
        }  
    },

    render: function() {

        const listCode = this.state.listCodeArr.map( (elem, index) => 
            React.createElement('p', {
                key: index,
            }, elem)
        );

        return React.DOM.div({className: 'FilterBlock'},
            React.DOM.input({type: 'checkbox', onClick: this.sortCheckbox, checked: this.state.isSort}),
            React.DOM.input({type: 'text', value: this.state.filterStr, onChange: this.sortFilterList}),
            React.DOM.input({type: 'button', value: 'Сброс', onClick: this.resetList}),
            React.DOM.div({className: 'TextBlock'}, listCode),
        );
    }
});