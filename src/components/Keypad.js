import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

//Styles

const button = {
    border: 'none',
    borderRadius: '10px',
    margin: '5px',
    width: '40px',
    height: '40px'
}


class Keypad extends Component {

    render() {
        return (
            <Container>
                <div>
                <Button variant="primary" style={button} name="(" onClick={e => this.props.onClick(e.target.name)}> ( </Button>
                <Button variant="primary" style={button} name="CE" onClick={e => this.props.onClick(e.target.name)}> CE </Button>
                <Button variant="primary" style={button} name=")" onClick={e => this.props.onClick(e.target.name)}> ) </Button>
                <Button variant="primary" style={button} name="C" onClick={e => this.props.onClick(e.target.name)}> C </Button><br/>


                <Button variant="primary" style={button} name="1" onClick={e => this.props.onClick(e.target.name)}>1</Button>
                <Button variant="primary" style={button} name="2" onClick={e => this.props.onClick(e.target.name)}>2</Button>
                <Button variant="primary" style={button} name="3" onClick={e => this.props.onClick(e.target.name)}>3</Button>
                <Button variant="warning" style={button} name="+" onClick={e => this.props.onClick(e.target.name)}>+</Button><br/>


                <Button variant="primary" style={button} name="4" onClick={e => this.props.onClick(e.target.name)}>4</Button>
                <Button variant="primary" style={button} name="5" onClick={e => this.props.onClick(e.target.name)}>5</Button>
                <Button variant="primary" style={button} name="6" onClick={e => this.props.onClick(e.target.name)}>6</Button>
                <Button variant="warning" style={button} name="-" onClick={e => this.props.onClick(e.target.name)}>-</Button><br/>

                <Button variant="primary" style={button} name="7" onClick={e => this.props.onClick(e.target.name)}>7</Button>
                <Button variant="primary" style={button} name="8" onClick={e => this.props.onClick(e.target.name)}>8</Button>
                <Button variant="primary" style={button} name="9" onClick={e => this.props.onClick(e.target.name)}>9</Button>
                <Button variant="warning" style={button} name="*" onClick={e => this.props.onClick(e.target.name)}>x</Button><br/>


                <Button variant="primary" style={button} name="." onClick={e => this.props.onClick(e.target.name)}>.</Button>
                <Button variant="primary" style={button} name="0" onClick={e => this.props.onClick(e.target.name)}>0</Button>
                <Button variant="warning" style={button} name="=" onClick={e => this.props.onClick(e.target.name)}>=</Button>
                <Button variant="warning" style={button} name="/" onClick={e => this.props.onClick(e.target.name)}>÷</Button><br/>
            </div>
            </Container>
            
        );
    }
}


export default Keypad;