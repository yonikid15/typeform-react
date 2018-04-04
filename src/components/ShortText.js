import React from 'react';
import OkButton from './OkButton';
import TextField from './TextField';

class ShortText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            confirm: false,
            value: ''
        }
    }

    handleConfirm = (e) => {
        e.preventDefault();

        if( e.target.value.length > 0 ) { 
            this.setState( 
                { 
                    confirm: true,
                    value: e.target.value
            });
        } else {
            this.setState( 
                { 
                    confirm: false,
                    value: e.target.value
            });
        }
    }

    onClick = (e) => {
        console.log( this.state.value );
    }

    render() {
        return (
            <div>
                <TextField>
                    <input onChange={this.handleConfirm} type={"text"}/>
                </TextField>
                {
                    this.state.confirm && <OkButton onClick={this.onClick}/>
                }
            </div>
            
        );
    };
};

export default ShortText;