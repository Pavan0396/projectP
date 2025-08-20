import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import WiseImg from '../assets/images/wise.png'
import STRINGS from '../constants/Strings'
import HeaderCss from './header.module.css'

const Header = () => {
    return (
        <div class={HeaderCss?.main}>
            <Container>
                <Row>
                    <Col md={12}>
                        <img src={WiseImg} alt="Wise Logo" className="img-fluid" /> <strong>{STRINGS?.appTitle}</strong>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header