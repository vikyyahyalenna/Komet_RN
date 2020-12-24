const APP_ID = "O5AMp5";
export const BASE_URL = "https://app.lenna.ai/";
export const LOGIN = "backend/api/" + APP_ID + "/auth/login";
export const REGISTER = "backend/api/" + APP_ID + "/users/register";

export const postData = async (url, data, token) => {
  try {
    // console.log("postData param", data);
    let response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.error("error postData", error);
  }
};

export const getData = async (url, token) => {
  try {
    // console.log("postData param", data);
    let response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.error("error postData", error);
  }
};
