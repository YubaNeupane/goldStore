import *  as API from "../Api";
export const ADD_PRODUCT = "ADD_PRODUCT";

export const addProduct = () => async (dispatch)=>{
  try {
      const {data} = await API.getProductDetails();
      dispatch({type:"ADD_PRODUCT",payload:data});
  } catch (error) {
      console.log(error);
  }  

};