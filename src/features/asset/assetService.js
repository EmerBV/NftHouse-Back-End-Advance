import axios from "axios";

const API_URL = "/api/assets/";

// Create new asset
const createAsset = async (assetData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, assetData, config);

  return response.data;
};

// Get user assets
const getAssets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user asset
const deleteAsset = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + goalId, config);

  return response.data;
};

const goalService = {
  createAsset,
  getAssets,
  deleteAsset,
};

export default goalService;
