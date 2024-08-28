import React, { useMemo, useState } from "react";
import Col from "../Bootstrap/Col.tsx";
import { LoginModel } from "../../interfaces/Models.tsx";
import { BASE_URL } from "../../utils/BaseUrl.tsx";
import Loading from "../Loading/Loading.tsx";
import { FormikProps, useFormik } from "formik";
import Input from "../UI/Input.tsx";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
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
  }: FormikProps<LoginModel> = useFormik<LoginModel>({
    initialValues: {
      email: "",
      password: "",
    },
    async onSubmit() {
      const user = {
        email: values.email,
        password: values.password,
      };

      const loggedUser = await fetch(`${BASE_URL}/authenticate/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8",
        },
      }).then((res) => {
        setLoading(false);
        if (res.ok) {
          navigate("/");
          window.location.reload()
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(data);
            setError(data.title.toString());
          });
        }
      });

      localStorage.setItem("user", JSON.stringify(loggedUser));
    },
  });

  if (loading) return <Loading />;
  if (error) return <p>Error: {error} </p>;

  return (
    <Col lg="6">
      <div className="authorization_title">
        <h5>Sign In</h5>
      </div>
      <form onSubmit={handleSubmit} className="authorization_form">
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
        <div>
          <button type="submit">SIGN IN</button>
        </div>
      </form>
    </Col>
  );
};

export default SignIn;
