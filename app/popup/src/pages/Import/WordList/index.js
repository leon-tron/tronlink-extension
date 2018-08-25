import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Button from 'components/Button';

import './WordList.css';

class WordList extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    renderInputs() {
        // Ill let you handle this tayler, forgot the site you made
    }

    render() {
        return (
            <div className="import">
                <div className="importHeader">Import Word List</div>
                <div className="importSubText">Enter your 24 word backup phrase below.</div>
                <div className="inputContainer">
                    { this.renderInputs() }
                </div>
                <Button type={ 'black' } style={{ marginTop: '20px' }}>
                    <FormattedMessage id='import.button' />
                </Button>
            </div>
        );
    }
}

export default WordList;