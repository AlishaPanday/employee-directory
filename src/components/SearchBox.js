import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import ViewEmployeeContext from '../utils/ViewEmployeeContext';


const SearchBox = () => {
    const {setSearchState} = useContext (ViewEmployeeContext);
    return (
        <Form.Control type = 'search' placeholder = 'search by first name, last name or Phone'
        onChange = {e => setSearchState(e.target.value)} />
    );
};

export default SearchBox;
