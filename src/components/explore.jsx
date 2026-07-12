import { useState } from "react";

function Explore({ search }) {

  const [saved, setSaved] = useState({});

  const images = [
    "images/img1.png",
    "images/img2.png",
    "images/img3.png",
    "images/img4.png",
    "images/img5.png",
    "images/img6.png",
    "images/img7.png",
    "images/img8.png",
  ];

  const toggleSave = (index) => {
    setSaved((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="explore" className="page-section active">

      <div className="content">

        <div className="heading">

          <h1>Explore</h1>

          <p>
            Discover new ideas and inspiration
          </p>

        </div>

        <div className="gallery">

          {images
            .filter((img) =>
              img.toLowerCase().includes(search.toLowerCase())
            )
            .map((img, index) => (

              <div
                className="card"
                key={index}
              >

                <img
                  src={img}
                  alt={`Explore ${index + 1}`}
                />

                <div className="overlay">

                  <button
                   className={saved[index] ? "saved-btn" : ""}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSave(index);
                    }}
                    
                  >
                    {saved[index] ? "Saved" : "Save"}
                  </button>

                  <a
                    href={img}
                    download
                    className="download-btn"
                  >
                    <i className="fa-solid fa-download"></i>
                  </a>

                </div>

              </div>

            ))}

        </div>

      </div>

    </section>
  );
}

export default Explore;