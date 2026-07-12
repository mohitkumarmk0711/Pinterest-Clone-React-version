function Boards({ boards, setBoards }) {
  const createBoard = () => {
    const boardName = prompt("Enter Board Name");

    if (!boardName || boardName.trim() === "") return;

    const newBoard = {
      image: `https://picsum.photos/400?random=${Math.floor(
        Math.random() * 1000
      )}`,
      title: boardName,
      pins: 0,
    };

    setBoards([...boards, newBoard]);
  };

  const shareProfile = () => {
    alert("Share feature coming soon.");
  };

  const editProfile = () => {
    alert("Edit Profile feature coming soon.");
  };

  return (
    <section id="boards" className="page-section active">
      <div className="content">

        <div className="profile-section">

          <img
            src="https://ui-avatars.com/api/?name=Mohit&background=ffd8e5&color=000&size=200"
            className="profile-image"
            alt="Profile"
          />

          <h1>Mohit Kumar</h1>

          <p>@mohit</p>

          <div className="buttons">

            <button
              className="share"
              onClick={shareProfile}
            >
              Share
            </button>

            <button
              className="edit"
              onClick={editProfile}
            >
              Edit Profile
            </button>

          </div>

        </div>

        <div className="tabs">

          <span>Saved</span>

          <span className="active">
            Boards
          </span>

        </div>

        <div className="create-board">

          <button onClick={createBoard}>
            + Create Board
          </button>

        </div>

        <div className="boards">

          {boards.map((board, index) => (

            <div
              className="board"
              key={index}
            >

              <img
                src={board.image}
                alt={board.title}
              />

              <h3>{board.title}</h3>

              <p>{board.pins} Pins</p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Boards;