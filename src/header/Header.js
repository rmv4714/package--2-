import React from "react";
import "./Header.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function Header() {
  return (
    <div className="main">
      <div className="container-header">
        <ul className="stepper">
          <li className="stepper__item complete">
            <div style={{ display: "flex" }}>
              <div style={{ color: "#fff" }}>Status 1</div>
              <div style={{ marginLeft: "90px" }}>
                <CheckCircleRoundedIcon style={{ color: "#fff" }} />
              </div>
            </div>
          </li>
          <li className="stepper__item current">
            <div style={{ display: "flex" }}>
              <div>New</div>
              <div style={{ marginLeft: "120px" }}>
                <RadioButtonUncheckedIcon />
              </div>
            </div>
          </li>
          <li className="stepper__item">
            <div style={{ display: "flex" }}>
              <div>Working</div>
              <div style={{ marginLeft: "90px" }}>
                <RadioButtonUncheckedIcon />
              </div>
            </div>
          </li>
          <li className="stepper__item">
            <div style={{ display: "flex" }}>
              <div>Nurturing</div>
              <div style={{ marginLeft: "90px" }}>
                <RadioButtonUncheckedIcon />
              </div>
            </div>
          </li>
          <li className="stepper__item">
            <div style={{ display: "flex" }}>
              <div>Converted</div>
              <div style={{ marginLeft: "90px" }}>
                <RadioButtonUncheckedIcon />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
