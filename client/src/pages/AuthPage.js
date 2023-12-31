import axios from 'axios'

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post(
          'http://localhost:3001/authenticate',
          {username: value}
      )
      .then(Response => props.onAuth({ ...Response.data, secret:value} ))
      .catch(e => console.log('error', e))
      props.onAuth({ username: value, secret: value });
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome to DevCenter 👨🏻‍💻</div>
  
          <div className="form-subtitle">Login Or Sign Up With To Get Started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;