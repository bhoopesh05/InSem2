
import React from "react";
import "./App.css";

// Header Component
function Header() {
  return (
    <header>
      <h1>🏨 Grand Hotel</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#rooms">Rooms</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

// RoomList Component
function RoomList() {
  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      price: "₹2,000 / night",
      description: "Comfortable room with basic facilities."
    },
    {
      id: 2,
      name: "Deluxe Room",
      price: "₹3,500 / night",
      description: "Spacious room with luxury amenities."
    },
    {
      id: 3,
      name: "Suite Room",
      price: "₹5,000 / night",
      description: "Premium suite with elegant interiors."
    }
  ];

  return (
    <main id="rooms">
      <h2>Our Room Types</h2>
      <div className="room-container">
        {rooms.map((room) => (
          <div className="room-card" key={room.id}>
            <h3>{room.name}</h3>
            <p>{room.description}</p>
            <h4>{room.price}</h4>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </main>
  );
}

// Footer Component
function Footer() {
  return (
    <footer id="contact">
      <p>© 2026 Grand Hotel. All Rights Reserved.</p>
      <p>Contact: info@grandhotel.com</p>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div>
      <Header />
      <RoomList />
      <Footer />
    </div>
  );
}

export default App;
