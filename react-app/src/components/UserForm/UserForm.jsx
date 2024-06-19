import {Component} from "react";
import {cloneDeep} from "lodash";
import {Button, Form} from "react-bootstrap";
import Input from '../UI/Input';
import PropTypes from "prop-types";

const formInitialValue = { //дані які мають бути описані в стейті через які відбуватиметься взаємодія з компонентом
    email: '',
    password: '',
    address: '',
    city: '',
    country: 'Ukraine',
    rules: false
}

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {  //створення стейту для компонентів форми
            formData: props.formData ? {...props.formData} : {...formInitialValue} //за допомогою деструкторізації передаємо дані в стейт. Використовуємо копію
        }
    }

    handleChange = (event) => {//функція яка буде змінювати стан компонента, можемо керувати станом.
        const previousState = cloneDeep(this.state.formData); //відбувається клонування стейту, захист від змін початкового стейту
        previousState[event.target.name] = event.target.value; // отримуємо дані з елемента по ключу name. Дозволяє розуміти де буде відбуватись ввід даних
        this.setState({formData:previousState}) //кожного разу коли спрацьовує setState змінюється повністю стан компонента
    }

    handleSubmit = (event) => {
        event.preventDefault() //відміна дефолтного стану форми (перезавантаження)
        this.props.onSubmit(this.state.formData); //під час сабміту форми відбувається виклик функції яка була передана
        this.setState({formData: {...formInitialValue}}) //очистка полів форми після відправлення данних
        console.log(this.state.formData);
    }

    render() {
        const {email, password, address, city, country, rules} = this.state.formData; //достаємо значення з пропсів (email) та записуємо його в канстанти

        return (
            <Form onSubmit={this.handleSubmit}>
                <h4 className='text-center'>Form</h4>
                <Input
                    label='Email address'
                    name='email'
                    type='email'
                    value={email}
                    placeholder='Enter your email'
                    onChange={this.handleChange}
                    autoComplete='on'
                />

                <Input
                    label='Password'
                    name='password'
                    type='password'
                    value={password}
                    placeholder='Enter your password'
                    onChange={this.handleChange}
                    autoComplete='on'
                />

                <Input
                    label='Address'
                    name='address'
                    value={address}
                    placeholder='Enter your address'
                    onChange={this.handleChange}
                    as='textarea'
                    autoComplete='off'
                />

                <Input
                    label='City'
                    name='city'
                    value={city}
                    placeholder='Enter your city'
                    onChange={this.handleChange}
                />

                <Form.Select
                    className='mb-3'
                    aria-label="Default select example"
                    name='country'
                    value={country}
                    onChange={this.handleChange}
                >
                    <option>Open this select menu</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="China">China</option>
                </Form.Select>

                <Form.Check
                    className='mb-3'
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

UserForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default UserForm;
