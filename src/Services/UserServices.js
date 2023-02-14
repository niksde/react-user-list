
const API_HOST = "https://reqres.in/api/users";

const corsHeaders = {
  method: "GET",
  mode: "cors",
  headers: { "Content-Type": "application/json" },
};

const List = async (page) => {
  //TODO: Implement list api
  return await fetch(`${API_HOST}?page=${page}`, {
    ...corsHeaders,
  }).then((response) => response.json());
};

const Get = async (id) => {
  //TODO: Implement get api
  return await fetch(API_HOST + "/" + id, {
    ...corsHeaders,
  }).then((response) => response.json());
};

const Save = async (user) => {
  //TODO: Implement save api
  const updatePath = user.id ? `/${user.id}` : "";
  return await fetch(API_HOST + updatePath, {
    ...corsHeaders,
    method: user.id ? "PUT" : "POST",
    body: JSON.stringify(user),
  }).then((response) => response.json());
};

const Delete = async (id) => {
  //TODO: Implement delete api
  return await fetch(API_HOST + "/" + id, {
    ...corsHeaders,
    method: "DELETE",
  }).then((response) => {
    console.log(response);
    return true;
  });
};

export { List, Get, Save, Delete };
