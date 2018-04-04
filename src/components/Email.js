import React from 'react';
import OkButton from './OkButton';
import TextField from './TextField';

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
                <TextField>
                    <input
                        onChange={this.handleConfirmButton}
                        placeholder={"Enter email here..."}
                        type="email" 
                    />
                </TextField>
                { this.state.confirm && <OkButton /> }
            </div>
        );
    };
};

export default Email;