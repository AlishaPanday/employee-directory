import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import EmployeeData from './EmployeeData';
import ViewEmployeeContext from '../utils/ViewEmployeeContext';

const TableEmployee = () => {
    const {sortByName} = useContext(ViewEmployeeContext);
    return (
        <Container fluid className='employeeTable'>
            <Row>
                <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th className='center'>Image</th>
                            <th className='center' onClick={() => sortByName('first')}>
                                First Name&nbsp;<i className='fas fa-sort'></i>
                            </th>
                            <th className='center' onClick={() => sortByName('last')}>
                                Last Name&nbsp;<i className='fas fa-sort'></i>
                            </th>
                            <th className='center'>Phone</th>
                            <th className='center'>Email</th>
                            <th className='center'>DOB</th>

                        </tr>
                    </thead>
                    <EmployeeData />
                </Table>
            </Row>
        </Container>
    );
};

export default TableEmployee;

