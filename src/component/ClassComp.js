import React from "react";

class ClassComp extends React.PureComponent {
   constructor(props) {
      super(props);
      this.state = { studentsCount: 0};
      this.addStudent = this.addStudent.bind(this);
   }

   addStudent() {
    this.setState({ studentsCount: this.state.studentsCount + 1 });
   }

   render() {
     console.log('The component is rendered again');
     return (
        <div>
            <p>Number of students in class room: {this.state.studentsCount}</p>
            <button onClick={this.addStudent}>Add Student</button>
        </div>
     )
   }
}
export default ClassComp;

// Pure Component in React -> 

