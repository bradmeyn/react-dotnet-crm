import axios, { AxiosResponse } from "axios";

export type Client = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

// Set the base URL to your API's address
const baseUrl = "http://localhost:5085/api/clients";

// Get all clients
export async function getClients() {
  try {
    const response: AxiosResponse<Client[]> = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("There was an error fetching the clients:", error);
    throw error;
  }
}

// Get a single client by ID
export async function getClient(id: number) {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(
      `There was an error fetching the client with ID ${id}:`,
      error
    );
    throw error;
  }
}

// Add a new client
export async function addClient(client: Client) {
  try {
    const response = await axios.post(baseUrl, client);
    return response.data; // Returns the created client object
  } catch (error) {
    // Handle error
    console.error("There was an error adding the client:", error);
    throw error;
  }
}

// Update an existing client
export async function updateClient(id: number, client: Client) {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, client);
    return response.data; // Depending on your API, you may adjust what's returned here
  } catch (error) {
    // Handle error
    console.error(
      `There was an error updating the client with ID ${id}:`,
      error
    );
    throw error;
  }
}

// Delete a client
export async function deleteClient(id: number) {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data; // Depending on your API, you may adjust what's returned here
  } catch (error) {
    // Handle error
    console.error(
      `There was an error deleting the client with ID ${id}:`,
      error
    );
    throw error;
  }
}
