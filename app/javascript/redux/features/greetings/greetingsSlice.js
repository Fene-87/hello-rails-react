import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    greetings: [],
    status: 'idle',
    error: null
}

export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async () => {
    try {
        const response = await axios.get('http://127.0.0.1:3000/api/v1/greetings')
        return response.data
    } catch (error) {
        return error.message
    }
})

const greetingsSlice = createSlice({
    name: 'greetings',
    initialState,
    extraReducers(builder) {
        builder
          .addCase(fetchGreetings.pending, (state) => ({
            ...state,
            status: 'loading'
          }))
          .addCase(fetchGreetings.fulfilled, (state, { payload }) => {
            state.status = 'success';
            state.greetings = state.greetings.concat(payload);
          })
          .addCase(fetchGreetings.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
    }
})

export default greetingsSlice.reducer;
