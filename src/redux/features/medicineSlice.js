import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  typeDosage: [
    "Капли",
    "Настойка",
    "Настои",
    "Сироп",
    "Суспензия",
    "Эмульсия",
    "Ккапсулы",
    "Таблетки",
    "Порошки",
    "Гранулы",
    "Драже",
    "Мазь",
    "Гель",
    "Суппозитории",
    "Паста",
    "Крем",
    "Аэрозоли",
  ],
  selectTypeDosage: [],
  medicines: [],
  medicine: {},
  status: "",
  error: null,
};

export const fetchMedicines = createAsyncThunk("fetch/medicines", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4141/meds");
    return res.json();
  } catch (error) {
    return error;
  }
});

export const fetchMedicineById = createAsyncThunk("fetch/medicineById", async (id, thunkApi) => {
  try {
    const res = await fetch(`http://localhost:4141/med/${id}`);
    return res.json();
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

export const addMedicine = createAsyncThunk(
  "add/medicine",
  async ({ data }, thunkAPI) => {
    try {
      const medicine = await fetch("http://localhost:4141/med", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pharmacyName: data.get('pharmacyName'),
          address: data.get('address'),
          img: data.get('img'),
          medName: data.get('name'),
          weight: data.get('weight'),
          methodOfAdministrationAndDose: data.get('methodOfAdministration'),
          typeOfDosageForm: data.get('typeOfDosageForm'),
          dateOfManufacture: data.get('dateOfManufacture'),
          expirationDate: data.get('expirationDate'),
          series: data.get('series'),
          price: data.get('price'),
          barcode: data.get('barcode'),
          storageConditions: data.get('storageConditions'),
          countInStock: data.get('countInStock'),
          category: data.get('cat'),
        }),
      });
      return await medicine.json();
    } catch (error) {
      console.log(error.message);
    }
  },
);
// export const addMedicine = createAsyncThunk("add/medicine", async ({ data }, thunkAPI) => {
//   try {
//     const medicine = await fetch("http://localhost:4141/med", {
//       method: "POST",
//       body: JSON.stringify({
//         pharmacyName: data.get("pharmacyName"),
//         address: data.get("address"),
//         img: data.get("img"),
//         medName: data.get("name"),
//         weight: data.get("weight"),
//         methodOfAdministrationAndDose: data.get("methodOfAdministration"),
//         typeOfDosageForm: data.get("typeOfDosageForm"),
//         dateOfManufacture: data.get("dateOfManufacture"),
//         expirationDate: data.get("expirationDate"),
//         series: data.get("series"),
//         price: data.get("price"),
//         barcode: data.get("barcode"),
//         storageConditions: data.get("storageConditions"),
//         countInStock: data.get("countInStock"),
//         category: data.get("cat"),
//       }),
//     });
//     return await medicine.json();
//   } catch (error) {
//     console.log(error.message);
//   }
// });

export const deleteMedicine = createAsyncThunk("delete/medicine", async (id, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:4141/med/${id}`, {
      method: "DELETE",
    });
    return await res.json();
  } catch (error) {
    return error;
  }
});

export const updateMedicine = createAsyncThunk("update/medicine", async ({ medId, data }) => {
  try {
    const res = await fetch(`http://localhost:4141/med/${medId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pharmacyName: data.get("pharmacyName"),
        address: data.get("address"),
        img: data.get("img"),
        medName: data.get("name"),
        weight: data.get("weight"),
        methodOfAdministrationAndDose: data.get("methodOfAdministration"),
        typeOfDosageForm: data.get("typeOfDosageForm"),
        dateOfManufacture: data.get("dateOfManufacture"),
        expirationDate: data.get("expirationDate"),
        series: data.get("series"),
        price: data.get("price"),
        barcode: data.get("barcode"),
        storageConditions: data.get("storageConditions"),
        countInStock: data.get("countInStock"),
        category: data.get("cat"),
      }),
    });
    return await res.json();
  } catch (error) {
    return error;
  }
});

export const medicineSlice = createSlice({
  name: "Medicine",
  initialState,
  reducers: {
    switchTypeDosage(state, action) {
      if (state.selectTypeDosage.includes(action.payload)) {
        state.selectTypeDosage = state.selectTypeDosage.filter((type) => {
          return type !== action.payload;
        });
      } else {
        state.selectTypeDosage = [...state.selectTypeDosage, action.payload];
      }
    },
    cleanTypeDosage(state, action) {
      state.selectTypeDosage = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMedicines.pending, (state) => {
        // state.status = "loading";
      })
      .addCase(fetchMedicines.fulfilled, (state, action) => {
        state.medicines = action.payload.medicine;
        state.status = action.payload.message;
      })
      .addCase(fetchMedicines.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      })
      .addCase(fetchMedicineById.pending, (state) => {
        // state.status = "loading";
      })
      .addCase(fetchMedicineById.fulfilled, (state, action) => {
        state.medicine = action.payload.medicine;
        state.status = action.payload.message;
      })
      .addCase(fetchMedicineById.rejected, (state, action) => {
        state.error = action.error.message;
        // state.status = "failed";
      })
      .addCase(addMedicine.pending, (state) => {
        // state.status = "loading";
      })
      .addCase(addMedicine.fulfilled, (state, action) => {
        state.medicines.push(action.payload.medicine);
        state.status = "Лекарство добавлено";
      })
      .addCase(addMedicine.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      })
      .addCase(deleteMedicine.pending, (state) => {
        // state.status = "loading";
      })
      .addCase(deleteMedicine.fulfilled, (state, action) => {
        state.medicines = state.medicines.filter((medicine) => medicine.id !== action.payload.medicine.id);
        state.status = "Удалено";
      })
      .addCase(deleteMedicine.rejected, (state, action) => {
        // state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateMedicine.pending, (state) => {
        // state.status = "loading";
      })
      .addCase(updateMedicine.fulfilled, (state, action) => {
        state.medicines = state.medicines.map((medicine) =>
          medicine.id === action.payload.medicine.id ? action.payload.medicine : medicine,
        );
        state.status = action.payload.message;
      })
      .addCase(updateMedicine.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export default medicineSlice.reducer;
export const { switchTypeDosage, cleanTypeDosage } = medicineSlice.actions;
