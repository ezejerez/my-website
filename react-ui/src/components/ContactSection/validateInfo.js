export default function validateInfo(values, success) {
  const response = { success: true };

  if (!values.name.trim()) {
    response.success = false;
    response.name = 'Name is required';
  }

  if (!values.email) {
    response.success = false;
    response.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    response.success = false;
    response.email = 'Email address is invalid';
  }

  if (!values.subject) {
    response.success = false;
    response.subject = 'Subject is required';
  }

  if (!values.message) {
    response.success = false;
    response.message = 'Message is required';
  }

  return response;
}
