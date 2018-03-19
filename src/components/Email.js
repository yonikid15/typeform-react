import React from 'react';
import OkButton from './OkButton';

class Email extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            confirm: false
        };
    };

    handleConfirmButton = (e) => {
        e.preventDefault();

        if( e.target.value.length > 0 ) { 
            this.setState( { confirm: true } );
        } else {
            this.setState( { confirm: false } );
        }
    };

    render() {
        return (
            <div>
                <input
                    onChange={this.handleConfirmButton}
                    placeholder={"Enter email here..."}
                    className={"textfield"} 
                    type="email" 
                />
                { this.state.confirm && <OkButton /> }
            </div>
        );
    };
};

export default Email;