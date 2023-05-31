import { useForm } from 'react-hook-form';
import img from '../../assets/others/authentication2.png'
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../secret/SocialLogin/SocialLogin';

const SingUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    console.log('user profile');
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: ' Welcome to Bistro boss New User',
                                        showConfirmButton: false,
                                        timer: 1000
                                    })
                                    navigate('/');
                                }
                            })


                    })
                    .catch(error => console.error(error))
            })
    };


    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up </title>
            </Helmet>
            <div className="hero bg-auto bg-no-repeat bg-center  min-h-screen bg-base-200 ">
                <div className="hero-content  flex flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img className='w-[700px]' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-5xl font-bold">Sing Up now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Name is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-600'>photoURL is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" name="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$&*$])/ })} name="password" className="input input-bordered" />
                                {errors.password?.type === 'minLength' && <p className='text-red-600' role="alert"> password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-600' role="alert"> password must be less then 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600' role="alert">password must be 6 characters One upperCase One lowerCase one Number One special character </p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sing Up" />
                                <p className='text-center'><small>Already have an account <Link className='text-red-500' to='/login'>Login</Link> </small></p>
                                <SocialLogin></SocialLogin>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SingUp;