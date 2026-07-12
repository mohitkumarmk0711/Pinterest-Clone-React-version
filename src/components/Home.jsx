function Home({ search }) {

  const images = [
    "https://picsum.photos/300/500?random=1",
    "https://picsum.photos/300/350?random=2",
    "https://picsum.photos/300/420?random=3",
    "https://picsum.photos/300/600?random=4",
    "https://picsum.photos/300/460?random=5",
    "https://picsum.photos/300/520?random=6",
    "https://picsum.photos/300/380?random=7",
    "https://picsum.photos/300/640?random=8",
    "https://picsum.photos/300/450?random=9",
    "https://picsum.photos/300/550?random=10",
    "https://picsum.photos/300/430?random=11",
    "https://picsum.photos/300/620?random=12",
  ];

  return (
    <section id="home" className="page-section active">

      <main className="content masonry">

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
                alt={`Pin ${index + 1}`}
                onClick={(e) => {

                  e.target.style.transform = "scale(1.1)";

                  setTimeout(() => {

                    e.target.style.transform = "scale(1)";

                  }, 250);

                }}
              />

            </div>

          ))}

      </main>

    </section>
  );
}

export default Home;