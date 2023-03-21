import React, { useState, useRef } from 'react';
import axios from 'axios';

const LogoDetection = () => {
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
    <div>
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={stopCamera}>Stop Camera</button>
      <button onClick={captureImage}>Detect Logos</button>
      <video ref={videoRef} />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <ul>
        {logos.map((logo, index) => (
          <li key={index}>{logo}</li>
        ))}
      </ul>
    </div>
  );
};

export default LogoDetection;