import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import classes from './SignUpForm.module.css';


const validationSchema = yup.object({
    firstName: yup
        .string('Enter your First Name')
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: yup
        .string('Enter your Last Name')
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    confirmPassword: yup.string("Enter your password")
        .required("Confirm your password")
        .oneOf([yup.ref("password")], "Password does not match")
});

const SignUpForm = ({ OnSave }) => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            OnSave(values)
        },
    });

    return (
        <div className={classes.signup_form}>
            <h3 className={classes.login_heading}>Create your Account </h3>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '44ch' },
                }}
            >
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                    <TextField
                        fullWidth
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}

                    />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}

                    />
                    <TextField
                        fullWidth
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}

                    />
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Submit
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default SignUpForm
