import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HomePageUrl, RegisterPageUrl } from '../../constants/urls'
import googleLogo from "../../assets/google.png"
import twitterLogo from "../../assets/twitter.png"
import { signInWithGoogle, logInWithEmailAndPassword } from '../../firebase/authentication/authentication'

export function LoginPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});
  
    const onSuccess = () => {
      navigate(HomePageUrl);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const { email, password } = formData;
      await logInWithEmailAndPassword({ email: email, password: password, onSuccess: onSuccess });
    };
  
    const onChange = (event) => {
      const { name, value } = event.target;
      setFormData((oldData) => ({ ...oldData, [name]: value }));
    };

    return (
        <section className="bg-gray-200 dark:bg-gray-900 h-screen w-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Inicia sesión a tu cuenta
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email" onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                                <button onClick={() => signInWithGoogle({onSuccess: onSuccess})} className="flex bg-gray-100 justify-center items-center rounded-md p-3 hover:scale-105 transition-all border">
                                    <img src={googleLogo} alt="Google" className="w-7 h-7 mr-3"/>
                                    Iniciar sesión con Google
                                </button>
                                <button className="bg-gray-100 flex justify-center items-center rounded-md p-3 hover:scale-105 transition-all border">
                                    <img src={twitterLogo} alt="Twitter" className="w-7 h-7 mr-3"/>
                                    Iniciar sesión con Twitter
                                </button>
                            </div>
                            <button type="submit" onClick={handleSubmit} className="bg-blue-500 w-full text-white hover:scale-105 transition-all hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                ¿No tienes cuenta? <Link to={RegisterPageUrl} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Regístrate</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}