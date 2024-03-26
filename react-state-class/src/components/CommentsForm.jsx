import './Form.css';
import { useState } from 'react';

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: '',
    remarks: '',
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      username: '',
      remarks: '',
      rating: 5,
    });
    console.log(formData);
  };

  return (
    <>
      <h2>Give a comment!</h2>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="username">Username: </label> &nbsp;
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            placeholder="Enter Username"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="remarks">Remarks: </label> &nbsp;
          <textarea
            id="remarks"
            cols={22}
            rows={5}
            value={formData.remarks}
            placeholder="Add Few Remarks"
            onChange={handleInputChange}
            name="remarks"
          />
        </div>
        <div className="form-input">
          <label htmlFor="rating">Rating: </label> &nbsp;
          <input
            type="number"
            id="rating"
            name="rating"
            min={1}
            max={5}
            value={formData.rating}
            onChange={handleInputChange}
          />
        </div>

        <button>Add Comment</button>
      </form>
    </>
  );
}
