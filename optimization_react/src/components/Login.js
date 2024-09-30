import React from 'react';
import { Formik } from 'formik';

const Login = () => (
  <div className='form-container'>
    <h3>Login</h3>
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
     
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}  className="formik-container">
          <input
            type="email"
            name="email"
            className='FormInput'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            className='FormInput'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting} className='submit-btn'>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Login;