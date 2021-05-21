import React from "react";
// import Alert from "react-bootstrap/Alert";
import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Carousel from "react-bootstrap/Carousel";
// import Img1 from "../images/3.jpg";
import video1 from "../images/1.mp4";
import "./Home.css";
// import Card1 from "./Card1.js";
// import Badge from 'react-bootstrap/Badge'



// function AlertDismissible() {
//   const [show, setShow] = useState(true);

//   return (
//     <>
//       <Alert show={show} variant="success">
//         <Alert.Heading>How's it going?!</Alert.Heading>
//         <p>Welcome to PERFORMANT!</p>
//         <Button variant="dark">
//           Profile <Badge variant="light">1M+</Badge>
//           <span className="sr-only">unread messages</span>
//         </Button>
//         <hr />
//         <div className="d-flex justify-content-end">
//           <Button onClick={() => setShow(false)} variant="outline-success">
//             Close me y'all!
//           </Button>
//         </div>
//       </Alert>

//       {!show && <Button variant="success" onClick={() => setShow(true)}>Show Alert</Button>}
//     </>
//   );
// }

function Home() {
  return (
    <>
      {/* <AlertDismissible /> */}
      <h1 style={{fontSize: "100px", color: "rgb(15, 131, 146)"}}>PERFORMANT</h1>
      <video src={video1} width="100%" height="700" loop autoplay="true" />
      <br></br>
      <div className="spacehorizon"></div>
      {/* <Card1></Card1> */}
    </>
  );
}

export default Home;
