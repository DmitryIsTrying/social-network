import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DialogsContainer } from "./components/dialogs/DialogsContainer";
import { Message } from "./components/dialogs/message/Message";
import HeaderContainer from "./components/header/HeaderContainer";
import { Music } from "./components/music/Music";
import { Navbar } from "./components/navbar/Navbar";
import { News } from "./components/news/News";
import ProfileContainer from "./components/profile/ProfileContainer";
import { Settings } from "./components/settings/Settings";
import UsersContainer from "./components/users/UsersContainer";
import LoginPage from "./components/login/Login";

function App(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/:id?" element={<ProfileContainer />} />
          <Route path="/dialogs" element={<DialogsContainer />}>
            <Route path=":id" element={<Message />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
