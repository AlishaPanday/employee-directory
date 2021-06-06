import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import ViewEmployeeContext from '../utils/ViewEmployeeContext';


const SearchBox = () => {
    const { setSearchEmployeeState } = useContext(ViewEmployeeContext);
    return (
        <Form.Control
            type='search'
            placeholder='Search by first name, last name or Phone'
            onChange={e => setSearchEmployeeState(e.target.value)}
        />
    );
};

export default SearchBox;
