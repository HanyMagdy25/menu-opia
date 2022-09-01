import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getproducts = createAsyncThunk(
  "product/getproducts",
  async (_, thunkApi) => {
    const { rejectedWithValue } = thunkApi;
    try {
      const res = await fetch("https://camera.eaglefits.net/api.php?products");
      const data = await res.json();
      // console.log("data", data);
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);
export const getOneProduct = createAsyncThunk(
  "product/getOneProduct",
  async (id, thunkApi) => {
    const { rejectedWithValue } = thunkApi;
    try {
      const res = await fetch(
        `https://camera.eaglefits.net/api.php?product=${id}`
      );
      const data = await res.json();
      // console.log("data", data);
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

// export const insertbooks = createAsyncThunk(
//   "book/insertbook",
//   async (bookData, thunkApi) => {
//     const { rejectedWithValue } = thunkApi;
//     try {
//       const res = await fetch("http://localhost:8000/books", {
//         method: "POST",
//         body: JSON.stringify(bookData),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json()
//       return data
//     } catch (error) {
//      return rejectedWithValue(error.message)
//     }
//   }
// );

export const productSlice = createSlice({
  name: "product",
  initialState: { products: [], product: [], isloading: false, error: null },
  extraReducers: {
    // get products
    [getproducts.pending]: (state, action) => {
      // console.log(action);
      state.isloading = false;
    },
    [getproducts.fulfilled]: (state, action) => {
      // console.log("25", action);
      state.isloading = true;
      state.products = action.payload;
    },
    [getproducts.rejected]: (state, action) => {
      // console.log("12", action);
      state.isloading = false;
      state.error = action.error.message;
    },

    // get one product
    [getOneProduct.pending]: (state, action) => {
      // console.log(action);
      state.isloading = true;
    },
    [getOneProduct.fulfilled]: (state, action) => {
      // console.log("25", action);
      state.isloading = false;
      state.product.push(action.payload);
    },
    [getOneProduct.rejected]: (state, action) => {
      // console.log("12", action);
      state.isloading = false;
      state.error = action.error.message;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = bookSlice.actions

export default productSlice.reducer;
