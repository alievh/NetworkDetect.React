import React, { useState } from "react";
import Col from "../Bootstrap/Col.tsx";
import Input from "../UI/Input.tsx";
import { RegisterModel } from "../../interfaces/Models.tsx";
import { BASE_URL } from "../../utils/BaseUrl.tsx";
import { FormikProps, useFormik } from "formik";
import Loading from "../Loading/Loading.tsx";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  }: FormikProps<RegisterModel> = useFormik<RegisterModel>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    async onSubmit() {
      const user = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };

      const response = await fetch(`${BASE_URL}/authenticate/register`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setLoading(false);
        if (res.ok) {
          console.log("burda")
          navigate("/");
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(data);
            setError(data.message.toString());
          });
        }
      });

      // if(response.status == "Success"){
      //   Swal.fire({
      //     position: "top-end",
      //     title: response.message,
      //     showConfirmButton: false,
      //     timer: 1500
      //   });
      // }
      
    },
  });

  if (loading) return <Loading />;
  if (error) return <p>Error: {error} </p>;

  return (
    
    <Col className="authorization_divider" lg="6">
      <div className="authorization_title">
        <h5>Sign Up</h5>
        <p>Create an account for faster checkout</p>
      </div>
      <form onSubmit={handleSubmit} className="authorization_form">
        <Input
          label="Firstname"
          id="firstName"
          placeholder="Enter firstname..."
          type="text"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          inputError={errors.firstName}
        />
        <Input
          label="Lastname"
          id="lastName"
          placeholder="Enter lastname..."
          type="text"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          inputError={errors.lastName}
        />
        <Input
          label="Email"
          id="email"
          placeholder="Enter email..."
          type="text"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          inputError={errors.email}
        />
        <Input
          label="Password"
          id="password"
          placeholder="Enter password..."
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          inputError={errors.password}
        />
        <Input
          label="Confirm password"
          id="confirmPassword"
          placeholder="Confirm password..."
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          inputError={errors.confirmPassword}
        />
        <div>
          <button type="submit">REGISTER</button>
        </div>
      </form>
    </Col>
  );
};

export default SignUp;
