import React, { useState, useRef, useEffect } from "react";
import { FaBell, FaBox, FaUserCircle } from "react-icons/fa";
import "./Header.css";
import { Col, Container, Row } from "react-bootstrap";
import WiseImg from "../assets/images/wise.png";
import STRINGS from "../constants/Strings";
import HeaderCss from "./header.module.css";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actionCreators";
import { useNavigate } from "react-router-dom";

const Header = ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // close dropdown if click outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handlelogout = () => {
    dispatch(actionCreators?.inout(false));
    navigate("/");
  };
  return (
    <div>
      {props?.main ? (
        <header className="header">
          <h1 className="header-title">DEVELOPMENT</h1>

          <div className="header-right" ref={menuRef}>
            <FaBox className="header-icon" />
            <FaBell className="header-icon" />

            <div className="profile-avatar" onClick={() => setOpen(!open)}>
              <FaUserCircle size={28} />
            </div>

            {open && (
              <div className="profile-menu">
                <div className="profile-info">
                  <FaUserCircle size={36} className="profile-avatar-icon" />
                  <div>
                    <p className="profile-name">Pavan Kumar</p>
                    <p className="profile-email">pavankumar.navvaru@...</p>
                  </div>
                </div>
                <ul className="menu-list">
                  <li>2-Factor Authentication</li>
                  <li>Change Password</li>
                  <li>Reset Layout</li>
                  <li>Settings</li>
                  <li className="menu-shortcut">
                    Fullscreen <span>F11</span>
                  </li>
                  <li className="menu-shortcut">
                    Print <span>Ctrl+P</span>
                  </li>
                  <li>Language &gt;</li>
                  <li className="logout" onClick={handlelogout}>
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
      ) : (
        <div class={HeaderCss?.main}>
          <Container>
            <Row>
              <Col md={12}>
                <img src={WiseImg} alt="Wise Logo" className="img-fluid" />{" "}
                <strong>{STRINGS?.appTitle}</strong>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Header;
