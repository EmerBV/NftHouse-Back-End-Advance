import axios from "axios";

const API_URL = "/api/assets/";

// Create new asset
const createAsset = async (assetData, token) => {
  const config = {
    headers: {
      //'Content-Type': 'application/json',
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

// Get single asset
const getAssetById = async (assetId) => {

  const response = await axios.get(API_URL + assetId);

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
const deleteAsset = async (assetId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + assetId, config);

  return response.data;
};

const assetService = {
  createAsset,
  getAllAssets,
  getAssetById,
  getAssets,
  deleteAsset,
};

export default assetService;
