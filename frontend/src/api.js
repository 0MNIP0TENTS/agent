import axios from "axios";

const API_BASE = "http://localhost:8000";

export const reflect = async (thought) => {
  const res = await axios.get(`${API_BASE}/reflect`, {
    params: { thought },
  });
  return res.data.response;
};

export const identity = async () => {
  const res = await axios.get(`${API_BASE}/identity`);
  return res.data;
};