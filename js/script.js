const apiKey = "lm7LQqTdRPg8NdXyvrIhncpReOhu89FJ";

const gifContainer = document.querySelector("#gif-container");
const fetchGifBtn = document.querySelector("#fetch-gif-btn");

async function fetchGifs() {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cats&limit=12&rating=g`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    const images = data.data.map((gif) => gif.images.original.url);
    console.log(images);

    gifContainer.innerHTML = "";

    for (const imageUrl of images) {
      gifContainer.innerHTML += `
        <img src="${imageUrl}" class="col-3 mb-3">
      `;
    }
  } catch (error) {
    console.error("Error fetching gifs:", error);
  }
}

fetchGifBtn.addEventListener("click", fetchGifs);