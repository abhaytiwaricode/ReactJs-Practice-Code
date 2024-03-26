import './Form.css';
import { useState } from 'react';

export default function Form() {
  let [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      name: '',
      username: '',
      password: '',
    });
    console.log(formData);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-input">
        <label htmlFor="name">Name :</label> &nbsp;
        <input
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          id="name"
          name="name"
        />
      </div>
      <div className="form-input">
        <label htmlFor="username">Username :</label> &nbsp;
        <input
          type="text"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />
      </div>
      <div className="form-input">
        <label htmlFor="password">Password :</label> &nbsp;
        <input
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          id="password"
          name="password"
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
