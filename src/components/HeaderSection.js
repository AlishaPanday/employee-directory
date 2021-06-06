import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SearchBox from './SearchBox';

const HeaderSection = () => {
    return (
        <Navbar bg='navbar-dark bg-primary'>
            <Container fluid='md'>
                <Navbar.Brand className='headerText'>
                    <h2>React Employee Directory</h2>
                    <p>Search by lowercase<br />Enter first name/lastname/PhoneNo.</p>
                </Navbar.Brand>
                <SearchBox />
            </Container>
        </Navbar>
    );
};

export default HeaderSection;
