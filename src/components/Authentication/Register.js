import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import logo from '../../images/logos/Group 1329.png';
import './Register.css';

const Register = () => {

    // data 
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    // react hook form
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <Container>
                <div>
                    <img className="w-25 p-5" src={logo} alt="" />
                </div>
                <div className="border border-2 rounded w-50 mx-auto p-4 text-start">
                    <h5 className="pb-4">Register as a Volunteer</h5>
                    <form className="hook-form" onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Full Name" {...register("fullName", { required: true })} />
                        <input placeholder="Email" {...register("email", { pattern: /^\S+@\S+\.\S+$/ }, { required: true })} />
                        <input defaultValue={today} {...register("date", { required: true })} />
                        <input placeholder="Description" {...register("description")} />
                        <input placeholder="Organize books at the library" {...register("organizeBooks")} />
                        <input className="btn btn-primary border-0 my-3 rounded-0" type="submit" value="Registration" />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Register;