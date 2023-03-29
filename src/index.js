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

    


      });
      let form = document.getElementById("new-duck-form");
      let nameInForm = document.getElementById("")
      form.addEventListener("submit", (e) => {
      e.preventDefault(),
      (console.log(e.target["duck-name-input"].value)),
      console.log(e.target["duck-image-input"].value),
      newImg = document.createElement("img"),
      newImg.src = e.target["duck-image-input"].value,
      duckNav.appendChild(newImg)
      newImg.addEventListener("click", function() {
        const duckDisplayImage = document.getElementById("duck-display-image");
        duckDisplayImage.src = newImg.src
        const duckDisplayName = document.getElementById("duck-display-name")
        duckDisplayName.textContent = e.target["duck-name-input"].value;
        console.log(duckDisplayName.textContent);
        let duckDisplayLikes = document.getElementById("duck-display-likes")
        let likesCounter = 0;
        duckDisplayLikes.textContent = `${likesCounter} likes`;
  
        duckDisplayLikes.addEventListener("click", () => {
          likesCounter++,
          duckDisplayLikes.textContent = `${likesCounter} likes`
  
      
  
  
        });


    })
 

  });


    });
  

  })
}