import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


class Result extends Component {

        

    render() {
        let {result} = this.props;
        return (
            <Container>
                <div>
                    <p>{result}</p>
                </div>

            </Container>
            
    )
        ;
    }
}


export default Result;