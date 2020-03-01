import React, { Component } from 'react';
import BiodataCard from '../components/BiodataCard'
import JumbotronCustom from '../components/JumbotronCustom'
import AlertCustom from '../components/AlertCustom'
import { connect } from 'react-redux';


class Home extends Component {
  state = {
    data: [
      {
        id: 1,
        nama: 'lian',
        usia: 24,
        pekerjaan: 'coder',
        image: 'https://www.whittierfirstday.org/wp-content/uploads/default-user-image-e1501670968910.png',
        color: 'primary'
      },
      {
        id: 2,
        nama: 'andi',
        usia: 43,
        pekerjaan: 'guru',
        image: 'https://www.whittierfirstday.org/wp-content/uploads/default-user-image-e1501670968910.png',
        color: 'warning'
      },
      {
        id: 3,
        nama: 'susilo',
        usia: 53,
        pekerjaan: 'PNS',
        image: 'https://www.whittierfirstday.org/wp-content/uploads/default-user-image-e1501670968910.png',
        color: 'danger'
      },
    ],
    boolean: true,
    show: true
  }

  renderButton = () => {
    let { data } = this.state

    // PROPS
    // Passing data dari parent ke child

    return data.map((val) => {
      return (
        <div key={val.id}>
          <BiodataCard 
            nama={val.nama}
            usia={val.usia}
            pekerjaan={val.pekerjaan}
            image={val.image}
            color={val.color}
            // pass prop dalam bentuk function js
            show={() => this.setState({show: false})}
            alert={() => window.alert('hello from your parent')}
          />
        </div>
      )
    })
  }

  

  render(){
    return(
      <div className='container'>
        {this.props.userGlobal ? 
        <AlertCustom color='success' username={this.props.userGlobal}/>
        : null}
        <JumbotronCustom 
          mainHeader='Toko Susilo'
          desc='Toko paling lengkap seduinia'
          slogan='kuy belanja kuy!'
          isiButton='Log In & Shop Now'
          onClickBtn={() => window.alert('BOLEH BELANJA')}
        />
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {this.props.isLogged ? this.renderButton():null}
        </div>
      </div>

    )
  }
}

const mapStatetoProps = (state) => {
  return {
      userGlobal: state.logUser.username,
      isLogged: state.logUser.isLoggedIn
  }
}


export default connect(mapStatetoProps) (Home);
