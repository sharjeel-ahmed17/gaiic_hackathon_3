import { apiCall } from "./api";

// Fetch all products
export const getAllProducts = async () => {
  try {
    const data = await apiCall("/products");
    return data.products; // Returning only the `products` array
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Fetch a single product by ID
export const getProductById = async (id: number) => {
  try {
    const data = await apiCall(`/products/${id}`);
    return data; // Returning the single product
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
};
