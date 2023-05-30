export const createEl = (el, text, ...attrs) => {
  const element = document.createElement(el);
  element.textContent = text;

  attrs.forEach((attr) => {
    element.setAttribute(attr?.name, attr?.value);
  });

  return element;
};

const BASE_URL = "https://dummyjson.com/";

export const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = await res.json();
  return data;
};

export const genTweet = (data) => {
  console.log(data);
  const Container = createEl("div", "", {
    name: "class",
    value: "container",
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
  const username = createEl("p", data.user?.username);
  const textPost = createEl("p", data.body, {
    name: "class",
    value: "postText",
  });

  //   const   = createEl("div", "", { name: "class", value: "container" });
  Container.append(profilePic, username, textPost);

  return Container;
};
