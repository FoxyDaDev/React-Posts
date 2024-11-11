import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';


function Signup() {
    const navigate = useNavigate();

    const onSignInClicked = (e: any) => {

        const username = e.target.elements.username.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;


        if (username && email && password) {
          e.target.reset();
          navigate("/");
        }
    }

    return (
      <div>
        <div className='flex flex-col items-center justify-center px-6 py-48 mx-auto md-h-screen lg-py-0'>
          <h2 className='flex items-center mb-6 text-2xl font-semibold'>Sign Up</h2>
          <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>Sign in to your account</h1>
              <form onSubmit={onSignInClicked} className='space-y-4 md:space-y-6'>
                  <Input 
                    inputText=""
                    type='text'
                    minLength={3}
                    maxLength={20}
                    required={true}
                    name="username"
                    placeholder="Enter your username"
                  />
                  <Input
                      inputText=""
                      type='email'
                      minLength={5}
                      maxLength={50}
                      required={true}
                      name="email"
                      placeholder="Enter your email"
                  />
                    <Input
                        inputText=""
                        type="password"
                        minLength={6}
                        maxLength={20}
                        required={true}
                        name="password"
                        placeholder="••••••••"
                    />
                  <button type='submit' className='w-full text-white bg-greenish hover:bg-greenish-hold focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Sign in</button>
              </form>
              <p className="text-sm font-light text-gray-700">
                Already have an account? <a href="/login" className="font-medium text-greenish hover:underline">Log in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Signup;