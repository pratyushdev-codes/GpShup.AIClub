import React from "react";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
        style={{
          color: "grey",
          margin: "0 auto",
          borderRadius: "40px",
          maxWidth: "61%",
          height: "55px",
          marginTop: "20px",
          fontFamily:
            "General Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "18px",
          lineHeight: "28px",
          background: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{ color: "green", fontWeight: "bold" }}
          >
            Soil Sync
          </a>
          &nbsp; &nbsp;
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-1">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "#12A957" }}
                >
                  Home
                </a>
              </li>

              <li className="nav-item mx-2">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "Grey" }}
                >
                  About
                </a>
              </li>

              <li className="nav-item mx-2">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "Grey" }}
                >
                  Weather
                </a>
              </li>

              <li className="nav-item mx-2">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "Grey" }}
                >
                  Analytics{" "}
                </a>
              </li>

              <li className="nav-item mx-2">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "Grey" }}
                >
                  Contact{" "}
                </a>
              </li>

              <li className="nav-item mx-2">
                <a
                  href="https://soilsync-helpbot.netlify.app/"
                  style={{ textDecoration: "none" }}
                >
                  <button
                    type="button"
                    className="btn btn-success"
                    style={{
                      marginTop: "3px",
                      borderRadius: "20px",
                      backgroundColor: "#12A957",
                      borderColor: "white",
                      color: "white",
                      fontFamily:
                        "General Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
                    Help Assistant
                  </button>
                </a>
              </li>

              <li className="nav-item mx-2"></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
