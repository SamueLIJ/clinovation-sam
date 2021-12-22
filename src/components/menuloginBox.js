// import Button from "react-bootstrap/Button";
import styled from "styled-components";
import iconDoctor from "../icons/doctor.png";
import iconNurse from "../icons/nurse.png";
import iconStaff from "../icons/healthCare.png";
import doctorImage from "../images/doctor.jpg";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/Logo 3.png";
import { Link } from "react-router-dom";

const box = () => {
  return (
    <Wrapper>
      <img src={logo} alt="Clinovation " className="logo" />

      <Container>
        <Row>
          <Col md={6} className="gapAtas">
            <Row style={{ width: "450px" }}>
              <Col md={6} style={{ marginRight: "-10px" }}>
                <Link to={"/dashboardStaff"}>
                  {" "}
                  <button className="buttonA">
                    {" "}
                    <img
                      src={iconStaff}
                      alt="Medical Staff"
                      className="iconTombol"
                    />
                    <br />
                    <p>I am</p> <h3>Medical Staff</h3>
                  </button>
                </Link>
              </Col>
              <Col md={6}>
                <button className="buttonA">
                  {" "}
                  <img src={iconDoctor} alt="Doctor" className="iconTombol" />
                  <br /> <p>I am</p> <h3>Doctor</h3>
                </button>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={2}></Col>

              <Col md={4}>
                <button className="buttonA">
                  {" "}
                  <img src={iconNurse} alt="Nurse" className="iconTombol" />
                  <br />
                  <p>I Am</p>
                  <h3>Nurse</h3>
                </button>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Col md={6}>
              <img src={doctorImage} alt="" />
            </Col>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  background-color: #f8f8f6;
  font-family: "Mulish", sans-serif;

  .buttonA {
    height: 200px;
    width: 200px;
    color: black;
    background-color: #f7f7f7;
    border: 0.5px solid #dfe0eb;
  }
  .iconTombol {
    height: 80px;
    width: 80px;
    margin-left: 50px;
  }
  .logo {
    height: 64px;
    width: 70px;
  }
  .gapAtas {
    margin-top: 5em;
  }
  h3,
  p {
    text-align: left;
  }
`;

export default box;
