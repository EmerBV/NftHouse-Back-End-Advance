import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import assetService from "./assetService";

const initialState = {
  assets: [],
  //asset: {},
  userAssets: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new asset
export const createAsset = createAsyncThunk(
  "assets/create",
  async (assetData, thunkAPI) => {
    try {
      const token  = thunkAPI.getState().auth.user.token
      //const  { data }  = thunkAPI.getState()
      return await assetService.createAsset(assetData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get all assets
export const getAllAssets = createAsyncThunk(
  "assets/getAll",
  async (assetData, thunkAPI) => {
    try {
      const { data } = thunkAPI.getState();
      return await assetService.getAllAssets(assetData, data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get single asset
export const getAssetById = createAsyncThunk(
  "assets/getAsset",
  async (id, thunkAPI) => {
    try {
      const { data } = thunkAPI.getState();
      return await assetService.getAsset(id, data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user assets
export const getAssets = createAsyncThunk(
  "assets/getAssets",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await assetService.getAssets(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete user asset
export const deleteAsset = createAsyncThunk(
  "assets/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await assetService.deleteAsset(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const assetSlice = createSlice({
  name: "asset",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAsset.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAsset.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.assets.push(action.payload);
      })
      .addCase(createAsset.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // PRUEBA
      .addCase(getAllAssets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAssets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.assets = action.payload;
      })
      .addCase(getAllAssets.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getAssetById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAssetById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.assets = state.assets.filter(
          (asset) => asset._id !== action.payload.id
        );
      })
      .addCase(getAssetById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // PRUEBA

      .addCase(getAssets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAssets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.assets = action.payload;
      })
      .addCase(getAssets.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteAsset.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAsset.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.assets = state.assets.filter(
          (asset) => asset._id !== action.payload.id
        );
      })
      .addCase(deleteAsset.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = assetSlice.actions;
export default assetSlice.reducer;
