import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  pharmacyName: null,
  pharmacyNames: [],
  token: localStorage.getItem("token"),
  isLoading: false,
  status: null,
};

export const pharmacyExit = createAsyncThunk("auth/exit", async (_, thunkAPI) => {
  try {
    localStorage.removeItem("token");
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const registerPharmacy = createAsyncThunk(
  "auth/registerPharmacy",
  async ({ pharmacyName, password, address, license, ogrn, inn }) => {
    try {
      const response = await fetch("http://localhost:4141/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pharmacyName, password, address, license, ogrn, inn }),
      });
      const data = await response.json();
      if (data.token) {
        window.localStorage.setItem("token", data.token);
        return { ...data, pharmacyName };
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginPharmacy = createAsyncThunk("auth/loginPharmacy", async ({ pharmacyName, password }) => {
  try {
    const response = await fetch("http://localhost:4141/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pharmacyName, password }),
    });
    const data = await response.json();
    if (data.token) {
      window.localStorage.setItem("token", data.token);
      return { ...data, pharmacyName };
    }
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getPharmacys = createAsyncThunk("get/users", async () => {
  try {
    const response = await fetch("http://localhost:4141/pharmacy");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

export const getPharmacy = createAsyncThunk("get/pharmacy", async ({ id }) => {
  try {
    const response = await fetch(`http://localhost:4141/pharmacy/:${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

export const deletePharmacyByName = createAsyncThunk("delete/user", async (pharmacyName, thunkAPI) => {
  try {
    await fetch(`http://localhost:4141/${pharmacyName}`, {
      method: "DELETE",
    });
    return pharmacyName;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const pharmacySlice = createSlice({
  name: "Pharmacy",
  initialState,
  reducers: {
    logout: (state) => {
      state.pharmacyName = null;
      state.pharmacyNames = [];
      state.token = null;
      state.isLoading = false;
    },
    extraReducers: {
      [registerPharmacy.pending]: (state) => {
        state.isLoading = true;
        state.status = null;
      },
      [registerPharmacy.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.status = "success";
        state.pharmacyName = action.payload.pharmacyName;
        state.token = action.payload.token;
      },
      [registerPharmacy.rejected]: (state) => {
        state.isLoading = false;
        state.status = "failed";
      },
      [loginPharmacy.pending]: (state) => {
        state.isLoading = true;
        state.status = null;
      },
      [loginPharmacy.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.status = "success";
        state.pharmacyName = action.payload.pharmacyName;
        state.token = action.payload.token;
      },
      [loginPharmacy.rejected]: (state) => {
        state.isLoading = false;
        state.status = "failed";
      },
      [getPharmacys.pending]: (state) => {
        state.isLoading = true;
        state.status = null;
      },
      [getPharmacys.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.status = "success";
        state.pharmacyNames = action.payload;
      },
      [getPharmacys.rejected]: (state) => {
        state.isLoading = false;
        state.status = "failed";
      },
      [deletePharmacyByName.pending]: (state) => {
        state.isLoading = true;
        state.status = null;
      },
      [deletePharmacyByName.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.status = "success";
        state.pharmacyNames = state.pharmacyNames.filter((pharmacy) => pharmacy.pharmacyName !== action.payload);
      },
      [deletePharmacyByName.rejected]: (state) => {
        state.isLoading = false;
        state.status = "failed";
      },
      [pharmacyExit.fulfilled]: (state) => {
        state.pharmacyName = null;
        state.token = null;
        localStorage.removeItem("token");
      },
    },
  }
});

export const { logout } = pharmacySlice.actions;

export default pharmacySlice.reducer;