import { useState } from "react";
import "./style.css";

import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Boards from "./components/Boards";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [search, setSearch] = useState("");

  const [boards, setBoards] = useState([
    {
      image: "https://picsum.photos/300/620?random=13",
      title: "Drawing",
      pins: 18,
    },
    {
      image: "https://picsum.photos/300/620?random=14",
      title: "Puppy",
      pins: 24,
    },
    {
      image: "https://picsum.photos/300/620?random=15",
      title: "Beach Night",
      pins: 12,
    },
    {
      image: "https://picsum.photos/300/620?random=16",
      title: "Photography",
      pins: 30,
    },
    {
      image: "https://picsum.photos/500/500?random=99",
      title: "Travel",
      pins: 44,
    },
    {
      image: "https://picsum.photos/500/500?random=100",
      title: "Architecture",
      pins: 16,
    },
  ]);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div id="app">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="page">
        <Topbar
          search={search}
          setSearch={setSearch}
          setActivePage={setActivePage}
        />

        {activePage === "home" && (
          <Home search={search} />
        )}

        {activePage === "explore" && (
          <Explore search={search} />
        )}

        {activePage === "boards" && (
          <Boards
            boards={boards}
            setBoards={setBoards}
          />
        )}
      </div>
    </div>
  );
}

export default App;