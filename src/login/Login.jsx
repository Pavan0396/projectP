import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Form, Card, Container, Row, Col, Alert } from 'react-bootstrap';
import { actionCreators } from '../store/actionCreators'
import LoginCss from './Login.module.css'
import Header from '../components/Header';
import { InputField, Button } from '../components/form/FormFields';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName == 'pavan123' && password == 'Tms@12345') {
      dispatch(actionCreators?.inout(true))
      navigate('/')
    } else {
      alert('Wrong username or password')
    }
  }
  return (
    <div>
      <Header />
      <Container fluid className="vh-100">
        <Row className="h-50">
          {/* Left Side */}
          <Col md={6} className="left-panel text-black d-flex flex-column justify-content-center p-5">
            <div>
              <h1>Good afternoon!</h1>
              <p className="lead">
                Renewable energy is not more expensive than fossil fuel when you factor in life-cycle costs.
                <br /><small>— Piyush Goyal</small>
              </p>

              <div className="mt-4">
                <p>Find us on</p>
                <div className="d-flex gap-3">
                  <i className="bi bi-twitter fs-4"></i>
                  <i className="bi bi-linkedin fs-4"></i>
                  <i className="bi bi-envelope fs-4"></i>
                  <i className="bi bi-globe fs-4"></i>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Side */}
          <Col md={6} className={`right-panel`}>
            <div className={`${LoginCss?.rightPanel} login-card  shadow rounded bg-white`}>
              <form onSubmit={handleSubmit}>
                <InputField type="text" label='UserName' placeholder='UserName' value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <br />
                <InputField type="password" label='Password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br />
                <div className='d-flex gap-3 align-items-center'>
                 <Button type="submit" >Secure Login</Button>
                 <a href="#" className="text-primary p-3">Forgot password?</a>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default Login