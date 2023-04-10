import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
};

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (data, thunkAPI) => {
    try {
      const { res } = await fetch("http://localhost:4141/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const responseJson = await res.json();
      console.log('responseJson', responseJson);
      if (responseJson.message) {
        thunkAPI.rejectWithValue(responseJson);
      }
      return responseJson;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const addItemToLocalStorage = createAsyncThunk(
  "cart/addItemToLocalStorage",
  async ({_id, price, count = 1, pharmacyName}, thunkAPI) => {
    try {
      localStorage.setItem('items', [])
      return {_id, price, count, pharmacyName};
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const updateItemToLocalStorage = createAsyncThunk(
  "cart/updateItemToLocalStorage",
  async (data, thunkAPI) => {
    try {
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const deleteItem = createAsyncThunk(
  "deleteItem/cart",
  async (itemId, thunkAPI) => {
    try {
      return itemId;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const deleteCart = createAsyncThunk(
  "delete/cart",
  async (id, thunkAPI) => {
    try {
      await fetch(`http://localhost:4141/cart/del/${id}`, {
        method: "PATCH",
      });
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getCart = createAsyncThunk(
  "cart/getCart",
  async (id, thunkApi) => {
    try {
      const res = await fetch(`http://localhost:4141/cart/${id}`);
      return res.json();
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const getAllCarts = createAsyncThunk(
  "cart/getAllCarts",
  async (_, thunkApi) => {
    try {
      const res = await fetch("http://localhost:4141/cart");
      return res.json();
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [];
        console.log(state.items);
        localStorage.removeItem('items')
      })
      .addCase(fetchCart.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addItemToLocalStorage.fulfilled, (state, action) => {
        state.items.push(action.payload);
        localStorage.setItem("items", `${JSON.stringify(state.items)}`);
      })
      .addCase(updateItemToLocalStorage.fulfilled, (state, action) => {
        state.items = Object.assign({}, state.items, 
          state.items.map((item) => 
            item._id === action.payload._id 
            ? { ...item, count: action.payload.count } 
            : item
          )
        );
        localStorage.setItem("items", `${JSON.stringify(state.items)}`);
      })
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getCart.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getAllCarts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item._id === action.payload ? false : true)
        localStorage.setItem("items", `${JSON.stringify(state.items)}`);
      })
  },
});

export default cartSlice.reducer;
