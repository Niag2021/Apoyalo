import {Component, React} from "react";


class Datos extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.lastName} ,  {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair color: {this.props.hairColor}</p>
            </div>
        );
    }
}

export default Datos;