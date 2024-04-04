// export default function displayMap(locations) {
//   var map = L.map('map', { zoomControl: false });

//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution:
//       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     crossOrigin: '',
//   }).addTo(map);

//   //cutom marker
//   // const icon = L.icon({
//   //   iconUrl: "/img/pin.png",
//   //   iconSize: [32, 44], // size of the icon
//   //   iconAnchor: [16, 44], // point of the icon which will correspond to marker's location
//   //   popupAnchor: [0, -46] // point from which the popup should open relative to the iconAnchor
//   // });

//   const points = [];
//   locations.forEach((loc) => {
//     points.push([loc.coordinates[1], loc.coordinates[0]]);
//     L.marker([loc.coordinates[1], loc.coordinates[0]], {})
//       .addTo(map)
//       .bindPopup(
//         `<p style={font-size: "20px"}>Day ${loc.day}: ${loc.description}</p>`,
//         { autoClose: false },
//       )
//       .openPopup();
//   });

//   const bounds = L.latLngBounds(points).pad(0.5);
//   map.fitBounds(bounds);

//   map.scrollWheelZoom.disable(); //to disable zoom by mouse wheel
// }

/* eslint-disable */

// const data = JSON.parse(document.getElementById('map').dataset.locations);
// //for(let location in )
// const map = L.map('map').setView(
//   [data[0].coordinates[1], data[0].coordinates[0]],
//   7,
// );
// const titleUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// const attribution =
//   '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
// const title = L.tileLayer(titleUrl, { attribution });
// title.addTo(map);
// for (let location of data) {
//   const CLayer = L.marker([location.coordinates[1], location.coordinates[0]], {
//     radius: 10000,
//     color: 'coral',
//     fillColor: 'blue',
//     fillOpacity: 0.5,
//   });
//   CLayer.bindPopup(
//     '<h2>' + location.description + ',' + location.day + ' days </h2>',
//   );
//   CLayer.addTo(map);
// }
// const latling = [];
// for (let location of data) {
//   latling.push([location.coordinates[1], location.coordinates[0]]);
// }
// console.log(latling);
// const polyline = L.polyline(latling);
// polyline.addTo(map);
