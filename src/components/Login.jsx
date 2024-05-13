import React, { useState } from "react";
import { Formik } from "formik";
import { ErrorMsg, StyledBtn, StyledForm } from "./../styled-components/styles";
import registerSchema from "../validateSchema";

function Login() {
  const [merrors, setMerrors] = useState({});
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      username: event.target[0].value,
      password: event.target[1].value
    };
    try {
      const isValid = await registerSchema.validate(newUser, {
        abortEarly: false
      });
    } catch (err) {
      let error = err.inner.reduce(
        (acc, err) => ({ ...acc, [err.path]: err.message }),
        {}
      );
      console.log("errors", error);
      setMerrors(error);
    }
  };
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={registerSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <form style={{display:"flex", flexDirection:'column', justifyContent:'space-evenly'}} onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="username ..." />
            {merrors.username && <ErrorMsg> {merrors.username} </ErrorMsg>}
          
            <input type="password" name="password" placeholder="password ..." />
            {merrors.password && <ErrorMsg> {merrors.password} </ErrorMsg>}
          
            <StyledBtn type="submit">
              {" "}
              {isSubmitting ? "Loading" : "login"}{" "}
            </StyledBtn>
          </form>
        </StyledForm>
      )}
    </Formik>
  );
}

export default Login;
