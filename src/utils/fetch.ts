const API_KEY = process.env.EXPO_PUBLIC_NASA_API_KEY;
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export default async (urlParams?: string) => {
  try {
    console.log(API_URL);
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${
        typeof urlParams !== "undefined" && urlParams.length > 0
          ? urlParams
          : ""
      }`
    );
    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
