import React, { Component } from 'react';

import { 
    FormattedMessage
} from 'react-intl';

import TransferContract from './TransferContract';

export default class SignedTransaction extends Component {
    renderNote() {
        const {
            hostname
        } = this.props.confirmation;

        return (
            <div className="confirmGroup">
                <div className="confirmGroupTop">
                    <div className="confirmGroupHeader bold">
                        <FormattedMessage id="queue.send.site" />
                    </div>
                    <div className="confirmGroupAmount bold orange">{ hostname }</div>
                </div>
            </div>
        );
    }

    rawTransaction(contractType, parameters) {
        return <React.Fragment>
            <div className="confirmWarningHeader">
                &#9888; 
                <FormattedMessage id='queue.send.warning.header' />
            </div>

            <div className="confirmWarningBody">
                <FormattedMessage id='queue.send.warning.body' />
            </div>

            <div className="confirmSmartContract bold">
                <FormattedMessage id='queue.send.type' values={{ type: contractType.split('Contract')[0] }} />
            </div>

            <div className="confirmGroup">
                <textarea value={ 
                    JSON.stringify(parameters, null, 2) 
                } className="confirmTextArea maxHeight200" readonly />
            </div>
        </React.Fragment>;
    }

    render() {
        const confirmation = this.props.confirmation;
        const contract = confirmation.signedTransaction.raw_data.contract[0];
        const contractType = contract.type;
        const parameters = contract.parameter.value;

        let Renderer = false;

        switch(contractType) {
            case 'TransferContract':
                Renderer = TransferContract;
            break;
            default:
                console.warn('Unknown contract type requested', { contractType, contract });
        }

        return (
            <div className="confirmSend">
                { this.props.queueLength }
                { this.renderNote() }

                { Renderer && <Renderer parameters={ parameters } price={ this.props.price } /> }
                { !Renderer && this.rawTransaction(contractType, parameters) }

                { this.props.buttons }
            </div>
        );
    }
}