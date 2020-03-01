import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Failed extends Component {
    render() {
        // passing state via redirect
        console.log(this.props.location.state)
        return(
            <div style={{marginTop: '100px',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h1>{this.props.location.state.errorMessage}</h1>
                <p>{this.props.location.state.errorCode}</p>
                <Link to='/login'>
                    <Button >Back To Login</Button>
                </Link>
            </div>
        )
    }
}

export default Failed