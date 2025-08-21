import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Reusable Input Text Field
export const InputField = ({ label, name, value, onChange, type = 'text', ...props }) => (
  <div className="form-group ">
    {label && <label htmlFor={name} className='text-start d-block'>{label}</label>}
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="form-control"
      {...props}
    />
  </div>
);

// Reusable File Input Field
export const FileInput = ({ label, name, onChange, ...props }) => (
  <div className="form-group">
    {label && <label htmlFor={name} className='text-start d-block' >{label}</label>}
    <input
      type="file"
      name={name}
      id={name}
      onChange={onChange}
      className="form-control"
      {...props}
    />
  </div>
);

// Reusable Button
export const Button = ({ children, onClick, type = 'button', className = 'btn btn-secondary', ...props }) => (
  <button type={type} className={className} onClick={onClick} {...props}>
    {children}
  </button>
);

// Reusable Date Picker (using react-datepicker)

export const CalendarInput = ({ label, selectedDate, onChange, name }) => (
  <div className="form-group">
    {label && <label htmlFor={name} className='text-start d-block'>{label}</label>}
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      className="form-control"
      name={name}
      id={name}
      dateFormat="yyyy-MM-dd"
    />
  </div>
);
