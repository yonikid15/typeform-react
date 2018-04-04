import React from 'react';
import OkButton from './OkButton';
import TextField from './TextField';
import '../styles/LongText.css';

class LongText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            confirm: false,
            value: ''
        }
    }

    handleConfirm = (e) => {
        e.preventDefault();

        const textarea = document.querySelector(".textarea");

        e.target.style.height = "1px";
        e.target.style.height = (e.target.scrollHeight)+"px";

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
                    <textarea onChange={this.handleConfirm} className={"longtext"}></textarea>
                </TextField>
                {
                    this.state.confirm && <OkButton onClick={this.onClick}/>
                }
            </div>
            
        );
    };
};

export default LongText;