fetch('http://localhost:3000/ducks')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    addDucks(data);
  })

function addDucks(ducks) {
  const duckNav = document.getElementById("duck-nav");
  
  ducks.forEach(function (duck) {
    console.log(duck);
    const img = document.createElement('img')
    img.src = duck.img_url
    duckNav.appendChild(img)
    console.log(duckNav);
    img.addEventListener("click", function() {
      const duckDisplayImage = document.getElementById("duck-display-image");
      duckDisplayImage.src = duck.img_url
      const duckDisplayName = document.getElementById("duck-display-name")
      duckDisplayName.textContent = duck.name;
      console.log(duckDisplayName.textContent);
      let duckDisplayLikes = document.getElementById("duck-display-likes")
      let likesCounter = duck.likes;
      duckDisplayLikes.textContent = `${likesCounter} likes`;

      duckDisplayLikes.addEventListener("click", () => {
        likesCounter++,
        duckDisplayLikes.textContent = `${likesCounter} likes`
      })   
  });
  /*
  const images = duckNav.getElementsByTagName("img");

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
      const duckDisplayImage = document.getElementById("duck-display-image");
      duckDisplayImage.src = ducks[i].img_url
      const duckDisplayName = document.getElementById("duck-display-name")
      duckDisplayName.textContent = ducks[i].name;
      console.log(duckDisplayName.textContent);
      let duckDisplayLikes = document.getElementById("duck-display-likes")
      let likesCounter = ducks[i].likes;
      duckDisplayLikes.textContent = `${likesCounter} likes`;

      duckDisplayLikes.addEventListener("click", () => {
        likesCounter++
      })
*/
    })

  }

//`${likeCounter} +  likes`;

/*
button.addEventListener("click", () => {
  liker++
  button.textContent = 
})

button.addEventListener("click", likerCount)

function likerCount() {
  le
}

When the likes button is clicked, it increments the number of likes displayed for that duck. Be sure that the button continues to read "X likes".
*/