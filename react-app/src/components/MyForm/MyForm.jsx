import {Component} from "react";
import {cloneDeep} from "lodash";
import {Form} from 'react-bootstrap';

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                password: '',
                address: '',
                city: '',
                country: '',
                acceptRules: ''
            }
        }
    }

    render() {
        return (
            <MyForm>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="Address" placeholder="Address" />
                </Form.Group>

                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </MyForm>
        )
    }
}

export default MyForm;
