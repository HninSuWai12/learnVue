const API = "/api";

export const loginApi = async (name, password) => {
  const res = await fetch(`api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      password,
    }),
  });

  const data = await res.json();

  return { res, data };
};
