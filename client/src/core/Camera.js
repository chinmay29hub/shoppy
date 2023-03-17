import React, ***REMOVED*** useState, useRef ***REMOVED***from 'react';
import axios from 'axios';
import MaterialAppBar from "./Menu"
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
const Camera = () => ***REMOVED***
  const [logos, setLogos] = useState([]);
  const videoRef = useRef();
  const canvasRef = useRef();

  const startCamera = () => ***REMOVED***
    navigator.mediaDevices.getUserMedia(***REMOVED*** video: true })
      .then(stream => ***REMOVED***
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch(err => console.error(err));
  };

  const stopCamera = () => ***REMOVED***
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    videoRef.current.srcObject = null;
  };

  const captureImage = () => ***REMOVED***
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(sendImage);
  };

  const sendImage = async (blob) => ***REMOVED***
    const formData = new FormData();
    formData.append('image', blob, 'image.jpg');
    try ***REMOVED***
      const res = await axios.post('http://localhost:3001/logo-detection', formData);
      setLogos(res.data.logos);
    ***REMOVED***catch (err) ***REMOVED***
      console.error(err);
    }
  };

  return (
    <>
    <MaterialAppBar />
    <Container fluid style=***REMOVED******REMOVED***width : "max-content", height: "max-content", borderRadius: "1rem"}}>
    <Row style=***REMOVED******REMOVED*** marginBottom: "1rem", marginTop: "5rem", display: "flex", alignItems: "center", justifyContent: "center", width: "max-content", height: "max-content"}}>
      <video ref=***REMOVED***videoRef***REMOVED***style=***REMOVED******REMOVED***width : "40rem", height: "40rem"}}/>
      <canvas ref=***REMOVED***canvasRef***REMOVED***style=***REMOVED******REMOVED*** display: "none", width : "40rem", height: "40rem"}***REMOVED***/>
      <ul>
        ***REMOVED***logos.map((logo, index) => (
          <li style=***REMOVED******REMOVED*** fontSize : "100px" }***REMOVED***key=***REMOVED***index}>***REMOVED***logo}</li>
        ))}
      </ul>
      </Row>
    <Row style=***REMOVED******REMOVED***display : "flex", alignItems : "center", justifyContent : "center" }}>
        <button style=***REMOVED******REMOVED*** backgroundColor : '#e0baff', color : "#541c82", padding : "0.8rem 1.4rem", outline : "none", border : "none", borderRadius : "0.6rem", marginRight : "0.7rem" }***REMOVED***onClick=***REMOVED***startCamera}>Start Camera</button>
        <button style=***REMOVED******REMOVED*** backgroundColor : '#e0baff', color : "#541c82", padding : "0.8rem 1.4rem", outline : "none", border : "none", borderRadius : "0.6rem", marginRight : "0.7rem" }***REMOVED***onClick=***REMOVED***stopCamera}>Stop Camera</button>
        <button style=***REMOVED******REMOVED*** backgroundColor : '#e0baff', color : "#541c82", padding : "0.8rem 1.4rem", outline : "none", border : "none", borderRadius : "0.6rem", marginRight : "0.7rem" }***REMOVED***onClick=***REMOVED***captureImage}>Detect Logos</button>
    </Row>
    </Container>
    </>
  );
};

export default Camera;