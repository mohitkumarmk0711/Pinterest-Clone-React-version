function Sidebar({ activePage, setActivePage }) {

  const links = [
    {
      page: "home",
      icon: "home",
      text: "Home",
    },
    {
      page: "explore",
      icon: "explore",
      text: "Explore",
    },
    {
      page: "boards",
      icon: "dashboard",
      text: "My Boards",
    },
    {
      page: "create",
      icon: "add_box",
      text: "Create",
    },
    {
      page: "notifications",
      icon: "notifications",
      text: "Notifications",
    },
    {
      page: "messages",
      icon: "chat_bubble_outline",
      text: "Messages",
    },
  ];


  return (
    <aside className="sidebar">

      <img
        src={`${import.meta.env.BASE_URL}pinterest_icon.png`}
        className="logo"
        alt="Pinterest"
      />


      {links.map((item, index) => (

        <div
          className="icon-box"
          key={index}
        >

          <a
            href="#"
            className={
              `nav-link ${
                activePage === item.page
                  ? "active"
                  : ""
              }`
            }
            onClick={(e) => {

              e.preventDefault();

              if (
                item.page === "home" ||
                item.page === "explore" ||
                item.page === "boards"
              ) {

                setActivePage(item.page);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });

              }

            }}
          >

            <span className="material-icons-outlined">
              {item.icon}
            </span>

          </a>


          <span className="tooltip">
            {item.text}
          </span>


        </div>

      ))}



      <div className="bottom">

        <div className="icon-box">

          <a href="#">

            <span className="material-icons-outlined">
              settings
            </span>

          </a>

          <span className="tooltip">
            Settings
          </span>

        </div>

      </div>


    </aside>
  );
}

export default Sidebar;