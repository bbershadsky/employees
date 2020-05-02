import React, {useReducer} from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'delete':
      return this.state.employees.splice(action.id, this.state.employees);
    default:
      return state;
  };
};
class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {employees: props.employees};
  }
  
  deleteEmployee(index) {
    var array = [...this.state.employees]; 
    array.splice(index, 1);
    this.setState({employees: array});
  }

  employees = (state = null, action) => {
    switch (action.type) {
      case "delete":
        const index = this.state.findIndex(employee => employee.id === action.payload.id)
        return [
          ...state.slice(0, index), 
          {
            ...state[index],
            status: action.type === 'delete' ? 1 : 0,
          },
          ...state.slice(index + 1), 
        ]
      default: return state.employee[reducer];
    }
  }

  render() {
    const employees = this.state.employees.map(function(employee, index){
      return <tr>
        <td>{employee.employee_name}</td>
        <td>{ employee.employee_age}</td>
        <td>${ employee.employee_salary}</td>
        <td><button onClick={this.deleteEmployee.bind(this, index)}> Delete </button ></td>
      </tr>
      ;
    }, this);
    return <div><table>{employees}</table></div>
  }
}

export default Employee;
