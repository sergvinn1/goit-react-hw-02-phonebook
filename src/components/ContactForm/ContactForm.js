import { Component } from 'react';
import { v4 as uuid } from 'uuid';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

class ContactForm extends Component {
  state = { INITIAL_STATE };

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDeafult();

    const { name, phone } = this.state;
    const { onAdd } = this.props;

    const isValidateForm = this.validateForm();

    if (!isValidateForm) return;

    onAdd({ id: uuid(), name, phone });
    this.resetForm();
  };

  validateForm = () => {
    const { name, phone } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !phone) {
      alert('Some filed is empty');
      return false;
    }
    return onCheckUnique(name);
  };

  resetForm = () => this.setState(INITIAL_STATE);

  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="phone"
          placeholder="Énter phone number"
          value={name}
          onChange={this.handleChangeForm}
        />
        <input
          type="tel"
          name="name"
          placeholder="Énter name"
          value={phone}
          onChange={this.handleChangeForm}
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
export default ContactForm;
