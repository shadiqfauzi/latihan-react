import React from 'react';
import { Table } from 'reactstrap';

const MoviesTable = (props) => {
    // console.log(props)
    const table = props.movies.map(val => {
        return (
            <tr key={val.id}>
            <th scope="row">{val.id}</th>
            <td>{val.title}</td>
            <td>{val.releaseYear}</td>
            </tr>
        )
    })
  
    return (
        <Table>
        <thead>
            <tr>
            <th>#</th>
            <th>Title</th>
            <th>Release Year</th>
            </tr>
        </thead>
        <tbody>
            {table}
        </tbody>
        </Table>
     );
}

export default MoviesTable;