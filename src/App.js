
import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import HeaderSection from './components/HeaderSection';
import TableEmployee from './components/TableEmployee';
import FooterSection from './components/FooterSection';
import API from './utils/Api';
import ViewEmployeeContext from './utils/ViewEmployeeContext';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './App.css';


function App() {
  //useState hook
  const [employeeViewState, setEmployeeViewState] = useState({
    employeeList: [],
    refinedEmployeeList: []
  });
  const [sortEmployeeState, setEmployeeSortState] = useState(true);
  const [searchEmployeeState, setSearchEmployeeState] = useState('');

  //use effect hook before dom loads
  useEffect(() => {
    API.viewEmployee().then(({ data: { results } }) => {
      setEmployeeViewState({
        employeeList: results,
        refinedEmployeeList: results
      });
    });
  }, []);


  useEffect(() => {
    setEmployeeViewState({
      ...employeeViewState,
      refinedEmployeeList: employeeViewState.employeeList.filter(employee => {
        return (
          // allow users to search for first/last name or phone
          employee.name.first.toLowerCase().indexOf(searchEmployeeState) !== -1 ||
          employee.name.last.toLowerCase().indexOf(searchEmployeeState) !== -1 ||
          employee.phone.indexOf(searchEmployeeState) !== -1
        );
      })
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchEmployeeState]);



  const sortByName = column => {
    const newSort = sortEmployeeState
      ? employeeViewState.refinedEmployeeList.sort((a, b) =>
        a.name[column].localeCompare(b.name[column])
      )
      : employeeViewState.refinedEmployeeList.sort((a, b) =>
        b.name[column].localeCompare(a.name[column])
      );
    setEmployeeViewState({
      ...employeeViewState,
      refinedEmployeeList: newSort
    });
    setEmployeeSortState(!sortEmployeeState);

  };

  return (
    <ViewEmployeeContext.Provider
      value={{ employeeViewState, sortByName, setSearchEmployeeState }}
    >
      <HeaderSection />
        <Jumbotron fluid className="jumbotron">
          <TableEmployee />
        </Jumbotron>

      <FooterSection />
    </ViewEmployeeContext.Provider>
  );


}

export default App;

