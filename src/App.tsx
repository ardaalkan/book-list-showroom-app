import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { AuthContextProvider } from "./components/context/AutContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
