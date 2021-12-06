import "./App.css";
import HomePage from "./Page/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./Page/ProfilePage";
import PrivateRoute from "./Component/PrivetRoute";
import SignIn from "./Page/SignIn";
import SignOut from "./Page/SignOut";
import AuthProvider from "./contex/AuthProvider";
import Header from "./Page/Header";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Routes>
        
          <Route path="/" element={<PrivateRoute><HomePage></HomePage></PrivateRoute>} />
          <Route path="home" element={<PrivateRoute><HomePage></HomePage></PrivateRoute>} />
          <Route
            path="home/:userprofile"
            element={
              <PrivateRoute>
                <ProfilePage></ProfilePage>
              </PrivateRoute>
            }
          />
          <Route path="signin" element={<SignIn></SignIn>} />
          <Route path="signout" element={<SignOut></SignOut>} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
