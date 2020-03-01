import React, { Component } from 'react';
import { Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { logUsername, isLoggedIn } from '../redux/action'

class LoginPage extends Component{
    state = {
        userData: [
            {
                username:'user',
                password:'user'
            },
            {
                username:'shadiq',
                password:'123'
            },
            {
                username:'susilo',
                password:'321'
            },
        ],
        logged: null
    }

    onBtnLogin = () => {
        let username = this.refs.username.value
        let password = this.refs.password.value

        let user = this.state.userData.find(val => {
            return val.username === username && val.password === password
        })

        if(user){
            this.setState({
                logged: true
            })
            this.props.logUsername(this.state.inputLogin.username)
            this.props.isLoggedIn()
        }else{
            this.setState({
                logged: false
            })
        }
    }

    inputBaru = (e) => {
        this.setState({
            inputLogin: {
                ...this.state.inputLogin,
                [e.target.id] : e.target.value
            }
        })
    }

    render(){
        if(this.state.logged){
            return(
                <Redirect to='/'></Redirect>
            )
        }else if(this.state.logged === false){
            return(
                <Redirect to={{
                    pathname: '/failed', 
                    state : {
                        errorMessage: 'Error Login', 
                        errorCode: 'Username/Password Anda Salah'
                    }}}>
                </Redirect>
            )
        }

        return(
            <div style={{marginTop: '100px',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h1>Ini Halaman Login</h1>
                    <input type='text' ref='username' onChange={this.inputBaru} id='username' placeholder='Username'/>
                    <input type='password' ref='password' onChange={this.inputBaru} id='password' style={{marginTop: '10px'}} placeholder='Password' />
                    <Button onClick={this.onBtnLogin} style={{marginTop: '20px'}}>
                        LOGIN KUYYYY
                    </Button>
                    <p>Available Users, {`{user,user}, {shadiq,123}, {susilo,321}`}</p>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        userGlobal: state.logUser.username
    }
}

export default connect(mapStatetoProps, { logUsername, isLoggedIn }) (LoginPage)

