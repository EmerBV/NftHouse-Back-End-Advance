import asyncHandler from "express-async-handler";
import Asset from "../models/assetModel.js";

// @desc    Fetch all assets
// @route   GET /api/assets
// @access  Public
const getAssets = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Asset.countDocuments({ ...keyword });
  const assets = await Asset.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ assets, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single asset
// @route   GET /api/assets/:id
// @access  Public
const getAssetById = asyncHandler(async (req, res) => {
  const asset = await Asset.findById(req.params.id);

  if (asset) {
    res.json(asset);
  } else {
    res.status(404);
    throw new Error("Asset not found");
  }
});

// @desc    Delete an asset
// @route   DELETE /api/assets/:id
// @access  Private/Admin
const deleteAsset = asyncHandler(async (req, res) => {
  const asset = await Asset.findById(req.params.id);

  if (asset) {
    await asset.remove();
    res.json({ message: "Asset removed" });
  } else {
    res.status(404);
    throw new Error("Asset not found");
  }
});

// @desc    Create an asset
// @route   POST /api/assets
// @access  Private/Admin
const createAsset = asyncHandler(async (req, res) => {
  const asset = new Asset({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "../../public/images/dummy.png",
    category: "Sample category",
    likes: 0,
  });

  const createdAsset = await asset.save();
  res.status(201).json(createdAsset);
});

// @desc    Update an asset
// @route   PUT /api/assets/:id
// @access  Private/Admin
const updateAsset = asyncHandler(async (req, res) => {
  const { name, price, image, category } =
    req.body;

  const asset = await Asset.findById(req.params.id);

  if (asset) {
    asset.name = name;
    asset.price = price;
    asset.image = image;
    asset.category = category;

    const updatedAsset = await asset.save();
    res.json(updatedAsset);
  } else {
    res.status(404);
    throw new Error("Asset not found");
  }
});



export {
  getAssets,
  getAssetById,
  deleteAsset,
  createAsset,
  updateAsset,
};
