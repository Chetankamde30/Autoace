import { Container, Form, Button, Row, Col, CardBody,Card } from "react-bootstrap";
import { useFormik } from "formik";
import { Navigationbar } from "./Navigationbar";
import * as Yup from "yup";
import {useNavigate } from "react-router-dom";
const initialValues = {
    email: "",
    password: "",
};
export const LoginSchema=Yup.object({
    email:Yup.string().email().required("please enter your email"),
    password:Yup.string().min(8).required("please enter your password")
});
export default function Adminlogin(){ 
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: LoginSchema,
            onSubmit: (values, action) => {
                console.log(values);
                action.resetForm();
            },
        }
);
    console.log(errors);

    return (
        <Container>
        <Navigationbar/>
            <Row>
                <Col sm={{ span: 5, offset: 3 }} className="mt-4">
                    <Card className="shadow p-4">
                        <CardBody>
                            <h4 className="mb-3">👉Admin Login👈</h4>
                            <Form onSubmit={handleSubmit} className="mb-3">
                                <Row>
                                    
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>🖊️Enter Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" name="email"
                                                values={values.fname}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </Form.Group>
                                        {errors.email && touched.email ? <p className="form-error">{errors.email}</p> : null}
                                    
                                </Row>
                                <Row>
                                
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>✏️Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter password" name="password"
                                                values={values.fname}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </Form.Group>
                                        {errors.password && touched.password ? <p className="form-error">{errors.password}</p> : null}
                                </Row>
                                <Container className="mb-2">
                                <Button variant="success" type="submit" href="/AdminPage">
                                    Login 
                                </Button>
                                <a href="/AdminRegistration" className="ml-5 px-5">Register Now..</a>
                                </Container>
                                
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}