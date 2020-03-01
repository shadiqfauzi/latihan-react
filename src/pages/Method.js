import React from 'react'
// import { Link } from 'react-router-dom'
import Axios from 'axios'
import MoviesTable from './MoviesTable'

class Method extends React.Component {
    state = {
        count : 0,
        data : {}
    }
    
    componentDidMount(){
        Axios.get('https://reactnative.dev/movies.json')
        .then((res) => {
            this.setState({
                data: res.data
            })
            // console.log(this.state.data)
        })
        .catch((err) => {
            console.log(err)
        })
        // console.log('Method component mount')
    }

    componentDidUpdate(){
        // console.log('Method component did update')

    }

    componentWillUnmount(){
        // console.log('unmount Method component')
    }

    tambah = () => {
        this.setState({
            count: this.state.count +1
        })
    }

    kurang = () => {
        this.setState({
            count: this.state.count -1
        })
    }


    render(){
        return (
            <div>
                <h1>{this.state.data.title}</h1>
                <h3>{this.state.data.description}</h3>
                
                {this.state.data.movies ? <MoviesTable movies={this.state.data.movies}/> : null}
                {/* <MoviesTable movies={this.state.data.movies}/> */}

                {/* ini Metot
                <input type='button' onClick={this.tambah} value='+' />
                {this.state.count}
                <input type='button' onClick={this.kurang} value='-' />
                <Link to='/'>
                    <input type='button' value='home' />
                </Link> */}
            </div>
        )
    }
}

export default Method