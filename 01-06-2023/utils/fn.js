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
      value:
        data.user?.image ||
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
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
    value: "heartContainer",
  });
  const heartText = createEl("p", data.reactions, {
    name: "class",
    value: "heartText",
  });
  const heart = createEl("div", "", {
    name: "class",
    value: "heart",
  });

  //   const   = createEl("div", "", { name: "class", value: "container" });
  container.append(leftSide, rightSide);
  leftSide.appendChild(profilePic);
  rightSide.append(containerUser, postText, reactionsContainer);
  containerUser.append(containerUserText, dots);
  containerUserText.append(userName, userNick, date);
  reactionsContainer.appendChild(heartContainer);
  heartContainer.append(heart, heartText);

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
    { name: "placeholder", value: "Che c'è di nuovo?" },
    { name: "class", value: "InputPost" }
  );
  const tweetSubmit = createEl(
    "input",
    "",
    { name: "type", value: "submit" },
    { name: "value", value: "Twitta" },
    { name: "class", value: "tweetSubmit" }
  );
  form.addEventListener("submit", (e) => {
    POST(e.srcElement[0].value);
    e.preventDefault();
  });
  divPost.append(imgProfile, form);
  form.append(postText, tweetSubmit);
  return divPost;
};

export const genUsers = (user) => {
  const userContainer = createEl("div", "", {
    name: "class",
    value: "userContainer",
  });

  const imgUser = createEl("img", "", { name: "src", value: user });
  const userName = createEl("p", user, {
    name: "class",
    value: "UserNameFollow",
  });
  const userNick = createEl("p", user, {
    name: "class",
    value: "UserNickFollow",
  });
  const followBtn = createEl("button", "Segui", {
    name: "class",
    value: "buttonFollow",
  });
  userContainer.append(imgUser, userName, userNick, followBtn);

  return userContainer;
};
