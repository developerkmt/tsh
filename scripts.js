const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "You got RickRolled 
 (Follow me @trendyshoeshouse or wet your bed today!!)";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
  
  // Check if the Instagram icon already exists to avoid duplicates
  if (!document.querySelector(".instagram-icon")) {
    // Create an anchor element for Instagram link
    const instagramLink = document.createElement("a");
    instagramLink.href = "https://www.instagram.com/trendyshoeshouse";
    instagramLink.target = "_blank";
    instagramLink.classList.add("instagram-icon");
    instagramLink.setAttribute("aria-label", "Follow me on Instagram");

    // Create the Instagram icon (using Font Awesome or similar)
    const instagramIcon = document.createElement("i");
    instagramIcon.classList.add("fab", "fa-instagram"); // Font Awesome classes

    // Append the icon to the link
    instagramLink.appendChild(instagramIcon);

    // Insert the Instagram link right after the GIF
    gif.insertAdjacentElement("afterend", instagramLink);
  }
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
