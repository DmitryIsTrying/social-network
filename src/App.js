import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Dialogs } from "./components/dialogs/Dialogs";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Profile } from "./components/profile/Profile";
import { Settings } from "./components/settings/Settings";
import { News } from "./components/news/News";
import { Music } from "./components/music/Music";
import { Message } from "./components/dialogs/message/Message";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={<Profile state={props.state.profilePage} />}
          />
          <Route
            path="/dialogs"
            element={<Dialogs state={props.state.messagePage} />}
          >
            <Route path=":id" element={<Message />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
