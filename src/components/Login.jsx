import React from "react";
import { Formik, Form, Field } from "formik";
import {StyledForm, ErrorMsg, StyledBtn} from './../styled-components/styles'



function Login() {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={(values)  =>  {
        const errors  = {}
        if( values.username  === ''){
          errors.username  = 'empty username...'
        }else if(values.username.length < 4){
          errors.username  = 'invalid username...'
        }

        if(values.password === ''){
          errors.password = 'empty password...'
        }else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(values.password)){
          errors.password = 'invalid password...'
        }


        return errors
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Form>
          <StyledForm>
            <Field type="text" name="username" placeholder="username ..." />
            {errors.username && touched.username && <ErrorMsg> {errors.username} </ErrorMsg>}
            <Field type="password" name="password" placeholder="password ..." />
            {errors.password && touched.password && <ErrorMsg> {errors.password} </ErrorMsg>}
            <StyledBtn style={{ backgroundColor:`${isSubmitting? 'black': 'green' }` }} disabled= {isSubmitting} type="submit"> {isSubmitting? 'Loading' : "login"}  </StyledBtn>
          </StyledForm>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
