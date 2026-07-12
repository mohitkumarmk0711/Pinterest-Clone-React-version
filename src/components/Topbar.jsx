import { useState } from "react";

function Topbar({ search, setSearch, setActivePage }) {

  const [profileOpen, setProfileOpen] = useState(false);


  return (
    <header className="topbar">

      <div className="search-box">

        <span className="material-icons-outlined search-icon">
          search
        </span>


        <input
          type="text"
          placeholder="Search ideas"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />


        <div className="top-icons">

          <span className="material-icons-outlined">
            photo_camera
          </span>


          <span className="material-icons-outlined">
            mic
          </span>

        </div>


      </div>



      <div
        className="profile"
        onClick={() =>
          setProfileOpen(!profileOpen)
        }
      >
        M
      </div>



      {profileOpen && (

        <div
          className="profile-menu"
          className="profile-menu"
        >

          <p>
            Mohit Kumar
          </p>


          <button
            onClick={() => {

              setActivePage("boards");

              setProfileOpen(false);

            }}
            style={{
              marginTop: "10px",
              padding: "8px 15px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
            }}
          >
            View Profile
          </button>


        </div>

      )}



    </header>
  );
}

export default Topbar;