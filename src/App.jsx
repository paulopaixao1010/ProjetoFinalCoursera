import Nav from "./Nav";
import Homepage from "./HomePage";
import Footer from "./Footer";
import Header from "./Header";
import BookingPage from "./BookingPage"

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Header/>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;