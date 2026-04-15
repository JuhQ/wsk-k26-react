import { useState } from 'react';

const useForm = (callback, initState) => {
  const [inputs, setInputs] = useState(initState);
  const [errors, setErrors] = useState(null);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = (event) => {
    event.persist();
    console.log(event.target.name, event.target.value);
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleError = (fieldName, message) => {
    setErrors((errors) => ({
      ...errors,
      [fieldName]: message,
    }));
  };

  const clearErrors = () => {
    setErrors(null);
  };

  return {
    handleSubmit,
    handleInputChange,
    handleError,
    clearErrors,
    inputs,
    errors,
  };
};

export default useForm;
