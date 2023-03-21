import React, { useState, useRef } from 'react';
import axios from 'axios';
import MaterialAppBar from "./Menu"
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
const Camera = () => {
  const [logos, setLogos] = useState([]);
  const videoRef = useRef();
  const canvasRef = useRef();

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch(err => console.error(err));
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    videoRef.current.srcObject = null;
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(sendImage);
  };

  const sendImage = async (blob) => {
    const formData = new FormData();
    formData.append('image', blob, 'image.jpg');
    try {
      const res = await axios.post(`${process.env.REACT_APP_LOGO_DETECTION_API}/logo-detection`, formData);
      setLogos(res.data.logos);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <MaterialAppBar />
    <Container fluid style={{width : "max-content", height: "max-content", borderRadius: "1rem"}}>
    <Row style={{ marginBottom: "1rem", marginTop: "5rem", display: "flex", alignItems: "center", justifyContent: "center", width: "max-content", height: "max-content"}}>
      <video ref={videoRef} style={{width : "40rem", height: "40rem"}}/>
      <canvas ref={canvasRef} style={{ display: "none", width : "40rem", height: "40rem"}} />
      <ul>
        {logos.map((logo, index) => (
          <li style={{ fontSize : "100px" }} key={index}>{logo}</li>
        ))}
      </ul>
      </Row>
    <Row style={{display : "flex", alignItems : "center", justifyContent : "center" }}>
        <button style={{ backgroundColor : '#e0baff', color : "#541c82", padding : "0.8rem 1.4rem", outline : "none", border : "none", borderRadius : "0.6rem", marginRight : "0.7rem" }} onClick={startCamera}>Start Camera</button>
        <button style={{ backgroundColor : '#e0baff', color : "#541c82", padding : "0.8rem 1.4rem", outline : "none", border : "none", borderRadius : "0.6rem", marginRight : "0.7rem" }} onClick={stopCamera}>Stop Camera</button>
        <button style={{ backgroundColor : '#e0baff', color : "#541c82", padding : "0.8rem 1.4rem", outline : "none", border : "none", borderRadius : "0.6rem", marginRight : "0.7rem" }} onClick={captureImage}>Detect Logos</button>
    </Row>
    </Container>
    </>
  );
};

export default Camera;