"use strict";

const posts = [
  {
    id: 1,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    author: {
      name: "Phil Mangione",
      image: "https://unsplash.it/300/300?image=15",
    },
    likes: 80,
    created: "2021-06-25",
  },
  {
    id: 2,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=112",
    author: {
      name: "Sofia Perlari",
      image: "https://unsplash.it/300/300?image=10",
    },
    likes: 120,
    created: "2021-09-03",
  },
  {
    id: 3,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=234",
    author: {
      name: "Chiara Passaro",
      image: "https://unsplash.it/300/300?image=20",
    },
    likes: 78,
    created: "2021-05-15",
  },
  {
    id: 4,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=24",
    author: {
      name: "Luca Formicola",
      image: null,
    },
    likes: 56,
    created: "2021-04-03",
  },
  {
    id: 5,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=534",
    author: {
      name: "Alessandro Sainato",
      image: "https://unsplash.it/300/300?image=29",
    },
    likes: 95,
    created: "2021-03-05",
  },
];

posts.forEach((post, i) => {
  const container = document.getElementById("container");
  const postCard = document.createElement("div");
  postCard.classList.add("post");

  // if (post.author.image === null) {
  //   post.author.image = "/imgs/userdefault.jpg";
  // }

  postCard.innerHTML = `<div class="post__header">
  <div class="post-meta">                    
      <div class="post-meta__icon">
          <img class="profile-pic" src="${
            post.author.image || "/imgs/userdefault.jpg"
          }" alt="Phil Mangione">                    
      </div>
      <div class="post-meta__data">
          <div class="post-meta__author">${post.author.name}</div>
          <div class="post-meta__time">4 mesi fa</div>
      </div>                    
  </div>
  </div>
  <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
  <div class="post__image">
  <img src="${post.media}" alt="">
  </div>
  <div class="post__footer">
  <div class="likes js-likes">
      <div class="likes__cta">
          <a class="like-button  js-like-button" href="#0" data-postid="${
            post.id
          }">
              <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
              <span class="like-button__label">Mi Piace</span>
          </a>
      </div>
      <div class="likes__counter">
          Piace a <b id="like-counter-${
            post.id
          }" class="js-likes-counter">80</b> persone
      </div>
  </div> 
  </div>`;

  console.log(postCard);
  container.append(postCard);
});

function likeClick() {
  const id = this.getAttribute("data-postid");
  const likes = document.querySelector(`#like-counter-${id}`);

  likes.innerHTML = parseInt(likes.innerHTML) + 1;
}

function colorClick() {}

const buttons = document.querySelectorAll(".like-button");
buttons.forEach((button, i) => {
  button.addEventListener("click", likeClick, colorClick);
});
