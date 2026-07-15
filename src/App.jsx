import Nav from "./Nav";
import Homepage from "./HomePage";
import Footer from "./Footer";
import Header from "./Header";

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

      <Homepage />
      <Footer />
    </>
  );
}

export default App;