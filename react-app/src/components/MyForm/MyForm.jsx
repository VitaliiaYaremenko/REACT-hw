import {Component} from 'react';
import {cloneDeep} from "lodash";
import {Form, Button} from 'react-bootstrap';
import Input from "../UI/Input";
import PropTypes from "prop-types";

const formInitialValues = {
    email: '',
    password: '',
    address: '',
    city: '',
    country: 'China',
    rules: 'off'
}

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: props.formData ? {...props.formData} : {...formInitialValues}
        }
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [name]: type === 'checkbox' ? (checked ? 'on' : 'off') : value
            }
        }));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.formData);
        this.setState({formData: {...formInitialValues} });
    }
    render() {
        const {email, password, address, city, country, rules} = this.state.formData;

        return (
            <Form onSubmit={this.handleSubmit}>
                <h4 className='text-center'>Form</h4>

                <Input
                    label='Email address'
                    name="email"
                    type="email"
                    value={email}
                    onChange={this.handleChange}
                />

                <Input
                    label='Password'
                    name="password"
                    type="password"
                    value={password}
                    onChange={this.handleChange}
                />

                <Input
                    label='Address'
                    name="address"
                    value={address}
                    onChange={this.handleChange}
                    as='textarea'
                />

                <Input
                    label='City'
                    name="city"
                    value={city}
                    onChange={this.handleChange}
                />

                <Form.Select
                    className="mb-3"
                    aria-label="Default select example"
                    name='country'
                    onChange={this.handleChange}
                    value={country}
                >
                    <option>Open this select menu</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="China">China</option>
                </Form.Select>

                <Form.Check
                    className='mb-5'
                    type="switch"
                    id="custom-switch"
                    label="Check this switch"
                    name='rules'
                    onChange={this.handleChange}
                />

                <Button type='submit'>Submit form</Button>
            </Form>
        )
    }

}


MyForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formData: PropTypes.object
}
export default MyForm;
