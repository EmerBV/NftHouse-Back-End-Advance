import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import assets from "./data/assets.js";
import User from "./models/userModel.js";
import Asset from "./models/assetModel.js";
import connectDB from "./config/connectMongoose.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Asset.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleAssets = assets.map((asset) => {
      return { ...asset, user: adminUser };
    });

    await Asset.insertMany(sampleAssets);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Asset.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
