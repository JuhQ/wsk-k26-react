import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [mode, setMode] = useState('login');

  return (
    <section className="auth-view">
      <div className="auth-backdrop" aria-hidden="true" />
      <div className="auth-wrapper">
        <div className="auth-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={mode === 'login'}
            className={`auth-tab${mode === 'login' ? ' auth-tab--active' : ''}`}
            onClick={() => setMode('login')}
          >
            Sign in
          </button>
          <button
            role="tab"
            aria-selected={mode === 'register'}
            className={`auth-tab${mode === 'register' ? ' auth-tab--active' : ''}`}
            onClick={() => setMode('register')}
          >
            Register
          </button>
        </div>
        {mode === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
    </section>
  );
};
export default Login;
