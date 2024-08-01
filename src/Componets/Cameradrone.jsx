import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Theamcontext } from "../Context/Theamcontext";
import { IoIosArrowForward } from "react-icons/io";
import { FiAlertCircle } from "react-icons/fi";

// src={light=="light"?"https://dji-official-fe.djicdn.com/dps/dd80d4f36df9091f5ebcebd5fe864399.svg":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAALCAAyADIBAREA/8QAHAABAQACAgMAAAAAAAAAAAAAAAcBBQQIAgMG/8QANBAAAQIEAwYEBAYDAAAAAAAAAQIEAAMFEQYh8AcSMUFhoVFxgcEUFiKRCBMVIzKxJNHx/9oACAEBAAA/AOz3btr2jxUpKElSiEpAuScgLZ+ntxiZPtsFOcVGcwwZRavixzJVuTZlNlWbIV4GcrL7XHWPRN2tPKOBNxlgTEVEY3+p4lKXUmWPFZRmB94o9Dq9PrtLkVGjvJL1jPF5c6SreSrxHn4g2PlHO799e8L9e8Z4atr25xJ9q01zivF1H2dMXMxqzdyFVGtz5St1YZpVYSgeW+rI9LcriNXgpFXxrNT8ovvlTZ1SnBbskU+Wn8+pGWr6llRvuoJHUnO987WsgKCgQLKyItkQeWv6iOPmEvZbtLpT2jgN8KYpchi9ZpylNnih+1NQngkKtYgWGR5WtZPPjrXXlC+rw1rXnErpig0/EhXJTrJb7D7eY2J4KSiZZYHrnaKYxZtmDSW1YNpLZtLFkSZMsIQkXvkkZDMk+vhHI1rXaJX+IZQnYdw7T5Vy+e19lLbJAud4KJJHkP7iqHMq8zrXpD79oa1rzifbWMKVGqopuIsKrTLxVQlqnNAr+LmWR+43V0UOHXLK943mz/F7HGWFmdZaf45m3RPbzVWXInJNly1X8Dz5gjlG9cvGzVtOcOHEqXIkoMyYtSxZKQLknoANCJRgOS82j4vkY+qspbegMBMlYeZLFlLud1bpY5E2sB5W4XNf4a1rhC0O/fXvGI6oYhwg2c7ZceM2uApWKAmdIdgfq/wHw/5sveVYXG+FLJ8rdY0G0bB6aVhB65VsplUBRVLlJqHzH8WZKlLAylb31E5jpe/KO4lIYSaXSmTBqgS27SQiRLSMt1KEhI/qOXw1bXtC3TtDv3/77w1469+ES3bZsop+PKRPdsWbRGJ5SUBu6mqUgTEpVcy1lJzBFwCRcXtHy+yrYkyZ4ge17FWG6awKVSv06lyncx0hspH8pilKUQok2sDcCL1zJPHWukO3bXtD07QPP1gecNdoCA/1AcvSMDhH/9k="}
function Cameradrone() {
  const { light } = useContext(Theamcontext);
  return (
    <div className="container-fliud App-vice">
      <div className="container">
        <div className="row overflow-hidden" style={{height:"130px"}}>
          <div className="col-12">
            <div className="row drones-imgs-camera" style={{flexWrap:"nowrap"}}>
              <div className="col-3 col-xl-1">
                <Link
                  to="/Aerial"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textDecoration: "none",
                    backgroundColor: light == "light" ? "white" : "black",
                    color: light == "light" ? "black" : "white",
                  }}
                >
                  <img
                    src="https://dji-official-fe.djicdn.com/dps/3b7953435e791d6a56253d87584e34cf.png"
                    className="drone-nav-img"
                  ></img>
                  <p className="drone-nav-p">DJI Mavic</p>
                </Link>
              </div>
              <div className="col-3 col-xl-1">
                <Link
                  to="/Aerial"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textDecoration: "none",
                    backgroundColor: light == "light" ? "white" : "black",
                    color: light == "light" ? "black" : "white",
                  }}
                >
                  <img
                    src="https://dji-official-fe.djicdn.com/dps/77738ff32f7a228fc58b4f401261e481.png"
                    className="drone-nav-img"
                  ></img>
                  <p className="drone-nav-p">DJI Air</p>
                </Link>
              </div>
              <div className="col-3 col-xl-1">
                <Link
                  to="/Aerial"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textDecoration: "none",
                    backgroundColor: light == "light" ? "white" : "black",
                    color: light == "light" ? "black" : "white",
                  }}
                >
                  <img
                    src="https://dji-official-fe.djicdn.com/dps/3b2958e69dfc377784a5a995c8c16c06.png"
                    className="drone-nav-img"
                  ></img>
                  <p className="drone-nav-p">DJI Mini</p>
                </Link>
              </div>
              <div className="col-3 col-xl-1">
                <Link
                  to="/Aerial"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textDecoration: "none",
                    backgroundColor: light == "light" ? "white" : "black",
                    color: light == "light" ? "black" : "white",
                  }}
                >
                  <img
                    src="https://dji-official-fe.djicdn.com/dps/62a29804a802d6a3e54c3e43b30399e9.png"
                    className="drone-nav-img"
                  ></img>
                  <p className="drone-nav-p">DJI Avata 2</p>
                </Link>
              </div>
              <div className="col-3 col-xl-1">
                <Link
                  to="/Aerial"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textDecoration: "none",
                    backgroundColor: light == "light" ? "white" : "black",
                    color: light == "light" ? "black" : "white",
                  }}
                >
                  <img
                    src="https://dji-official-fe.djicdn.com/dps/d13ba498aecd93533f69bcd1500458af.png"
                    className="drone-nav-img"
                  ></img>
                  <p className="drone-nav-p">DJI Inspire</p>
                </Link>
              </div>
              <div className="col-3 col-xl-1">
                <Link
                  to="/Aerial"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textDecoration: "none",
                    backgroundColor: light == "light" ? "white" : "black",
                    color: light == "light" ? "black" : "white",
                  }}
                >
                  <img
                    src="https://dji-official-fe.djicdn.com/dps/445acaa272ac55184d736f9518c50b3c.png"
                    className="drone-nav-img"
                  ></img>
                  <p className="drone-nav-p">DJI FPV</p>
                </Link>
              </div>
              <div className="col-3 col-xl-1">
                <Link
                  to="/Aerial"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textDecoration: "none",
                    backgroundColor: light == "light" ? "white" : "black",
                    color: light == "light" ? "black" : "white",
                  }}
                >
                  <img
                    src="https://dji-official-fe.djicdn.com/dps/b429552c65fa90e612204031c752b2e0.png"
                    className="drone-nav-img"
                  ></img>
                  <p className="drone-nav-p">RC</p>
                </Link>
              </div>
              <div className="col-3 col-xl-1">
                <Link
                  to="/Aerial"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textDecoration: "none",
                    backgroundColor: light == "light" ? "white" : "black",
                    color: light == "light" ? "black" : "white",
                  }}
                >
                  <img
                    src="https://dji-official-fe.djicdn.com/dps/2fb13926f6e7b4b0cbeb01fbcce28320.png"
                    className="drone-nav-img"
                  ></img>
                  <p className="drone-nav-p">DJI Power</p>
                </Link>
              </div>
              <div className="col-3 col-xl-1">
                <Link
                  to="/Aerial"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textDecoration: "none",
                    backgroundColor: light == "light" ? "white" : "black",
                    color: light == "light" ? "black" : "white",
                  }}
                >
                  <img
                    src="https://dji-official-fe.djicdn.com/dps/dd80d4f36df9091f5ebcebd5fe864399.svg"
                    className="drone-nav-img"
                  ></img>
                  <p className="drone-nav-p">Take a quiz</p>
                </Link>
                {/* https://i.pinimg.com/736x/f9/f4/09/f9f409cb18a5766c92da45ff90d7786a.jpg */}
              </div>
              <div className="col-3 col-xl-1">
                <Link
                  to="/Aerial"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textDecoration: "none",
                    backgroundColor: light == "light" ? "white" : "black",
                    color: light == "light" ? "black" : "white",
                  }}
                >
                  <img
                    src="https://dji-official-fe.djicdn.com/dps/ab660f7a8c5a5ab1b776f800c8cbc6ee.svg"
                    className="drone-nav-img"
                  ></img>
                  <p className="drone-nav-p text-center">
                    Consumer Drones Comparison
                  </p>
                </Link>
              </div>
              <div className="col-3 col-xl-1">
                <Link
                  to="/Aerial"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textDecoration: "none",
                    backgroundColor: light == "light" ? "white" : "black",
                    color: light == "light" ? "black" : "white",
                  }}
                >
                  <img
                    src="https://dji-official-fe.djicdn.com/dps/42af7c7d7cc7b425c30b5ec52859318c.svg"
                    className="drone-nav-img"
                  ></img>
                  <p className="drone-nav-p">Accessories</p>
                </Link>
              </div>
              <div className="col-3 col-xl-1">
                <Link
                  to="/Aerial"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textDecoration: "none",
                    backgroundColor: light == "light" ? "white" : "black",
                    color: light == "light" ? "black" : "white",
                  }}
                >
                  <img
                    src="https://dji-official-fe.djicdn.com/dps/a46f9b5e0f5b88cb1e1e4a9ae10a42bb.svg"
                    className="drone-nav-img"
                  ></img>
                  <p className="drone-nav-p">Shop Now</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container cameradronenames">
        <h1>Camera Drones</h1>
        <p>
          Capture your moments from above with <br />a mini drone, FPV, or
          professional aerial camera.
        </p>
      </div>

      <div className="container-fliud">
        <div className="row m-0 ove">
          <div className="col-12 camera-img-main">
       <div className="w-100 overflow-hidden">
       <img
              src="https://dji-official-fe.djicdn.com/dps/cbe372f1d658e3acef76150c40bb8ef2@origin.jpg"
              className="camera-main-img"
            ></img>
       </div>
            <div className="camera-img-vice">
              <p>FPV Drone</p>
              <h1>DJI AVATA 2</h1>
              <div>All Thrills, No Frills</div>
              <div className="camera-main-link">
                {" "}
                <div className="camera-links me-2 ms-xl-3 me-xl-3">
                  <a href="#" className="me-2 camera-link-vice">
                    Learn More
                  </a>
                  <IoIosArrowForward />
                </div>
                <div className="camera-links me-xl-3">
                  <a href="#" className="me-2 camera-link-vice">
                    Where to Buy
                  </a>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fliud" style={{ marginTop: "120px" }}>
        <div className="row m-0 g-4">
          <div className="col-12 col-xl-6">
            <div className="camera-drone-main-wrapper">
              <img
                src="https://dji-official-fe.djicdn.com/dps/c2cf5f3b8c738ee773a4035a4da36214.jpg"
                className="camera-vice-img"
              ></img>
              <div className="camera-drone-vice-wrapper">
                <p>Multiple Focal Length Triple-Lens Flagship Camera Drone</p>
                <img src="https://dji-official-fe.djicdn.com/dps/0acd33245a3720f1e8d67c61dc2c92b6.svg" className="img-fluid"></img>
                <h3>Inspiration in Focus</h3>
                <div className="camera-main-wapper-link">
                  {" "}
                  <div className="camera-wapper-links ms-xl-3 me-xl-3">
                    <a href="#" className="me-xl-2 camera-link-wrapper-vice">
                      Learn More
                    </a>
                    <IoIosArrowForward />
                  </div>
                  <div className="camera-wapper-links me-xl-3">
                    <a href="#" className="me-xl-2 camera-link-wrapper-vice">
                      Where to Buy
                    </a>
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="camera-drone-main-wrapper">
              <img
                src="https://dji-official-fe.djicdn.com/dps/112f283ac1133db3cc65f68c110de488.jpg"
                className="camera-vice-img"
              ></img>
              <div className="camera-drone-vice-wrapper">
                <p>All-In-One Mini Drone</p>
                <img src="https://dji-official-fe.djicdn.com/dps/a79ecfc2cb499dfb58543215d05a6dd6.svg" className="img-fluid"></img>
                <h3>Mini to the Max</h3>
                <div className="camera-main-wapper-link">
                  {" "}
                  <div className="camera-wapper-links ms-xl-3 me-xl-3">
                    <a href="#" className="me-xl-2 camera-link-wrapper-vice">
                      Learn More
                    </a>
                    <IoIosArrowForward />
                  </div>
                  <div className="camera-wapper-links me-xl-3">
                    <a href="#" className="me-xl-2 camera-link-wrapper-vice">
                      Where to Buy
                    </a>
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="camera-drone-main-wrapper">
              <img
                src="https://dji-official-fe.djicdn.com/dps/d1bebf60d0abbb53e2bb170758dcf3d0.jpg"
                className="camera-vice-img"
              ></img>
              <div className="camera-drone-vice-wrapper">
                <p>All-In-One Mini Drone</p>
                <img
                  src="https://dji-official-fe.djicdn.com/dps/4d6f4050a81e7431ef932a72a405939d.svg" className="img-fluid"
                  style={{ width: "60%" }}
                ></img>
                <h3>Mini to the Max</h3>
                <div className="camera-main-wapper-link">
                  {" "}
                  <div className="camera-wapper-links ms-xl-3 me-xl-3">
                    <a href="#" className="me-xl-2 camera-link-wrapper-vice">
                      Learn More
                    </a>
                    <IoIosArrowForward />
                  </div>
                  <div className="camera-wapper-links me-3">
                    <a href="#" className="me-xl-2 camera-link-wrapper-vice">
                      Where to Buy
                    </a>
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="camera-drone-main-wrapper">
              <img
                src="https://dji-official-fe.djicdn.com/dps/ff88f00afb0937e7c6fc72cf7f1b7fa5.jpg"
                className="camera-vice-img"
              ></img>
              <div className="camera-drone-vice-wrapper">
                <p>All-In-One Mini Drone</p>
                <img
                  src="https://dji-official-fe.djicdn.com/dps/ebbe17cbd54a7d563a856889c5f14627.svg" className="img-fluid"
                  style={{ width: "90%" }}
                ></img>
                <h3>Mini to the Max</h3>
                <div className="camera-main-wapper-link">
                  {" "}
                  <div className="camera-wapper-links ms-xl-3 me-xl-3">
                    <a href="#" className="me-xl-2 camera-link-wrapper-vice">
                      Learn More
                    </a>
                    <IoIosArrowForward />
                  </div>
                  <div className="camera-wapper-links me-xl-3">
                    <a href="#" className="me-xl-2 camera-link-wrapper-vice">
                      Where to Buy
                    </a>
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container drone-is-right-for-you">
        <div className="row drone-is-right-for-you-row">
          <div className="col-12 text-center drone-is-right-for-you-colno-1">
            <h2 className="drone-is-right-for-you-colno-1-h2">
              Which camera drone is right for you?
            </h2>
          </div>
          <div className="col-12">
            <div className="row">
              <nav className="col-12">
                <div
                  className="nav nav-tabs-drone-detaile"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-tabs-links-drone-detaile"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Aerial Imaging
                  </button>
                  <button
                    className="nav-tabs-links-drone-detaile"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Immersive Flight
                  </button>
                </div>
              </nav>
              <div className="tab-content col-12" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="row">
                    <div
                      className="col-6 col-xl-3 text-center"
                      style={{ borderBottom: "2px solid #f0f0f0" }}
                    >
                      <img
                        src="https://dji-official-fe.djicdn.com/cms/uploads/ae5d8b9987be8d5ecdeb5d502a1e887c.png"
                        className="img-fluid"
                        style={{ width: "90%" }}
                      ></img>
                      <p className="drone-search-p">Flagship</p>
                      <h4 style={{ marginBottom: "40px" }}>DJI Mavic 3 Pro</h4>
                      <button
                        style={{
                          fontSize: "14px",
                          backgroundColor: "#2490E3",
                          color: "white",
                          padding: "6px 12px",
                          border: "none",
                          borderRadius: "20px",
                          display: "block",
                          margin: "auto",
                        }}
                      >
                        Where to Buy
                      </button>
                      <div style={{ marginTop: "25px", marginBottom: "60px" }}>
                        <Link>Learn More</Link>
                      </div>
                    </div>
                    <div
                      className="col-6 col-xl-3 text-center"
                      style={{ borderBottom: "2px solid #f0f0f0" }}
                    >
                      <img
                        src="https://dji-official-fe.djicdn.com/cms/uploads/a656cc79725b55d02616072360469ffd.png"
                        className="img-fluid"
                        style={{ width: "90%" }}
                      ></img>
                      <p className="drone-search-p">Advanced</p>
                      <h4 style={{ marginBottom: "40px" }}>DJI Air 3</h4>
                      <button
                        style={{
                          fontSize: "14px",
                          backgroundColor: "#2490E3",
                          color: "white",
                          padding: "6px 12px",
                          border: "none",
                          borderRadius: "20px",
                          display: "block",
                          margin: "auto",
                        }}
                      >
                        Where to Buy
                      </button>
                      <div style={{ marginTop: "25px", marginBottom: "60px" }}>
                        <Link>Learn More</Link>
                      </div>
                    </div>
                    <div
                      className="col-3 d-none d-xl-block text-center"
                      style={{ borderBottom: "2px solid #f0f0f0" }}
                    >
                      <img
                        src="https://dji-official-fe.djicdn.com/cms/uploads/892e39b4b76dc5a83b267ed12ce69b97.png"
                        className="img-fluid"
                        style={{ width: "90%" }}
                      ></img>
                      <p className="drone-search-p">Entry</p>
                      <h4 style={{ marginBottom: "40px" }}>DJI Mini 4 Pro</h4>
                      <button
                        style={{
                          fontSize: "14px",
                          backgroundColor: "#2490E3",
                          color: "white",
                          padding: "6px 12px",
                          border: "none",
                          borderRadius: "20px",
                          display: "block",
                          margin: "auto",
                        }}
                      >
                        Where to Buy
                      </button>
                      <div style={{ marginTop: "25px", marginBottom: "60px" }}>
                        <Link>Learn More</Link>
                      </div>
                    </div>
                    <div
                      className="col-3 d-none d-xl-block text-center"
                      style={{ borderBottom: "2px solid #f0f0f0" }}
                    >
                      <img
                        src="https://dji-official-fe.djicdn.com/cms/uploads/0e65b98eaee5cad6f74196e9594b99cd.png"
                        className="img-fluid"
                        style={{ width: "90%" }}
                      ></img>
                      <p className="drone-search-p">Entry</p>
                      <h4 style={{ marginBottom: "40px" }}>DJI Mini 3</h4>
                      <button
                        style={{
                          fontSize: "14px",
                          backgroundColor: "#2490E3",
                          color: "white",
                          padding: "6px 12px",
                          border: "none",
                          borderRadius: "20px",
                          display: "block",
                          margin: "auto",
                        }}
                      >
                        Where to Buy
                      </button>
                      <div style={{ marginTop: "25px", marginBottom: "60px" }}>
                        <Link>Learn More</Link>
                      </div>
                    </div>

                    <div className="col-6 col-xl-3 text-center mt-5">
                      <h1 style={{ fontSize: "40px", marginBottom: "0px" }}>
                        958 g
                      </h1>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Takeoff Weight
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <h1 style={{ fontSize: "40px", marginBottom: "0px" }}>
                        720 g
                      </h1>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Takeoff Weight
                      </p>
                    </div>
                    <div className="col-3 d-none d-xl-block  text-center mt-5">
                      <h1 style={{ fontSize: "40px", marginBottom: "0px" }}>
                        * 249 g
                      </h1>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Takeoff Weight
                      </p>
                    </div>
                    <div className="col-3 d-none d-xl-block text-center mt-5">
                      <h1 style={{ fontSize: "40px", marginBottom: "0px" }}>
                        * 249 g
                      </h1>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Takeoff Weight
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 d-none d-xl-block text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/f9127d27145b69a9c196c225c91e4e32.svg"
                        className="img-fluid"
                      ></img>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        43 mins Max Flight Time
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/f9127d27145b69a9c196c225c91e4e32.svg"
                        className="img-fluid"
                      ></img>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        46-Min Max Flight Time
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/f9127d27145b69a9c196c225c91e4e32.svg"
                        className="img-fluid"
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        34/45-Min Max Flight Time
                      </div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Depending on the Choice of Battery
                      </p>
                    </div>
                    <div className="col-3 d-none d-xl-block text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/f9127d27145b69a9c196c225c91e4e32.svg"
                        className="img-fluid"
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        38/51-Min Max Flight Time
                      </div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Depending on the Choice of Battery
                      </p>
                    </div>
                    <div className="col-3 d-none d-xl-block text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/622b35c1bd89ae5f7d1c9d71bcc89027.png"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        4/3 CMOS Hasselblad Camera
                      </div>
                      <p style={{ fontSize: "14px", marginBottom: "0px" }}>
                        1/1.3-inch CMOS Medium Tele Camera
                      </p>
                      <p style={{ fontSize: "14px" }}>
                        1/2-inch CMOS Tele Camera
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/e6d69d8526ae168721a188e57bc0ede9.svg"
                        className="img-fluid"
                        style={{ width: "15%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        1/1.3-inch CMOS Wide-Angle Camera
                      </div>
                      <p style={{ fontSize: "14px" }}>
                        1/1.3-inch CMOS Medium-Tele Camera
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/2174e1eac98cc8a86bfea6bbfb13e155.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        1/1.3-inch CMOS Wide-Angle Camera
                      </div>
                    </div>
                    <div className="col-3 d-none d-xl-block text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/2174e1eac98cc8a86bfea6bbfb13e155.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>1/1.3-inch CMOS</div>
                    </div>

                    <div className="col-3 d-none d-xl-block text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/34ce18b21920b3b32b9a1d420819e9d6.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>5.1K/50fps</div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Max Video Resolution
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/44f942e54c7d597c6c6475ae77aba5e7.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        Wide-Angle/Medium Tele Camera: <br />
                        4K/60fps HDR <br />
                        4K/100fps
                      </div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Max Video Resolution
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/44f942e54c7d597c6c6475ae77aba5e7.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        4K/60fps HDR <br />
                        4K/100fps
                      </div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Max Video Resolution
                      </p>
                    </div>
                    <div className="col-3 d-none d-xl-block text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/44f942e54c7d597c6c6475ae77aba5e7.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>4K/30fps</div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Max Video Resolution
                      </p>
                    </div>

                    <div className="col-3 d-none d-xl-block text-center mt-5">
                      <h1 style={{ fontSize: "40px", marginBottom: "0px" }}>
                        48 MP
                      </h1>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Max Photo Resolution
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <h1 style={{ fontSize: "40px", marginBottom: "0px" }}>
                        48 MP
                      </h1>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Max Photo Resolution
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <h1 style={{ fontSize: "40px", marginBottom: "0px" }}>
                        48 MP
                      </h1>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Max Photo Resolution
                      </p>
                    </div>
                    <div className="col-3 d-none d-xl-block text-center mt-5">
                      <h1 style={{ fontSize: "40px", marginBottom: "0px" }}>
                        48 MP
                      </h1>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Max Photo Resolution
                      </p>
                    </div>

                    <div className="col-3 d-none d-xl-block text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/491a0c65c81c35787d8bcbe54ded59a1.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        Omnidirectional Obstacle Sensing <FiAlertCircle />
                      </div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Forward, Backward, Upward, Downward, <br /> Left, Right
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/491a0c65c81c35787d8bcbe54ded59a1.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        Omnidirectional Obstacle Sensing <FiAlertCircle />
                      </div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Forward, Backward, Upward, Downward, <br /> Left, Right
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/491a0c65c81c35787d8bcbe54ded59a1.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        Omnidirectional Obstacle Sensing <FiAlertCircle />
                      </div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Forward, Backward, Upward, Downward, <br /> Left, Right
                      </p>
                    </div>
                    <div className="col-3 d-none d-xl-block text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/491a0c65c81c35787d8bcbe54ded59a1.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        Omnidirectional Obstacle Sensing <FiAlertCircle />
                      </div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Forward, Backward, Upward, Downward, <br /> Left, Right
                      </p>
                    </div>

                    <div className="col-3 d-none d-xl-block text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/3d0d77b212222ab4f20219cc95ca6d20.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        DJI O3+ HD Digital Video Transmission
                      </div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Up to 15 km Transmission Distance <br />
                        1080p/60fps Live Feed
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/e16f6ac22cae133b96cd821630616f3b.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        DJI O4: Up to 20 km
                      </div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        1080p/60fps Live Feed
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/e16f6ac22cae133b96cd821630616f3b.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        DJI O4: Up to 20 km
                      </div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        1080p/60fps Live Feed
                      </p>
                    </div>
                    <div className="col-3 d-none d-xl-block text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/be3175b345d0203f023a220119cf21f9.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        DJI O2: Up to 10 km
                      </div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        720p/30fps Live Feed
                      </p>
                    </div>

                    <div
                      className="col-12 d-flex justify-content-center mt-5"
                      style={{ gap: "20px" }}
                    >
                      <Link to="" >
                        <button className="nav-btns">
                          Compare DJI Camera Drones{" "}
                          <i className="bi bi-chevron-right"></i>
                        </button>
                      </Link>
                      <Link to="">
                        <button className="nav-btns">
                          Shop DJI Camera Drone{" "}
                          <i className="bi bi-chevron-right"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="row d-flex justify-content-center">
                    <div className="col-6 col-xl-3 text-center">
                      <img
                        src="https://dji-official-fe.djicdn.com/cms/uploads/6e82e273e1d05044bc6f02a278df51eb.png"
                        className="img-fluid"
                        style={{ width: "90%" }}
                      ></img>
                      <h4 style={{ marginBottom: "40px" }}>DJI Mavic 3 Pro</h4>
                      <button
                        style={{
                          fontSize: "14px",
                          backgroundColor: "#2490E3",
                          color: "white",
                          padding: "6px 12px",
                          border: "none",
                          borderRadius: "20px",
                          display: "block",
                          margin: "auto",
                        }}
                      >
                        Where to Buy
                      </button>
                      <div style={{ marginTop: "25px" }}>
                        <Link>Learn More</Link>
                      </div>
                    </div>
                    <div className="col-6 col-xl-3 text-center">
                      <img
                        src="https://dji-official-fe.djicdn.com/cms/uploads/7a4013b046ea008a2beb1f5f6ca74253.png"
                        className="img-fluid"
                        style={{ width: "90%" }}
                      ></img>
                      <h4 style={{ marginBottom: "40px" }}>DJI Mavic 3 Pro</h4>
                      <button
                        style={{
                          fontSize: "14px",
                          backgroundColor: "#2490E3",
                          color: "white",
                          padding: "6px 12px",
                          border: "none",
                          borderRadius: "20px",
                          display: "block",
                          margin: "auto",
                        }}
                      >
                        Where to Buy
                      </button>
                      <div style={{ marginTop: "25px" }}>
                        <Link>Learn More</Link>
                      </div>
                    </div>
                    <div className="col-3 d-none d-xl-block text-center">
                      <img
                        src="https://dji-official-fe.djicdn.com/cms/uploads/c2d80cfc937aef441cf77ec385663966.jpg"
                        className="img-fluid"
                        style={{ width: "90%" }}
                      ></img>
                      <h4 style={{ marginBottom: "40px" }}>DJI Mavic 3 Pro</h4>
                      <button
                        style={{
                          fontSize: "14px",
                          backgroundColor: "#2490E3",
                          color: "white",
                          padding: "6px 12px",
                          border: "none",
                          borderRadius: "20px",
                          display: "block",
                          margin: "auto",
                        }}
                      >
                        Where to Buy
                      </button>
                      <div style={{ marginTop: "25px" }}>
                        <Link>Learn More</Link>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <h1 style={{ fontSize: "40px", marginBottom: "0px" }}>
                        377 g
                      </h1>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Takeoff Weight
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <h1 style={{ fontSize: "40px", marginBottom: "0px" }}>
                        410 g
                      </h1>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Takeoff Weight
                      </p>
                    </div>
                    <div className="col-3 d-none d-xl-block text-center mt-5">
                      <h1 style={{ fontSize: "40px", marginBottom: "0px" }}>
                        795 g
                      </h1>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Takeoff Weight
                      </p>
                    </div>
                  </div>

                  <div className="row d-flex justify-content-center">
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/6d02680909fb31b59036cc5b430ded31.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        Built-In Propeller Guard
                      </div>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/6d02680909fb31b59036cc5b430ded31.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        Built-In Propeller Guard
                      </div>
                    </div>
                    <div className="col-3 d-none d-xl-block text-center mt-5">
                      <h1 style={{ fontSize: "40px", marginBottom: "0px" }}>
                        -
                      </h1>
                    </div>
                  </div>

                  <div className="row d-flex justify-content-center">
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/f9127d27145b69a9c196c225c91e4e32.svg"
                        className="img-fluid"
                      ></img>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        23-Min Max Flight Time
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/f9127d27145b69a9c196c225c91e4e32.svg"
                        className="img-fluid"
                      ></img>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        18-Min Max Flight Time
                      </p>
                    </div>
                    <div className="col-3 d-none d-xl-block text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/f9127d27145b69a9c196c225c91e4e32.svg"
                        className="img-fluid"
                      ></img>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        16-Min Max Flight Time
                      </p>
                    </div>
                  </div>

                  <div className="row d-flex justify-content-center">
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/3f33a0bdf1d06c34852e7c24e1cac54b.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        DJI O4+ Flagship Digital Video Transmission
                      </div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        13km Max Transmission Distance <br />
                        1080p/60fps Live Feed
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/a2bbd84a8991927d5fc97dabc6fc7ada.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        DJI O3+ HD Digital Video Transmission
                      </div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        10km Max Transmission Distance
                      </p>
                    </div>
                    <div className="col-3 d-none d-xl-block text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/a2bbd84a8991927d5fc97dabc6fc7ada.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>
                        DJI O3 HD Digital Video Transmission
                      </div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        10km Max Transmission Distance
                      </p>
                    </div>
                  </div>

                  <div className="row d-flex justify-content-center">
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/f2296b01acd3cd8942f15a72c17ab0c8.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>1/1.3-inch CMOS</div>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/f2296b01acd3cd8942f15a72c17ab0c8.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>1/1.7-inch CMOS</div>
                    </div>
                    <div className="col-3 d-none d-xl-block text-center mt-5">
                      <img
                        src="https://dji-official-fe.djicdn.com/dps/f2296b01acd3cd8942f15a72c17ab0c8.svg"
                        className="img-fluid"
                        style={{ width: "17%" }}
                      ></img>
                      <div style={{ fontSize: "14px" }}>1/2.3-inch CMOS</div>
                    </div>
                  </div>

                  <div className="row d-flex justify-content-center">
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <h1 style={{ fontSize: "40px", marginBottom: "0px" }}>
                        155°
                      </h1>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Ultra-Wide FOV
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-5">
                      <h1 style={{ fontSize: "40px", marginBottom: "0px" }}>
                        155°
                      </h1>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Ultra-Wide FOV
                      </p>
                    </div>
                    <div className="col-3 d-none d-xl-block text-center mt-5">
                      <h1 style={{ fontSize: "40px", marginBottom: "0px" }}>
                        150°
                      </h1>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Ultra-Wide FOV
                      </p>
                    </div>
                  </div>

                  <div className="row d-flex justify-content-center">
                    <div className="col-6 col-xl-3 text-center mt-4">
                      <div style={{ fontSize: "14px" }}>
                        HorizonSteady and RockSteady 3.0+
                      </div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Electronic Image Stabilization
                      </p>
                    </div>
                    <div className="col-6 col-xl-3 text-center mt-4">
                      <div style={{ fontSize: "14px" }}>
                        HorizonSteady and RockSteady
                      </div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Electronic Image Stabilization
                      </p>
                    </div>
                    <div className="col-3 d-none d-xl-block text-center mt-4">
                      <div style={{ fontSize: "14px" }}>RockSteady</div>
                      <p style={{ color: "#8C8C8C", fontSize: "14px" }}>
                        Electronic Image Stabilization
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-12 d-flex justify-content-center mt-5"
                    style={{ gap: "20px" }}
                  >
                    <Link to="">
                      <button className="nav-btns">
                        Buy Avata 2 <i className="bi bi-chevron-right"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fliud p-0 p-xl-5 pt-5"
        style={{ backgroundColor: "#F5F5F5" }}
      >
     <div className="container">
     <div className="row">
          <h1
            className="col-12 text-center mb-4"
            style={{ fontSize: "40px", fontWeight: "500" }}
          >
            Explore More
          </h1>
          <div className="col-12 d-flex justify-content-center">
            <div className="row g-3">
              <div className="col-12 col-xl-6">
                <div className="card">
                  <img
                    src="https://dji-official-fe.djicdn.com/dps/e536a543e1ae498a2ba2cd5def951781.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body text-center p-5">
                    <h1 style={{ fontSize: "24px", fontWeight: "600" }}>
                       Accessories
                    </h1>
                    <p>Controllers, goggles, batteries, and more</p>
                    <div>
                      <Link className='card-links'>Where to Buy</Link>
                      <i className="bi bi-chevron-right card-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6">
                <div className="card">
                  <img
                    src="https://dji-official-fe.djicdn.com/dps/08afdd8dd25f713d05cd9fd085b82b03.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body text-center p-5">
                    <h1 style={{ fontSize: "24px", fontWeight: "600" }}>
                       DJI Care Refresh
                    </h1>
                    <p>Protect your drone with this comprehensive plan</p>
                    <div>
                      <Link className='card-links'>Learn More</Link>
                      <i className="bi bi-chevron-right card-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
      </div>

      <div className="container-fliud p-0 pt-5 p-xl-5"
        style={{ backgroundColor: "#F5F5F5" }}
      >
     <div className="container">
     <div className="row">
          <h1
            className="col-12 text-center mb-4"
            style={{ fontSize: "40px", fontWeight: "500" }}
          >
            Product Support
          </h1>
          <div className="col-12 d-flex justify-content-center">
            <div className="row g-3">
              <div className="col-12 col-xl-6">
                <div className="card">
                  <img
                    src="https://dji-official-fe.djicdn.com/dps/71685a7a83e4c70907f3c504f6806561.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body text-center p-5">
                    <h1 style={{ fontSize: "24px", fontWeight: "600" }}>
                      Support
                    </h1>
                    <p>After-sale support and services for your drone</p>
                    <div>
                      <Link className='card-links'>Learn More</Link>
                      <i className="bi bi-chevron-right card-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6">
                <div className="card">
                  <img
                    src="https://dji-official-fe.djicdn.com/dps/dd1b12f9a5c1f65019873c542d4e5860.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body text-center p-5">
                    <h1 style={{ fontSize: "24px", fontWeight: "600" }}>
                      Download Center
                    </h1>
                    <p>Download official apps, software, and user guides</p>
                    <div>
                      <Link className='card-links'>Learn More</Link>
                      <i className="bi bi-chevron-right card-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>

     <div className="container">
     
     <div className="row d-flex justify-content-center mt-2 mt-xl-5 mb-3">
                   <div className="col-12 col-xl-3 text-center mt-5">
                     <img
                       src="https://dji-official-fe.djicdn.com/dps/030ab0747266dbb01f54d79189f102b8.svg"
                       className="img-fluid"
                     ></img>
                     <h3 className="mt-3" style={{fontSize:"28px"}}>Where to Buy</h3>
                     <div>
                      <Link className='card-links' to=''>Learn More</Link>
                      <i className="bi bi-chevron-right card-icon"></i>
                    </div>
                   </div>
                   <div className="col-12 col-xl-3 text-center mt-5">
                     <img
                       src="https://dji-official-fe.djicdn.com/dps/657c4cd9d4804015c381fa1aa38e272e.svg"
                       className="img-fluid"
                     ></img>
                      <h3 className="mt-3" style={{fontSize:"28px"}}>Support</h3>
                     <div>
                      <Link className='card-links' to=''>Learn More</Link>
                      <i className="bi bi-chevron-right card-icon"></i>
                    </div>
                   </div>
                   <div className="col-12 col-xl-3 text-center mt-5">
                     <img
                       src="https://dji-official-fe.djicdn.com/dps/eb57940aeee1ca763e1ba1a3cae8c885.svg"
                       className="img-fluid"
                     ></img>
                      <h3 className="mt-3" style={{fontSize:"28px"}}>Fly Safe</h3>
                     <div>
                      <Link className='card-links' to=''>Learn More</Link>
                      <i className="bi bi-chevron-right card-icon"></i>
                    </div>
                   </div>
                 </div>
     </div>
      </div>

    </div>
  );
}

export default Cameradrone;
