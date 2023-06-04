import { createEl, genTweet, GET, postTweet, genUsers } from "../utils/fn.js";
const main = document.querySelector(".main");
main.appendChild(postTweet());
const sideBar = document.querySelector(".aside");

const wToFollow = document.querySelector(".wToUsers");

let postData = [];
let userData = [];
const tweet = Promise.all([GET("posts"), GET("users")]);

tweet
  .then((tweets) => {
    postData = tweets[0].posts;
    userData = tweets[1].users;
  })
  .then(() => {
    postData
      .map((post) => {
        post.user = userData.find((user) => user.id === post.userId);
        return post;
      })
      .forEach((post) => main.append(genTweet(post)));
  })
  .then(() => {
    let usersFilt = userData.filter((user) => user.id <= 3);

    usersFilt.forEach((user) => wToFollow.append(genUsers(user)));
    return usersFilt;
  });

const liEL = document.querySelectorAll("li");

liEL.forEach((li) => {
  li.addEventListener("click", () => {
    liEL.forEach((active) => {
      active.classList.remove("active");
    });
    li.classList.add("active");
  });
});

const foryou = document.querySelector(".foryou");
const follow = document.querySelector(".following");

foryou.addEventListener("click", () => {
  foryou.classList.add("active");
  follow.classList.remove("active");
});

follow.addEventListener("click", () => {
  foryou.classList.remove("active");
  follow.classList.add("active");
});

const inputSearch = document.querySelector(".searchInput");
const searchBar = document.querySelector(".searchBar");
const searchSvg = document.querySelector(".searchSvg");

inputSearch.addEventListener("input", () => {
  searchBar.style.backgroundColor = "#273340";
  searchBar.style.border = "1px solid #1d9bf0";
  searchSvg.style.fill = "#1d9bf0";
});
