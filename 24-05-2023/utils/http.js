const BASE_URL = "https://dummyjson.com/todos/";

export const GET = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data;
};

export const POST = async (text) => {
  const res = await fetch(BASE_URL + "add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: text,
      completed: false,
      userId: 5,
    }),
  });
  const data = await res.json();
  return data;
};

export const DELETE = async (id) => {
  const res = await fetch(BASE_URL + id, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
};
