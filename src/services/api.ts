const BASE_URL = "https://dummyjson.com";

export const apiCall = async (endpoint: string, options?: RequestInit) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in API call:", error);
    throw error;
  }
};
