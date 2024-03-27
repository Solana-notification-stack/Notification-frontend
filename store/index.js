import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authState: false,
  token:null,
  user:null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
    setSignUp:(state,action)=>{
        state.authState='true'
        state.token=action.payload;
    },
    setLogin:(state,action)=>{
        state.authState="true"
        state.token=action.payload;
    }
  },
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;