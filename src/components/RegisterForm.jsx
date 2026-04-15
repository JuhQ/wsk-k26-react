import { useUser } from '../hooks/apiHooks';
import useForm from '../hooks/formHooks';

const RegisterForm = () => {
  const initValues = {
    username: '',
    password: '',
    email: '',
  };

  const { postUser, checkUser } = useUser();

  const {
    inputs,
    handleInputChange,
    handleSubmit,
    errors,
    handleError,
    clearErrors,
  } = useForm(doRegister, initValues);

  async function doRegister() {
    try {
      const userResult = await postUser(inputs);
      console.log(userResult);
    } catch (error) {
      alert(error.message);
    }
  }

  const handleUserBlur = async () => {
    clearErrors();
    try {
      const checkResult = await checkUser(inputs.username);
      if (!checkResult.available) {
        handleError('username', 'Username not available');
      }
    } catch {
      // saa olla tyhjä
    }
  };

  console.log(errors);
  return (
    <article className="auth-card">
      <p className="auth-kicker">Create account</p>
      <h2 className="auth-title">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="auth-field">
          <label htmlFor="registeruser">Username</label>
          <input
            name="username"
            type="text"
            id="registeruser"
            onChange={handleInputChange}
            onBlur={handleUserBlur}
            autoComplete="username"
          />
          {errors && errors.username && (
            <p className="auth-error">{errors.username}</p>
          )}
        </div>
        <div className="auth-field">
          <label htmlFor="registerpassword">Password</label>
          <input
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <div className="auth-field">
          <label htmlFor="registeremail">Email</label>
          <input
            name="email"
            type="email"
            id="registeremail"
            onChange={handleInputChange}
            autoComplete="current-email"
          />
        </div>
        <button className="auth-submit" type="submit">
          Create account
        </button>
      </form>
    </article>
  );
};

export default RegisterForm;
