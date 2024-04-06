import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authState:'false',
  token:null,
  user:null,
  appSecret:null,
  appData:null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
    setSignUp:(state,action)=>{
        state.authState='true'
        state.token=action.payload.token;
    },
    setLogin:(state,action)=>{
       console.log(state.authState)
        state.authState="true"
        state.token=action.payload.token;
        console.log(state.token,"redux")
    },
    setLogout:(state)=>{
       state.token=null
      state.authState=false

        },
        setAppSecret:(state,action)=>{
          state.appSecret=action.payload.appSecret
        },
        setAppData:(state,action)=>{
         
          state.appData=action.payload.appData
        }
  },
});

export const { setSignUp,setLogin,setLogout,setAppSecret,setAppData } = authSlice.actions;
export const selectToken = (state)=>state.auth.token
export const authReducer = authSlice.reducer;