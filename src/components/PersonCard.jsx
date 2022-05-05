import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.personKey.age
        }
    }

    happyBirthday =() => {
        console.log("clicked");
        this.setState({age: this.state.age + 1})
    }

    render() {
        console.log(this.state.age);

        return (
            <div>
                <h1>{this.props.personKey.lastName}, {this.props.personKey.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.personKey.hairColor}</p>
                <button onClick={this.happyBirthday}>Birthday Button for {this.props.personKey.lastName} {this.props.personKey.firstName}</button>
            </div>
        )
    }
}

export default PersonCard;