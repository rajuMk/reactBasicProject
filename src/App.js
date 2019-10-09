import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Stu from './Student/Student'

class App extends Component {
  state = {
    persons:[
      {name: 'raju', age:25},
      {name: 'madhu', age:21},
      {name: 'Durga', age:46},
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am Raju</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>her hobbies are</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        {/* <Person name="raju" age="25"/> */}
        <Stu/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am rajan'), React.createElement('label', null, 'i am an EPAMer'))
  }
}

export default App;
