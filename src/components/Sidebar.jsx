import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaChartBar,
  FaCog,
  FaChevronDown,
  FaChevronUp,
  FaListAlt,
  FaChartLine,
} from "react-icons/fa";
import "./Sidebar.css";
import WiseImg from "../assets/images/wise.png";

const Sidebar = ({ collapsed, toggle }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [openMenus, setOpenMenus] = useState({
    general: false,
    technical:false,
    commercial:false,
    addAsset: false,
    actionplan: false,
    asset2: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const isActive = (path) =>
    currentPath === path || currentPath.startsWith(path + "/");

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <span className="logo">
          {" "}
          <img src={WiseImg} width={20} /> {collapsed ? "" : "A M P"}
        </span>
        <button className="toggle-btn" onClick={toggle}>
          {collapsed ? "☰" : "✖"}
        </button>
      </div>

      <nav className="menu">
        <Link to="/" className={`menu-item ${isActive("/") ? "active" : ""}`}>
          <FaHome className="icon" />
          {!collapsed && <span>Home</span>}
        </Link>

        {/* General with nested menu */}
        <div className="submenu-container">
          <div
            className={`menu-item submenu-toggle ${
              isActive("/general") ? "active" : ""
            }`}
            onClick={() => toggleMenu("general")}
          >
            <FaListAlt className="icon" />
            {!collapsed && (
              <div className="submenu-label">
                <span>General</span>
                <span className="arrow">
                  {openMenus.general ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
            )}
          </div>

          {openMenus.general && !collapsed && (
            <div className="submenu">
              {/* AddAsset */}
              <div
                className={`menu-item submenu-toggle ${
                  isActive("/general/asset") ? "active" : ""
                }`}
                onClick={() => toggleMenu("addAsset")}
              >
                {!collapsed && (
                  <div className="submenu-label">
                    <span>Asset</span>
                    <span className="arrow">
                      {openMenus.addAsset ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </div>
                )}
              </div>
              {openMenus.addAsset && (
                <div className="submenu nested">
                  <Link
                    to="/general/addasset"
                    className={`submenu-item ${
                      isActive("/general/addasset") ? "active" : ""
                    }`}
                  >
                    AddAssets
                  </Link>
                  <Link
                    to="/general/listasset"
                    className={`submenu-item ${
                      isActive("/general/listasset") ? "active" : ""
                    }`}
                  >
                    List Assets
                  </Link>
                </div>
              )}
              {/* Action Plan */}
              <div
                className={`submenu-item submenu-toggle ${
                  isActive("/general/actionplan") ? "active" : ""
                }`}
                onClick={() => toggleMenu("actionplan")}
              >
                {!collapsed && (
                  <div className="submenu-label">
                    <span>Action Plan</span>
                    <span className="arrow">
                      {openMenus.actionplan ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </div>
                )}
              </div>
              {openMenus.actionplan && (
                <div className="submenu nested">
                  <Link
                    to="/general/addaction"
                    className={`submenu-item ${
                      isActive("/general/addaction") ? "active" : ""
                    }`}
                  >
                    Add Action
                  </Link>
                  <Link
                    to="/general/listaction"
                    className={`submenu-item ${
                      isActive("/general/listaction") ? "active" : ""
                    }`}
                  >
                    List Actions
                  </Link>
                  <Link
                    to="/general/bulkuploadaction"
                    className={`submenu-item ${
                      isActive("/general/bulkuploadaction") ? "active" : ""
                    }`}
                  >
                    Bulk Upload Action
                  </Link>

                  {/* Asset2 */}
                  {/* <div
                    className="submenu-item submenu-toggle"
                    onClick={() => toggleMenu("asset2")}
                  >
                    Asset2 {openMenus.asset2 ?<FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {openMenus.asset2 && (
                    <div className="submenu nested">
                      <Link
                        to="/general/addasset/asset2/a1"
                        className={`submenu-item ${
                          isActive("/general/addasset/asset2/a1") ? "active" : ""
                        }`}
                      >
                        A1
                      </Link>
                      <Link
                        to="/general/addasset/asset2/a2"
                        className={`submenu-item ${
                          isActive("/general/addasset/asset2/a2") ? "active" : ""
                        }`}
                      >
                        A2
                      </Link>
                    </div>
                  )} */}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Technical */}
        <div className="submenu-container">
          <div
            className={`menu-item submenu-toggle ${
              isActive("/technical") ? "active" : ""
            }`}
            onClick={() => toggleMenu("technical")}
          >
            <FaChartLine className="icon" />
            {!collapsed && (
              <div className="submenu-label">
                <span>Technical</span>
                <span className="arrow">
                  {openMenus.general ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
            )}
          </div>

          {openMenus.general && !collapsed && (
            <div className="submenu">
              {/* AddAsset */}
              <div
                className={`menu-item submenu-toggle ${
                  isActive("/general/asset") ? "active" : ""
                }`}
                onClick={() => toggleMenu("addAsset")}
              >
                {!collapsed && (
                  <div className="submenu-label">
                    <span>Asset</span>
                    <span className="arrow">
                      {openMenus.addAsset ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </div>
                )}
              </div>
              {openMenus.addAsset && (
                <div className="submenu nested">
                  <Link
                    to="/general/addasset"
                    className={`submenu-item ${
                      isActive("/general/addasset") ? "active" : ""
                    }`}
                  >
                    AddAssets
                  </Link>
                  <Link
                    to="/general/listasset"
                    className={`submenu-item ${
                      isActive("/general/listasset") ? "active" : ""
                    }`}
                  >
                    List Assets
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Commercial */}
        <div className="submenu-container">
          <div
            className={`menu-item submenu-toggle ${
              isActive("/commercial") ? "active" : ""
            }`}
            onClick={() => toggleMenu("commercial")}
          >
            <FaChartLine className="icon" />
            {!collapsed && (
              <div className="submenu-label">
                <span>Commercial</span>
                <span className="arrow">
                  {openMenus.general ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
            )}
          </div>

          {openMenus.general && !collapsed && (
            <div className="submenu">
              {/* AddAsset */}
              <div
                className={`menu-item submenu-toggle ${
                  isActive("/general/asset") ? "active" : ""
                }`}
                onClick={() => toggleMenu("addAsset")}
              >
                {!collapsed && (
                  <div className="submenu-label">
                    <span>Asset</span>
                    <span className="arrow">
                      {openMenus.addAsset ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </div>
                )}
              </div>
              {openMenus.addAsset && (
                <div className="submenu nested">
                  <Link
                    to="/general/addasset"
                    className={`submenu-item ${
                      isActive("/general/addasset") ? "active" : ""
                    }`}
                  >
                    AddAssets
                  </Link>
                  <Link
                    to="/general/listasset"
                    className={`submenu-item ${
                      isActive("/general/listasset") ? "active" : ""
                    }`}
                  >
                    List Assets
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
