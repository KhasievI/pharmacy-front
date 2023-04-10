import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  currentCategory: {},
  selectCategories: [],
};

export const fetchCategories = createAsyncThunk("fetch/categories", async (_, thunkApi) => {
  try {
    const res = await fetch("http://localhost:4141/categories");
    return res.json();
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

export const fetchCategoryById = createAsyncThunk("fetch/categoryById", async (id, thunkApi) => {
  try {
    const res = await fetch(`http://localhost:4141/category/${id}`);
    return res.json();
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

export const addCategory = createAsyncThunk("add/category", async (category, thunkApi) => {
  try {
    const addedCategory = await fetch("http://localhost:4141/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category,
      }),
    });
    return addedCategory.json();
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

export const patchCategory = createAsyncThunk(
  "patch/category",
  async ({ id, category }, thunkApi) => {
    try {
      const patchedCategory = await fetch(`http://localhost:4141/category/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category,
        }),
      });
      return patchedCategory.json();
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  },
);

export const deleteCategory = createAsyncThunk("delete/category", async (id, thunkApi) => {
  try {
    const deletedCategory = await fetch(`http://localhost:4141/category/${id}`, {
      method: "DELETE",
    });
    return deletedCategory.json();
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    switchCategory(state, action) {
      if (state.selectCategories.includes(action.payload)) {
        state.selectCategories = state.selectCategories.filter((cat) => {
          return cat !== action.payload;
        });
      } else {
        state.selectCategories = [...state.selectCategories, action.payload];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchCategoryById.fulfilled, (state, action) => {
        state.currentCategory = action.payload;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(patchCategory.fulfilled, (state, action) => {
        state.categories = state.categories.map((category) => {
          if (category._id === action.payload._id) {
            category = action.payload;
          }
          return category;
        });
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (category) => category._id !== action.payload._id,
        );
      });
  },
});

export default categorySlice.reducer;
export const { switchCategory } = categorySlice.actions;
