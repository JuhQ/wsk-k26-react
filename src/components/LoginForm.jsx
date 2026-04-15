import { useAuthentication } from '../hooks/apiHooks';
import useForm from '../hooks/formHooks';

const LoginForm = () => {
  const initValues = {
    username: '',
    password: '',
  };

  const { postLogin } = useAuthentication();

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doLogin,
    initValues,
  );

  async function doLogin() {
    try {
      const loginResult = await postLogin(inputs);
      console.log(loginResult);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
