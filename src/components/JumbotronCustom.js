import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';



class JumbotronCustom extends React.Component {

  render(){
    let {mainHeader, desc, slogan, isiButton} = this.props
    return (
        <div>
        <Jumbotron>
            <h1 className="display-3">{mainHeader}</h1>
            <p className="lead">{desc}</p>
            <hr className="my-2" />
            <p>{slogan}</p>
            <p className="lead">
            {
                !this.props.isLogged ? 
                <Link to='/login'>
                    <Button color="primary">{isiButton}</Button>
                </Link>
                :
                null
            }
            </p>
        </Jumbotron>
        </div>
        );
    }
};

const mapStatetoProps = (state) => {
    return {
        isLogged: state.logUser.isLoggedIn
    }
  }

export default connect(mapStatetoProps) (JumbotronCustom);