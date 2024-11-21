import { BASE_URL } from "./constants";

export const baseQuery = async (query?: string, endpoint = BASE_URL) => {
  try {
    query ? (query = `?${query}`) : (query = "");
    const response = await fetch(`${endpoint}${query}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const json = await response.json();
    return json;
  } catch (err) {
    alert(`ой, что-то пошло не так ${err.message || err}`);
  }
};
