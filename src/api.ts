import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api-candidate.ogruposix.com",
  headers: {
    "Content-Type": "application/json",
    "user-token": import.meta.env.VITE_USER_TOKEN,
  },
});

async function getData() {
  const response = await apiClient.get(
    `/checkout/95BD9233-8FDC-48AD-B4C5-E5BAF7578C15`,
  );
  return response.data.object[0];
}

async function postOrder(data: any) {
  const response = await apiClient.post(`buy/${data.product_id}`, data);
  return response.data;
}

export default { getData, postOrder };
