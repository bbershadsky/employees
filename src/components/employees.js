import React from 'react';
import axios from "axios";
import Employee from "./Employee";

export default class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      employees: [],
      error: null
    };
  }

  getEmployees = async () => {
    const url = "http://dummy.restapiexample.com/api/v1/employees"
    this.setState({ isLoading: true, error: null })
    axios
      .get(url)
      .then(response => response.data.data)
      .then((employees) => {
        this.setState({ employees: employees, isLoading: false })
      })
      .catch(error => this.setState({ error, isLoading: false }));
    };

render() {
  return (
    <div>
    <div>{this.state.isLoading === true}</div>
      <button onClick={this.getEmployees.bind(this)}>GET</button>
      { this.state.isLoading &&
        <h2>
          Loading...
        </h2>
      }
      { this.state.error &&
        <h2>
          Error: Something went wrong!
        </h2>
      }
      { !this.state.isLoading &&
        <Employee employees={this.state.employees}/>
      }
    </div>
  );
  }
}
