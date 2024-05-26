import {
  CAT_IMAGE_URL,
  CAT_IMAGE_API_KEY,
  PROCESS_SERVER_RESPONSE,
} from "../../src/utils/constants";

export const catImageApi = () => {
  const catImages = fetch(CAT_IMAGE_URL, {
    headers: {
      "x-api-key": CAT_IMAGE_API_KEY,
      "Content-Type": "application/json",
    },
    method: "GET",
  }).then((res) => {
    return PROCESS_SERVER_RESPONSE(res);
  });
  return catImages;
};
