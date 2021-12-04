import "./App.css";
import HomePage from "./Page/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./Page/ProfilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="home" element={<HomePage></HomePage>} />
          <Route
            path="home/:userprofile"
            element={<ProfilePage></ProfilePage>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
