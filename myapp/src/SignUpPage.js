import React, { useEffect,useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
//import { Link } from 'react-router-dom'

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    
    const body={
      username: data.username,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword
    }

    if(data.password  === data.confirmPassword){

      const requestOptions={
        method: "POST",
        headers: {
          'content-type': 'application/json; charset=UTF-8',
          
          
        },
        body: JSON.stringify(body)
      }
      await fetch('/api/create', requestOptions)
      .then(res=>res.json())
      .then(data=>console.log(data))
      .catch(err=>console.log(err))
      reset()

    }
    else{
      alert("Password do not match")
    }
   
  }
  


  

  return (
    <div className="container">
      <div className="form">
        <h1>Sign Up Page</h1>
        <form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              {...register("username", { required: true, maxLength: 25 })}
            />

            {errors.username && (
              <p style={{ color: "red" }}>
                <small>Username is required</small>
              </p>
            )}

            {errors.username?.type === "maxLength" && (
              <p style={{ color: "red" }}>
                <small>Max character should be 25</small>
              </p>
            )}
          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your Email"
              {...register("email", { required: true, maxLength: 80 })}
            />

            {errors.email && (
              <p style={{ color: "red" }}>
                <small>Email is required</small>
              </p>
            )}

            {errors.email?.type === "maxLength" && (
              <p style={{ color: "red" }}>
                <small>Max character should be 80</small>
              </p>
            )}
          </Form.Group>

          <br></br>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your Password"
              {...register("password", { required: true, minLength: 8 })}
            />
            
            {errors.password && (
              <p style={{ color: "red" }}>
                <small>Password is required</small>
              </p>
            )}

            
            {errors.password?.type === "minLength" && (
              <p style={{ color: "red" }}>
                <small>Min character should be 8</small>
              </p>
            )}
          </Form.Group>

          <br></br>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              {...register("confirmPassword", { required: true, minLength: 8 })}
            />

            {errors.confirmPassword && (
              <p style={{ color: "red" }}>
                <small>Confirm your Password</small>
              </p>
            )}

            {errors.confirmPassword?.type === "minLength" && (
              <p style={{ color: "red" }}>
                <small>Min character should be 8</small>
              </p>
            )}
          </Form.Group>

          <br></br>

          <Form.Group>
            <Button
              as="sub"
              variant="primary"
              onClick={handleSubmit(submitForm)}
            >
              Sign Up
            </Button>
          </Form.Group>
          <br></br>

          <Form.Group>
            <small>
              Already have an account? <a href="/Login">Login</a>
            </small>
          </Form.Group>
        </form>
      </div>
    </div>
  );
};
