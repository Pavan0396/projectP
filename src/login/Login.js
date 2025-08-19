import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { actionCreators } from '../store/actionCreators'

const Login = () => {
    const dispatch=useDispatch()
    const navigate =useNavigate()
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const  handleLogin = ()=>{
        if(userName == 'pavan123' && password == 'Tms@12345'){  
            dispatch(actionCreators?.inout(true))
            navigate('/')
        }else{
          alert('Wrong username or password')
        }
    }
  return (
    <div>
        {/* <input type='text' placeholder='UserId' onChange={(e)=>{setUserName(e.target.value)}}/><br/>
        <input type='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={handleLogin}>Login</button> */}
        <Container className="login-container">
          <Row className="justify-content-center">
            <Col md={6} lg={4}>
              <Card className="login-card">
                <Card.Body>
                  <h3 className="login-title">Login</h3>
                    <Form>
                            <Form.Group className="mb-3" controlId="formUserId">
                              {/* <Form.Label>User ID</Form.Label> */}
                              <Form.Control
                                type="text"
                                placeholder="user ID/username"
                                onChange={(e) => setUserName(e.target.value)}
                              />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPassword">
                              {/* <Form.Label>Password</Form.Label> */}
                              <Form.Control
                                type="password"
                                placeholder="password"
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </Form.Group>
                            <Button variant="primary" className="w-100" onClick={handleLogin}>
                              Login
                            </Button>
                    </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

  
export default Login