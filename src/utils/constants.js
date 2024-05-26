export const CAT_IMAGE_URL = "https://api.thecatapi.com/v1/images/search";
export const CAT_IMAGE_API_KEY =
  "live_vyqKGbt8Q1iaa9inKQenZ3FoL8K8WwbImiaQU2oEBxvsWmsanp4lqT2kfV7pzkKT";

export const PROCESS_SERVER_RESPONSE = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};
