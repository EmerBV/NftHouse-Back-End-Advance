import axios from "axios";

const API_URL = "/api/assets/";

const API_URL2 = "/api/account/";

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

// Get all assets
const getAllAssets = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Get user assets
const getAssets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL2, config);

  return response.data;
};

// Delete user asset
const deleteAsset = async (assetId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + assetId, config);

  return response.data;
};

const goalService = {
  createAsset,
  getAllAssets,
  getAssets,
  deleteAsset,
};

export default goalService;
