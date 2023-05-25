const BASE_URL = "https://dummyjson.com/todos/";

export const GET = async () => {
  const res = await fetch(BASE_URL);

  try {
    if (res.ok) {
      return res.json();
    }
    throw new Error("non c'è niente");
  } catch (er) {
    return {
      todos: [
        {
          todo: "todo list non presente",
        },
      ],
    };
  }

  const data = await res.json();
  return data;
};

export const POST = async (text) => {
  const res = await fetch(BASE_URL + "add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: 2,
      todo: text,
      completed: false,
      userId: 5,
    }),
  });

  try {
    if (res.ok) {
      return res.json();
    }
    throw new Error("non c'è niente");
  } catch (er) {
    return alert("non puoi aggiungere");
  }
  const data = await res.json();
  return data;
};

export const DELETE = async (id) => {
  const res = await fetch(BASE_URL + id, {
    method: "DELETE",
  });
  try {
    if (res.ok) {
      return res.json();
    }
    throw new Error("non c'è niente");
  } catch (er) {
    return alert("non puoi eliminare");
  }

  const data = await res.json();
  return data;
};

// export const POST = async (text) => {

//   const res = await fetch(BASE_URL + "add", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       todo: text,
//       completed: false,
//       userId: 5,
//     }),
//   })

//   const data = await res.json();
//   return data;
// };
