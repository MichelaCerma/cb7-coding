import "./components/nav/nav.js";

import { createEl, genTweet, GET } from "./utils/fn.js";
const main = document.querySelector(".main");
console.log(main);
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
  );
