export const createEl = (el, text, ...attrs) => {
  const element = document.createElement(el);
  element.textContent = text;

  attrs.forEach((attr) => {
    element.setAttribute(attr?.name, attr?.value);
  });

  return element;
};

const BASE_URL = "https://dummyjson.com/";
const URL_POST = "https://dummyjson.com/posts/add";
let number = Math.floor(Math.random() * 1000);
let number1 = Math.floor(Math.random() * 1000);
let number2 = Math.floor(Math.random() * 1000);

export const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = await res.json();
  return data;
};

export const POST = async (text) => {
  const res = await fetch(URL_POST, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: text,
      userId: 5,
    }),
  });
  const data = await res.json();
  return data;
};

export const genTweet = (data) => {
  const clock = new Date().toLocaleString("en-us", {
    day: "numeric",
    month: "long",
  });

  const container = createEl("div", "", {
    name: "class",
    value: "container",
  });

  const leftSide = createEl("div", "", {
    name: "class",
    value: "leftSide",
  });
  const profilePic = createEl(
    "img",
    "",
    { name: "class", value: "profilePic" },
    {
      name: "src",
      value: data.user?.image || "https://robohash.org/lol",
    }
  );

  const rightSide = createEl("div", "", {
    name: "class",
    value: "rightSide",
  });
  const containerUser = createEl("div", "", {
    name: "class",
    value: "containerUser",
  });

  const containerUserText = createEl("div", "", {
    name: "class",
    value: "userTextContainer",
  });
  const userNick = createEl(
    "span",
    "@" + (data.user?.username || "UnknownUser"),
    {
      name: "class",
      value: "userNickMain",
    }
  );
  const userName = createEl(
    "span",
    (data.user?.firstName || "User") + (data.user?.lastName || "name"),
    {
      name: "class",
      value: "userNameMain",
    }
  );
  const date = createEl("span", clock, {
    name: "class",
    value: "date",
  });

  const postText = createEl("p", data.body, {
    name: "class",
    value: "postText",
  });
  const dots = createEl("i", "", {
    name: "class",
    value: "fa-solid fa-ellipsis",
  });

  const reactionsContainer = createEl("div", "", {
    name: "class",
    value: "reactionsContainer",
  });

  const heartContainer = createEl("div", "", {
    name: "class",
    value: "heartContainer iconC ",
  });
  const heartText = createEl("p", data.reactions, {
    name: "class",
    value: "heartText",
  });
  const heart = createEl("div", "", {
    name: "class",
    value: "icon heart",
  });

  const commentContainer = createEl("div", "", {
    name: "class",
    value: "commentContainer iconC",
  });
  const commentText = createEl("p", number1, {
    name: "class",
    value: "commentText",
  });
  const comment = createEl("div", "", {
    name: "class",
    value: "icon comment",
  });

  const rtContainer = createEl("div", "", {
    name: "class",
    value: "rtContainer iconC",
  });
  const rtText = createEl("p", number2, {
    name: "class",
    value: "rtText",
  });
  const rt = createEl("div", "", {
    name: "class",
    value: "icon rt",
  });
  const visualContainer = createEl("div", "", {
    name: "class",
    value: "visualContainer iconC",
  });
  const visualText = createEl("p", number, {
    name: "class",
    value: "visualText",
  });
  const visual = createEl("div", "", {
    name: "class",
    value: "icon visual",
  });
  const shareContainer = createEl("div", "", {
    name: "class",
    value: "shareContainer",
  });

  const share = createEl("div", "", {
    name: "class",
    value: "icon share",
  });

  container.append(leftSide, rightSide);
  leftSide.appendChild(profilePic);
  rightSide.append(containerUser, postText, reactionsContainer);
  containerUser.append(containerUserText, dots);
  containerUserText.append(userName, userNick, date);
  reactionsContainer.append(
    commentContainer,
    rtContainer,
    heartContainer,
    visualContainer,
    shareContainer
  );
  heartContainer.append(heart, heartText);
  commentContainer.append(comment, commentText);
  rtContainer.append(rt, rtText);
  visualContainer.append(visual, visualText);
  shareContainer.appendChild(share);
  return container;
};

export const postTweet = () => {
  const divPost = createEl("div", "", { name: "class", value: "post" });
  const imgProfile = createEl(
    "img",
    "",
    { name: "class", value: "PfTweet" },
    {
      name: "src",
      value: "https://picsum.photos/50/50",
    }
  );
  const form = createEl("form", "", { name: "class", value: "form" });
  const postText = createEl(
    "input",
    "",
    { name: "type", value: "text" },
    { name: "placeholder", value: "What is happening?!" },
    { name: "class", value: "InputPost" }
  );
  const tweetSubmit = createEl(
    "input",
    "",
    { name: "type", value: "submit" },
    { name: "value", value: "Tweet" },
    { name: "class", value: "tweetSubmit" }
  );
  const iconsContainer = createEl("div", "", {
    name: "class",
    value: "PostIcons",
  });
  const imageIcon = createEl("div", "", { name: "class", value: "imageIcon" });
  const gif = createEl("div", "", { name: "class", value: "gif imageIcon" });
  const survey = createEl("div", "", {
    name: "class",
    value: "survey imageIcon",
  });
  const smile = createEl("div", "", {
    name: "class",
    value: "smile imageIcon",
  });
  const calendar = createEl("div", "", {
    name: "class",
    value: "calendar imageIcon",
  });
  form.addEventListener("submit", (e) => {
    POST(e.srcElement[0].value);
    e.preventDefault();
  });
  divPost.append(imgProfile, form);
  form.append(postText, iconsContainer, tweetSubmit);
  iconsContainer.append(imageIcon, gif, survey, smile, calendar);
  return divPost;
};

export const genUsers = (user) => {
  const userContainer = createEl("div", "", {
    name: "class",
    value: "userContainer",
  });

  const imgUser = createEl("img", "", {
    name: "src",
    value: user?.image || "https://robohash.org/lama",
  });

  const userTextContainer = createEl("div", "", {
    name: "class",
    value: "userTextwrapper",
  });
  const userName = createEl(
    "p",
    (user?.firstName || "Nome") + (user?.lastName || "Utente"),
    {
      name: "class",
      value: "UserNameFollow",
    }
  );

  const userNick = createEl("p", `@${user?.username}` || "uses", {
    name: "class",
    value: "UserNickFollow",
  });
  const followBtn = createEl("button", "Segui", {
    name: "class",
    value: "buttonFollow",
  });
  userTextContainer.append(userName, userNick);
  userContainer.append(imgUser, userTextContainer, followBtn);

  return userContainer;
};
