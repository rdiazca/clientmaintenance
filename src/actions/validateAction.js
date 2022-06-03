import {
    VALIDATE_FORM_SUCCESS,
    VALIDATE_FORM_ERROR
  } from "../types";

export const    validateSuccess   =   ()  =>  {
    return{
        type:   VALIDATE_FORM_SUCCESS
    }    
}

export const    validateError   =   ()  =>  {
    return{
        type:   VALIDATE_FORM_ERROR
    }    
}