import {useState} from 'react';
// import {useNavigate, Link} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Button from '../Button/Button';

function Login() {
  // const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    role: "user",
    username: "",
    password: ""
  });
  
  const handleSubmit = e => {
    e.preventDefault();
    alert("form submitted");
  }
  
  /*const handleSubmit = async (e) => {
    e.preventDefault(); //will not reload the page
    let api;
    if(credentials.role === "admin") {
      api = "admin api";
      } else if(credentials.role === "user") {
        api = "user api";
      }
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password
      })
    });
    
    setCredentials({
      role: "user",
      username: "",
      password: ""
    });
    
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('access', json.success);
      navigate('/dashboard');
    } else {
      document.querySelector('.errorDiv').textContent = "Wrong username or password entered";
      }
  }*/

  const onCredentialsChange = (e) => {
    setCredentials({...credentials,
    [e.target.name]: e.target.value });
  };
  
  return(
    <div className="flex flex-col justify-center items-center w-screen min-h-screen bg-orange-100 py-8 px-4">
      <h2 className="text-3xl mb-2">Login</h2>
      <p className="text-lg text-center mb-4">{
        credentials.role === "user" ? "Login with the credentials that you recieved in mail" : null
      }</p>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div className="mb-4">
          <p className="mb-2">What are you logging in for?</p>
          <div className="flex justify-between items-center">
            <div className="flex">
              <input 
                id="admin"
                name="role"
                type="radio"
                value="admin"
                checked={credentials.role === "admin"}
                onChange={onCredentialsChange} />
              <label className="block text-gray-700 text-sm font-bold ml-1" htmlFor="admin">Admin</label>
            </div>
            <div className="flex">
              <input 
                id="user"
                name="role"
                type="radio"
                value="user"
                checked={credentials.role === "user"}
                onChange={onCredentialsChange} />
              <label className="block text-gray-700 text-sm font-bold ml-1" htmlFor="user">User</label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={onCredentialsChange}
            required="true"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            minlength="8"
            maxlength="13"
            placeholder="Password"
            value={credentials.password}
            onChange={onCredentialsChange}
            required="true"
          />
        </div>
        <div className="errorDiv text-red-600 mb-6">
        </div>
        <div className="flex items-center justify-center mb-2">
          <Button label="Login"
            className="bg-[#ffb800] hover:bg-[#ffb800] text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            type="submit"
          >
          </Button>
        </div>
        {
          (credentials.role === "user") ? 
          <p className="text-base text-center">If you haven’t recieved login credentials <Link className="text-[#ffb800]" to="/contact">contact now</Link></p> :
          (credentials.role === "admin") ?
          <p className="text-base text-center">Not an Admin? <Link className="text-[#ffb800]" to="/register">Register Now</Link></p> : null
        }
      </form>
    </div>
    );
}

export default Login;