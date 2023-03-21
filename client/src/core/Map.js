// import React, { useEffect } from "react";
// import { Loader } from "@googlemaps/js-api-loader";

// const Map = () => {
//   useEffect(() => {
//     const loader = new Loader({
//       apiKey: "AIzaSyBpxUbDaS2cUssQ8JdQYW8vIRlHV4erlns",
//       version: "weekly",
//     });

//     loader.load().then(() => {
//       const map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 40.712776, lng: -74.005974 },
//         zoom: 8,
//       });

//       const marker = new google.maps.Marker({
//         position: { lat: 40.712776, lng: -74.005974 },
//         map: map,
//         title: "New York City",
//       });
//     });
//   }, []);

//   return <div id="map" style={{ height: "400px" }}></div>;
// };

// export default Map;
