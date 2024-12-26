document.addEventListener('DOMContentLoaded', () => {
    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')



    fetch("./assets/artistsData.json")
      .then((response) => response.json()) // Parse the JSON from the response
      .then((artistsData) => {
        artistsData.forEach((artist) => {
            const artistCard = document.createElement('div')
            artistCard.classList.add('artist-card')
    
            artistCard.innerHTML = `
                <img src=${artist.image} alt=${artist.name}>
                <div>
                    <h3>${artist.name}</h3>
                    <p>Artist</p>
                </div>
            `
    
            artistGrid.appendChild(artistCard)
        });
      })
      .catch((error) => console.error("Error loading artists data:", error));

    fetch("./assets/albumsData.json")
      .then((response) => response.json())
      .then((albumsData) => {
        albumsData.forEach((album) => {
            const albumCard = document.createElement('div')
            albumCard.classList.add('album-card')
    
            albumCard.innerHTML = `
                <img src=${album.image} alt=${album.name}>
                <div>
                    <h3>${album.name}</h3>
                    <p>${album.artist}</p>
                </div>  
            `
    
            albumsGrid.appendChild(albumCard)
        });
      })
      .catch((error) => console.error("Error loading albums data:", error));

    // Get the elements
  const toggleButton = document.querySelector('.nav-toggle-btn');
  const sidebar = document.querySelector('.side-bar');

  // Toggle the "open" class to show or hide the sidebar
  toggleButton.addEventListener('click', () => {
      sidebar.classList.toggle('open');
  });

})
