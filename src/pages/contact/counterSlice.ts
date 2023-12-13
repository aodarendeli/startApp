import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../api/api';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
/* typescript-eslint-disable no-implicit-any */
/* typescript-eslint: disable no-implicit-any */
/* typescript-eslint: disable noImplicitAny */
/* typescript-eslint-disable @typescript-eslint/no-implicit-any */
const initialState:any = {
  basket: "",
  status: '',
  value: 0
}
export const addBasketItemAsync = createAsyncThunk(
  'catalog/fetchProductAsync',
  async () => {
      try {
          return await api.Deneme.get();
      } catch (error) {
          // return error;
          console.log(error)
      }
  }
)
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder => {
    builder.addCase(addBasketItemAsync.pending, (state, action) => {
        console.log(action);
        state.status = 'pendingAddItem' + action.meta.arg;
    });

    builder.addCase(addBasketItemAsync.fulfilled, (state, action) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        state.basket = action.payload;
        state.status = 'idle';
    });
    builder.addCase(addBasketItemAsync.rejected, (state, action) => {
        state.status = 'idle'
        console.log(action.payload);

    });
})
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions
// export const selectCount = (state) => state.counter.value
export default counterSlice.reducer
