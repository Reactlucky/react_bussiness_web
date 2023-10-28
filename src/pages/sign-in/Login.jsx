// import { Form, Button, Row, Col, Card } from "react-bootstrap"
// import * as Yup from 'yup'
// import { useFormik } from 'formik';
// import { loginAsync, selectToken} from './LoginSlice'
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, Navigate } from "react-router-dom";

// const LoginSchema = Yup.object().shape({
//     password: Yup.string().min(2, "Password must be at least 8 or more characters!").max(30, 'Password must be at most 30 or less characters!').required('Password is required!'),
//     email: Yup.string().email("Email is not valid!").max(50, "Email must be at most 50 or less characters!").trim().required("Email is required!"),
//   });

// const Login = () => {
//     const dispatch = useDispatch()
//     const token = useSelector(selectToken)
//       const formik = useFormik({
//           initialValues: {
//             email: "",
//             password: "",
//           },
//           validationSchema: LoginSchema,
//           onSubmit: (values) => { dispatch(loginAsync(values))},
//         });
//     return (
//         <>
//         {token !== null ? <Navigate to='/dashboard' /> : null}
//         <div>
//           <Card>
//             <div className='form-head'>
//             <h4 className='text-start'>SignIn</h4>
//             </div>
//             <Form onSubmit={formik.handleSubmit}>
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
//                 SignIn
//               </Button>
//               <div className='text-end mt-3'>
//                 <span className='me-2'>You don't have an accout please</span>
//               <Link
//                   className="signup-text-btn btn-secondry-text"
//                   to="/signup"
//                 >
//                   SignUp
//                 </Link>
//               </div>
//             </Form>
//           </Card>
//         </div>
//         </>
//     )
// }

// export default Login