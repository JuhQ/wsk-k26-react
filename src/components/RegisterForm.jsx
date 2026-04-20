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
        <div className="flex w-4/5 flex-col">
          <label htmlFor="registeruser">Username</label>
          <input
            className="my-2.5 rounded-md border p-2.5"
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
        <div className="flex w-4/5 flex-col">
          <label htmlFor="registerpassword">Password</label>
          <input
            className="my-2.5 rounded-md border p-2.5"
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <div className="flex w-4/5 flex-col">
          <label htmlFor="registeremail">Email</label>
          <input
            className="my-2.5 rounded-md border p-2.5"
            name="email"
            type="email"
            id="registeremail"
            onChange={handleInputChange}
            autoComplete="current-email"
          />
        </div>
        <button
          className="my-2.5 block w-4/5 rounded-md bg-stone-500 text-stone-50 hover:bg-stone-700 transition-all duration-500 ease-in-out p-2.5"
          type="submit"
        >
          Create account
        </button>
      </form>
    </article>
  );
};

export default RegisterForm;
