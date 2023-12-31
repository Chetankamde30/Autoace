import { Container, Form, Button, Row, Col, CardBody,Card } from "react-bootstrap";
import { useFormik } from "formik";
import { Navigationbar } from "./Navigationbar";

import * as Yup from "yup";

const initialValues={
    name:"",
    email:"",
    no:"",
    password:"",
};
export const registerSchema=Yup.object({
    name:Yup.string().min(2).max(25).required("please enter your first name"),
    contact:Yup.number().min(10).max(10).required("enter contact"),
    email:Yup.string().email().required("please enter your email"),
    password:Yup.string().min(8).required("please enter your password")
});
export default function  NewRegistration(){
    const {values,errors,touched,handleBlur,handleChange,handleSubmit}= 
    useFormik({
        initialValues:initialValues,
        validationSchema:registerSchema,
        onSubmit:(values,action)=>{
            console.log( " ~ file: NewRegistration.jsx ~ line 9 ~ NewRegistration ~ values",values);
            action.resetForm();
        },
    });
   console.log(" ~ file:: NewRegistration.jsx ~ line 9 ~ NewRegistration ~ errors",errors);
 return (
        <Container>
           <Navigationbar/>
            <Row>
                <Col sm={{span:6,offset:3}} className="mt-4">
                    <Card className="shadow p-4">
                        <CardBody>
                            <h4 className="mb-3">👉User Registration👈</h4>
                            <Form onSubmit={handleSubmit}>
                
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>🖊️Enter Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name"
                            values={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}   
                            />                         
                        </Form.Group>
                        {errors.name && touched.name?<p className="form-error">{errors.name}</p>:null}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>🖊️Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email address" name="email" 
                            values={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}  />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        {errors.email && touched.email?<p className="form-error">{errors.email}</p>:null}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>🖊️Contact Number</Form.Label>
                            <Form.Control type="Number" placeholder="Enter Contact No." name="no" 
                            values={values.no}
                            onChange={handleChange}
                            onBlur={handleBlur}  />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        {errors.no && touched.no?<p className="form-error">{errors.no}</p>:null}
                    
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>🖊️Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"  name="password"
                            values={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}  />
                        </Form.Group>
                        {errors.password && touched.password?<p className="form-error">{errors.password}</p>:null}
                
                <Container className="text-center">
                <Button variant="success" type="submit">
                    Register
                </Button>
                <a href="/Login" className="ml-5 px-4">Login Now..</a>
                </Container>
            </Form>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    );
}