import React, ***REMOVED*** useState, useRef ***REMOVED***from 'react';
import axios from 'axios';

const LogoDetection = () => ***REMOVED***
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
      const res = await axios.post(`$***REMOVED***process.env.REACT_APP_LOGO_DETECTION_API}/logo-detection`, formData);
      setLogos(res.data.logos);
    ***REMOVED***catch (err) ***REMOVED***
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick=***REMOVED***startCamera}>Start Camera</button>
      <button onClick=***REMOVED***stopCamera}>Stop Camera</button>
      <button onClick=***REMOVED***captureImage}>Detect Logos</button>
      <video ref=***REMOVED***videoRef***REMOVED***/>
      <canvas ref=***REMOVED***canvasRef***REMOVED***style=***REMOVED******REMOVED*** display: 'none' }***REMOVED***/>
      <ul>
        ***REMOVED***logos.map((logo, index) => (
          <li key=***REMOVED***index}>***REMOVED***logo}</li>
        ))}
      </ul>
    </div>
  );
};

export default LogoDetection;