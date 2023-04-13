import React from "react";

class Adobe extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
           input: ''
        };
        this.setInput = this.setInput.bind(this);
     }

     setInput(e) {
        this.setState({input: e.target.value});
     }

     componentDidUpdate() {
        console.log(this.state.input);
     }

     render() {
        return (
            <div>
                <input style={{ margin: 20 }} className="helloInput" onChange={this.setInput} />
            </div>
        )
     }
}

export default Adobe;