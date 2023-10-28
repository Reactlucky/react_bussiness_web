// import { Row, Col, Form, Button, Card } from 'react-bootstrap'
// import { useFormik } from 'formik';
// import { Link, useNavigate } from 'react-router-dom';
// import { registerAsync, selectStatus, selectLoading } from './RegisterSlice'
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import * as Yup from 'yup'

// const RegisterSchema = Yup.object().shape({
//   first_name: Yup.string().required("First name is required!"),
//   last_name: Yup.string().required("Last name is required!"),
//   password: Yup.string().min(8, "Password must be at least 8 or more characters!").max(30, 'Password must be at most 30 or less characters!').required('Password is required!'),
//   email: Yup.string().email("Email is not valid!").max(50, "Email must be at most 50 or less characters!").trim().required("Email is required!"),
// });

// const Register = () => {
//     const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const status = useSelector(selectStatus)
//   const isLoading = useSelector(selectLoading)

//   useEffect(() => {
//     if(status === 1){
//       navigate('/')
//     }
//   }, [status])
//     const formik = useFormik({
//         initialValues: {
//           first_name: "",
//           last_name: "",  
//           email: "",
//           password: "",
//         },
//         validationSchema: RegisterSchema,
//         onSubmit: (values) => { dispatch(registerAsync(values))},
//       });
//     return (
//         <>
//         <Card>
//             <div className='form-head'>
//             <h4 className='text-start'>SignUp</h4>
//             </div>
//             <Form onSubmit={formik.handleSubmit}>
//             <Form.Group className="mb-3" controlId="first_name">
//               <Form.Control
//                   type="text"
//                   name="first_name"
//                   placeholder="Enter first name"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.first_name}
//                 />
//               {formik.errors.first_name && formik.touched.first_name && formik.errors.first_name ?  <Form.Label className="mt-1 text-danger"><div>{formik.errors.first_name}</div></Form.Label> : null}
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="last_name">
//               <Form.Control
//                   type="text"
//                   name="last_name"
//                   placeholder="Enter last name"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.last_name}
//                 />
//               {formik.errors.last_name && formik.touched.last_name && formik.errors.last_name ?  <Form.Label className="mt-1 text-danger"><div>{formik.errors.last_name}</div></Form.Label> : null}
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Control
//                   type="email"
//                   name="email"
//                   placeholder="Enter email"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.email}
//                 />
//               {formik.errors.email && formik.touched.email && formik.errors.email ?  <Form.Label className="mt-1 text-danger"><div>{formik.errors.email}</div></Form.Label> : null}
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Control
//                   type="password"
//                   name="password"
//                   placeholder="Enter password"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.password}
//                 />
//               {formik.errors.password && formik.touched.password && formik.errors.password ? <Form.Label className="mt-1 text-danger"><div>{formik.errors.password}</div></Form.Label> : null}
//               </Form.Group>
//               <Button variant="primary" type="submit" className="w-100">
//                 SignUp
//               </Button>
//               <div className='text-end mt-3'>
//                 <span className='me-2'>You have an accout please</span>
//               <Link
//                   className="signup-text-btn btn-secondry-text"
//                   to="/"
//                 >
//                   SignIn
//                 </Link>
//               </div>
//             </Form>
//           </Card>
//         </>
//     )
// }

// export default Register