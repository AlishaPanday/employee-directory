import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import viewEmployeeContext from '../utils/viewEmployeeContext';


const SearchBox = () => {
    const {setSearchState} = useContext (viewEmployeeContext);
    return (
        <Form.Control type = 'search' placeholder = 'search by first name, last name or Phone'
        onChange = {e => setSearchState(e.target.value)} />
    );
};

export default SearchBox;
