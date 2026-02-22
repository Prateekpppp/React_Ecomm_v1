import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {
    
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [feedback,setFeedback] = useState('');
    const [response,setResponse] = useState(false);

    const submitFeedback = ()=>{
        let data = {
            name:name,
            email:email,
            feedback:feedback
        };
        console.log(data);

        axios.post('http://localhost:8080/feedback',data)
        .then((res)=>{
            console.log('res---',res.data);
            setResponse(res.data);
            clearInputs();
        })
        .catch((err)=>{
            console.log('err---',err);
        });
        
    }

    return (
        <>
            <h1 className='mt-5 mb-3 text-center'>Register</h1>
            <div className="w-75 mx-auto">
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>

            </div>
        </>
    )
}

export default Register