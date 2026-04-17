import useForm from "../hooks/formHooks";
import { useUserContext } from "../hooks/contextHooks";

const LoginForm = () => {
  const initValues = {
    username: "",
    password: "",
  };

  const { handleLogin } = useUserContext();

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doLogin,
    initValues,
  );

  async function doLogin() {
    try {
      await handleLogin(inputs);
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
