import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import HeaderSection from './components/HeaderSection';
import TableEmployee from './components/TableEmployee';
import FooterSection from './components/FooterSection';
import API from './utils/API';
import ViewEmployeeContext from './utils/ViewEmployeeContext';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './App.css';


function App() {
  //useState hook
  const [employeeViewState, setEmployeeViewState] = useState({
    employeeList: [],
    refinedEmployeeList: [],
  });
  const [sortEmployeeState, setEmployeeSortState] = useState(true);
  const [searchEmployeeState, setSearchEmployeeState] = useState('');

  //use effect hook before dom loads
  useEffect(() => {
    API.viewEmployee().then(({ data: { res } }) => {
      setEmployeeViewState({
        employeeList: res,
        refinedEmployeeList: res
      });
    });
  }, []);

  useEffect(() => {
    setEmployeeViewState({
      ...employeeViewState,
      refinedEmployeeList: employeeViewState.employeeList.filter(employee => {
        return (
          employee.name.first.toLowerCase().indexOf(searchEmployeeState) !== -1 ||
          employee.name.last.toLowerCase().indexOf(searchEmployeeState) !== -1 ||
          employee.phone.indexOf(searchEmployeeState) !== 1
        );
      })
    })
  }, [searchEmployeeState]);


  const sortByName = col => {
    const newSort = sortEmployeeState
      ? employeeViewState.refinedEmployeeList.sort((a, b) =>
          a.name[col].localeCompare(b.name[col])
        )
      : employeeViewState.refinedEmployeeList.sort((a, b) =>
          b.name[col].localeCompare(a.name[col])
        );
    setEmployeeViewState({
      ...employeeViewState,
      refinedEmployeeList: newSort
    });
    setEmployeeSortState(!sortEmployeeState);
    
  };

  return (
    <ViewEmployeeContext.Provider
      value={{employeeViewState, sortByName,setSearchEmployeeState }}
    >
      <HeaderSection />
        <Jumbotron fluid className = "jumbo">
          <TableEmployee/>
        </Jumbotron>
        <FooterSection />
    </ViewEmployeeContext.Provider>
  );


}

export default App;
