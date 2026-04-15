import { useNavigate } from 'react-router';
import { useAuthentication } from '../hooks/apiHooks';
import useForm from '../hooks/formHooks';

const LoginForm = () => {
  const initValues = {
    username: '',
    password: '',
  };

  const navigate = useNavigate();

  const { postLogin } = useAuthentication();

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doLogin,
    initValues,
  );

  async function doLogin() {
    try {
      const loginResult = await postLogin(inputs);
      console.log(loginResult);
      localStorage.setItem('token', loginResult.token);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <article className="auth-card">
      <p className="auth-kicker">Welcome back</p>
      <h2 className="auth-title">Sign in</h2>
      <form onSubmit={handleSubmit}>
        <div className="auth-field">
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div className="auth-field">
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button className="auth-submit" type="submit">
          Sign in
        </button>
      </form>
    </article>
  );
};

export default LoginForm;
