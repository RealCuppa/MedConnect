import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Button from '../Button/Button';

function SignUp() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault(); //will not reload the page
    const response = await fetch("http://localhost:4000/v1/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        email: credentials.email,
        password: credentials.password,
        confirmPassword: credentials.confirmPassword,
        accountType: "admin"
      }),
    });
    
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('access', json.success);
      navigate('/dashboard', {state: {data: credentials.accountType}});
    } else {
      document.querySelector('.errorDiv').textContent = "Account already exist";
      }
  };

  const onCredentialsChange = (e) => {
    setCredentials({...credentials,
    [e.target.name]: e.target.value });
  };
  
  return(
    <div className="flex flex-col justify-center items-center w-screen min-h-screen bg-orange-100 mt-12 py-8 px-4">
      <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            value={credentials.firstName}
            onChange={onCredentialsChange}
            required="true"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={credentials.lastName}
            onChange={onCredentialsChange}
            required="true"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={onCredentialsChange}
            required="true"
          />
        </div>
        <div className="mb-4">
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
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            minlength="8"
            maxlength="13"
            placeholder="Confirm Password"
            value={credentials.confirmPassword}
            onChange={onCredentialsChange}
            required="true"
          />
        </div>
        <div className="errorDiv text-red-600 mb-6">
        </div>
        <div className="flex items-center justify-center mb-2">
          <Button label="Sign Up"
            className="bg-[#ffb800] hover:bg-[#ffb800] text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            type="submit"
          >
          </Button>
        </div>
        <p className="text-base text-center">Already have an account? <Link className="text-[#ffb800]" to="/login">Login</Link></p>
      </form>
    </div>
    );
}

export default SignUp;