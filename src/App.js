import { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
    isFriendly: true,
    employment: '',
    favColor: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='First Name' name='firstName' value={formData.firstName} onChange={handleChange} />
      <input type='text' placeholder='Last Name' name='lastName' value={formData.lastName} onChange={handleChange} />
      <input type='email' placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
      <textarea placeholder='Comments' name='comments' value={formData.comments} onChange={handleChange} />
      <input type='checkbox' id='isFriendly' name='isFriendly' checked={formData.isFriendly} onChange={handleChange} />
      <label htmlFor='isFriendly'>Are you friendly?</label>
      <br />
      <br />

      <fieldset>
        <legend>Current employment status</legend>
        <input
          type='radio'
          id='unemployed'
          name='employment'
          value='unemployed'
          checked={formData.employment === 'unemployed'}
          onChange={handleChange}
        />
        <label htmlFor='unemployed'>Unemployed</label>
        <br />

        <input
          type='radio'
          id='part-time'
          name='employment'
          value='part-time'
          checked={formData.employment === 'part-time'}
          onChange={handleChange}
        />
        <label htmlFor='part-time'>Part-time</label>
        <br />

        <input
          type='radio'
          id='full-time'
          name='employment'
          value='full-time'
          checked={formData.employment === 'full-time'}
          onChange={handleChange}
        />
        <label htmlFor='full-time'>Full-time</label>
        <br />
      </fieldset>
      <br />

      <label htmlFor='favColor'>What is your favorite color?</label>
      <br />
      <select id='favColor' name='favColor' value={formData.favColor} onChange={handleChange}>
        <option value='red'>Red</option>
        <option value='orange'>Orange</option>
        <option value='yellow'>Yellow</option>
        <option value='green'>Green</option>
        <option value='blue'>Blue</option>
        <option value='indigo'>Indigo</option>
        <option value='violet'>Violet</option>
      </select>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default App;
