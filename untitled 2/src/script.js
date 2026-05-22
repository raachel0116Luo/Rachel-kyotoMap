// 1. Initialize Map
var map = L.map('map').setView([35.0116, 135.7681], 12);

// 2. Load Base Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// 3. Define the Sakura Icon
var sakuraIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3468/3468301.png', // A cute cherry blossom icon
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
});

// 4. English Data: 17 World Heritages + Gojo Bridge
var sites = [
    { name: "Kiyomizu-dera Temple", pos: [34.9948, 135.7850], type: "World Heritage / Romance" },
    { name: "Gojo Ohashi Bridge", pos: [34.9957, 135.7677], type: "Conan & Heiji First Meet" },
    { name: "Nijo Castle", pos: [35.0142, 135.7481], type: "World Heritage" },
    { name: "Kinkaku-ji (Golden Pavilion)", pos: [35.0393, 135.7292], type: "World Heritage" },
    { name: "Ginkaku-ji (Silver Pavilion)", pos: [35.0266, 135.7982], type: "World Heritage" },
    { name: "Tenryu-ji Temple", pos: [35.0158, 135.6740], type: "World Heritage / Arashiyama" },
    { name: "Ryoan-ji Temple", pos: [35.0344, 135.7182], type: "World Heritage / Zen Garden" },
    { name: "To-ji Temple", pos: [34.9811, 135.7476], type: "World Heritage / Five-story Pagoda" },
    { name: "Shimogamo-jinja Shrine", pos: [35.0391, 135.7731], type: "World Heritage" },
    { name: "Kamigamo-jinja Shrine", pos: [35.0594, 135.7523], type: "World Heritage" },
    { name: "Ninna-ji Temple", pos: [35.0311, 135.7139], type: "World Heritage" },
    { name: "Daigo-ji Temple", pos: [34.9510, 135.8192], type: "World Heritage" },
    { name: "Nishi Hongan-ji Temple", pos: [34.9915, 135.7516], type: "World Heritage" },
    { name: "Kozan-ji Temple", pos: [35.0598, 135.6761], type: "World Heritage" },
    { name: "Saihō-ji (Moss Temple)", pos: [34.9919, 135.6845], type: "World Heritage" },
    { name: "Byodo-in Temple", pos: [34.8892, 135.8076], type: "World Heritage / Uji" },
    { name: "Ujigami-jinja Shrine", pos: [34.8912, 135.8107], type: "World Heritage" },
    { name: "Enryaku-ji Temple", pos: [35.0705, 135.8362], type: "World Heritage / Mt. Hiei" }
];

// 5. Add Markers with Sakura Icon
sites.forEach(function(s) {
    L.marker(s.pos, {icon: sakuraIcon}).addTo(map)
      .bindPopup("<div style='color:#d85d7c; font-weight:bold; font-size:15px;'>" + s.name + "</div>" +
                  "<div style='color:#666; font-size:12px;'>" + s.type + "</div>");
});