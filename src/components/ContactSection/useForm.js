import { useState } from 'react';

const defaultValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const useForm = (validateInfo) => {
  const [values, setValues] = useState(defaultValues);

  const [validationResponse, setValidationResponse] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationResponse(validateInfo(values));
  };

  const clearForm = () => {
    setValues(defaultValues);
  };

  return { handleChange, values, handleSubmit, validationResponse, clearForm };
};

export default useForm;
