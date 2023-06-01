import { createEl, genTweet, GET, postTweet, genUsers } from "../utils/fn.js";
const main = document.querySelector(".main");
main.appendChild(postTweet());
const sideBar = document.querySelector(".aside");
sideBar.append(genUsers());
let postData = [];
let userData = [];
const tweet = Promise.all([GET("posts"), GET("users")]);

tweet
  .then((tweets) => {
    postData = tweets[0].posts;
    userData = tweets[1].users;
  })
  .then(() =>
    postData
      .map((post) => {
        post.user = userData.find((user) => user.id === post.userId);
        return post;
      })
      .forEach((post) => main.append(genTweet(post)))
  )
  .then(() => {
    const users = userData.filter((user) => user.id <= 6);

    users.forEach((user) => {
      sideBar.append(genUsers(user));
    });
    return users;
  });

const liEL = document.querySelectorAll("li");

liEL.forEach((li) => {
  li.addEventListener("click", () => {
    console.log(li);
    liEL.forEach((active) => {
      active.classList.remove("active");
    });
    li.classList.add("active");
  });
});

const foryou = document.querySelector(".foryou");
const follow = document.querySelector(".following");

follow.addEventListener("click", () => {
  follow.classList.add("active");
  foryou.classList.remove("active");
});

foryou.addEventListener("click", () => {
  foryou.classList.add("active");
  follow.classList.remove("active");
});
