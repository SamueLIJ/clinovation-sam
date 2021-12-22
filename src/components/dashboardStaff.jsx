// import Button from "react-bootstrap/Button";
import styled from "styled-components";
import logo from "../images/Logo 3.png";
import { Sidebar } from ".";
import { Card, Button, Row,Col, Pagination } from "react-bootstrap";
import totalPatient from "../icons/registered.png";
import brain from "../icons/brain.png";
import heartbeat from "../icons/heartbeat.png";
import pediatrics from "../icons/pediatrics.png";
import staffprofile from "../icons/staffProfile.png";
import nurseicon from "../icons/nurse-icon.png"
import { FaSearch } from "react-icons/fa";
import manicon from  "../icons/man.png";
import {FcClock} from "react-icons/fc";
import ward from "../icons/bed.png";
import {GiStethoscope} from "react-icons/gi"

const dashboardStaff = () => {
let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

  return (
    <>
      <Sidebar />
      <Wrapper>
        <div className="title">Welcome Staff, </div>
        <div className="cardstyle">
          <Card style={{ width: "12rem" }} className="kartu">
            <Card.Body>
              <img src={totalPatient} alt="" className="iconDashboard" />
              <Card.Title>Total</Card.Title>
              <Card.Text className="cardtext">20 Patients</Card.Text>
  
            </Card.Body>
          </Card>
          <Card style={{ width: "12rem" }} className="kartu">
            <Card.Body>
              <img src={brain} alt="" className="iconDashboard" />
              <Card.Title>Neurology</Card.Title>
              <Card.Text className="cardtext">10 Patients</Card.Text>
          
            </Card.Body>
          </Card>
          <Card style={{ width: "12rem" }} className="kartu">
            <Card.Body>
              <img src={heartbeat} alt="" className="iconDashboard" />
              <Card.Title>Cardiology</Card.Title>
              <Card.Text className="cardtext">10 Patients</Card.Text>
           
            </Card.Body>
          </Card>
          <Card style={{ width: "12rem" }} className="kartu">
            <Card.Body>
              <img src={pediatrics} alt="" className="iconDashboard" />
              <Card.Title>Pediatrics</Card.Title>
              <Card.Text className="cardtext">10 Patients</Card.Text>
            
            </Card.Body>
          </Card>
        </div>
        <br /> <br /> <br />
        <div className="title">Schedules</div>
        <div style={{ fontSize: "18px" }}>Today</div>
        <div className="cardstyle">
          <Card className="kartu2">
            <div className="DateSchedule">2 December 2021</div>
            <Card.Body>
              <Card>
                <Card.Body>
                  <div style={{ marginBottom: "10px" }}>Doctor Schedules</div>
                  <Card>
                    <Card.Body>
                      <img
                        src={staffprofile}
                        alt=""
                        className="iconDashboard2"
                      />
                      <span className="infoJadwal">dr. Morty</span>
                      <span className="infoJadwal">Neurology</span>
                      <span className="infoJadwal">12 AM</span>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <img
                        src={staffprofile}
                        alt=""
                        className="iconDashboard2"
                      />
                      <span className="infoJadwal">dr. Morty</span>
                      <span className="infoJadwal">Neurology</span>
                      <span className="infoJadwal">13 AM</span>
                    </Card.Body>
                  </Card>
                  <Card.Text className="cardtext">
                    {" "}<br/>
                    <div style={{ display: "flex" }}>
                    <Button variant="primary" className="showmore">Show more</Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
    
          <Card className="kartu2">
            <div className="DateSchedule">2 December 2021</div>
            <Card.Body>
              <Card>
                <Card.Body>
                  <div style={{ marginBottom: "10px" }}>Nurse Schedules</div>
                  <Card>
                    <Card.Body>
                      <img
                        src={nurseicon}
                        alt=""
                        className="iconDashboard2"
                      />
                      <span className="infoJadwal">Nurse Monty</span>
                      <span className="infoJadwal">Neurology</span>
                      <span className="infoJadwal">12 AM</span>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <img
                        src={nurseicon}
                        alt=""
                        className="iconDashboard2"
                      />
                      <span className="infoJadwal">Nurse Alex</span>
                      <span className="infoJadwal">Neurology</span>
                      <span className="infoJadwal">13 AM</span>
                    </Card.Body>
                  </Card>
                  <Card.Text className="cardtext">
                    {" "}<br/>
                    <div style={{ display: "flex" }}>
                    <Button variant="primary" className="showmore">Show more</Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </div>
        <br/>
        <br/>
        <br/>
        
        <div className="title2">
        <div className="title">Last Patient</div>
             <div class="row">
        <div class="col-md-5">
            <div class="input-group">
                <input class="form-control border-end-0 border" type="search" placeholder="search" id="example-search-input"/>
                <span class="input-group-append">
                    <button class="btn btn-outline-secondary bg-white border ms-n5" type="button">
                       <FaSearch style={{width:"15px", height:"15px"}}/>
                    </button>
                </span>
            </div>
        </div>
    </div></div>
 
      <Card className="kartu3">
            <Card.Body>
                      <img
                        src={manicon}
                        alt=""
                        className="iconDashboard2"
                      />
                      <span className="infoJadwal">Paul</span>
                      <span style={{marginRight:"0px", marginLeft:"10px"}}>
                          <FcClock className="icondashboard3"/>
                          <span className="infoJadwal" style={{marginLeft:"2px"}}>5 Dec / 12 PM</span>
                      </span>
                      <span style={{marginRight:"0px", marginLeft:"10px"}}>
                       <img
                        src={ward}
                        alt=""
                        className="iconDashboard"
                      />
                      <span className="infoJadwal" style={{marginLeft:"2px"}}>Neurology</span>
                      </span>

                       <span style={{marginRight:"0px", marginLeft:"10px"}}>
                       <GiStethoscope className="icondashboard3" />
                      <span className="infoJadwal" style={{marginLeft:"2px"}}>dr. Morty</span>
                      </span>
  
            </Card.Body>
          </Card>

           <Card className="kartu3">
            <Card.Body>
                      <img
                        src={manicon}
                        alt=""
                        className="iconDashboard2"
                      />
                      <span className="infoJadwal">Paul</span>
                      <span style={{marginRight:"0px", marginLeft:"10px"}}>
                          <FcClock className="icondashboard3"/>
                          <span className="infoJadwal" style={{marginLeft:"2px"}}>5 Dec / 12 PM</span>
                      </span>
                      <span style={{marginRight:"0px", marginLeft:"10px"}}>
                       <img
                        src={ward}
                        alt=""
                        className="iconDashboard"
                      />
                      <span className="infoJadwal" style={{marginLeft:"2px"}}>Neurology</span>
                      </span>

                       <span style={{marginRight:"0px", marginLeft:"10px"}}>
                       <GiStethoscope className="icondashboard3" />
                      <span className="infoJadwal" style={{marginLeft:"2px"}}>dr. Morty</span>
                      </span>
  
            </Card.Body>
          </Card>

          <div style={{ display: "flex", justifyContent: "center" }}>
                <Pagination>{items}</Pagination>
              <br />

            </div>

      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  font-family: "Mulish", sans-serif;
  position: absolute;
  background-color: white;

  .title2 {
    // display: flex;  
    
  }

  .icondashboard3{
    place-items: center;
    width: 28px;
    height: 28px;
  }

  .cardstyle {
    display: flex;
    padding-top: 30px;
  }
  .showmore{
   display: block; 
   margin: auto;
    background-color:#37B6FF;
  }
  .kartu {
    margin-right: 50px;
    height: 150px;
    background-color: #f7f7f7;
  }
  .kartu2 {
    margin-right: 50px;
    height: 450px;
    background-color: #f7f7f7;
    width: 30rem;
  }
   .kartu3 {
    margin: 30px 50px 20px 0px;
    height: 100px;
    background-color: #f7f7f7;
    width: 50rem;
  }
  .iconDashboard {
    height: 32px;
    width: 32px;
    margin-bottom: 13px;
  }
  .iconDashboard2 {
    height: 65px;
    width: 65px;
    margin-bottom: 1px;
  }
  
  .cardtext {
    font-size: 14px;
    font-weight: 100;
  }
  .title {
    font-weight: 500;
    font-size: 30px;
  }
  .DateSchedule {
    text-align: center;
    padding-top: 10px;
  }
  .infoJadwal {
    margin: 10px;
  }
`;

export default dashboardStaff;
