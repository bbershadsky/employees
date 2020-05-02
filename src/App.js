import React, {Component } from 'react';
import './App.css';
import './components/employees';
import Employees from './components/employees';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      employees: [],
      error: null
    };
  }

  render(employees) {
    return (
    <div className="App">
      <h2>Employees</h2>
          <Employees/>
    </div>
  );
    }
}
