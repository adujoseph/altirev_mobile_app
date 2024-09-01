import {postRequest} from './makeRequest';

interface UserLogin {
  email: string;
  password: string;
}
export const userLogin = async (payload: UserLogin) => {
  const url = `/v1/auth/login`;
  return await postRequest(url, payload);
};

interface RegisterUser {
  email: string;
  password: string;
  firstName: String;
  lastName: String;
  username: String;
  phoneNumber: String;
  gender: string;
  state: String;
  country: String;
  paymentRef: String;
  planId: String;
}

export const registerUser = async (payload: RegisterUser) => {
  const url = `/v1/auth/register`;
  return await postRequest(url, payload);
};

interface InitiateOtp {
  email: string;
  phone: string;
}
export const initiateOtp = async (payload: InitiateOtp) => {
  const url = `/v1/auth/initiate`;
  return await postRequest(url, payload);
};
interface VerifyOtp {
  email: string;
  token: string;
}
export const verifyOtp = async (payload: VerifyOtp) => {
  const url = `/v1/auth/verifyOtp`;
  return await postRequest(url, payload);
};

interface ForgotOtp {
  email: string;
}
export const forgotPassword = async (payload: ForgotOtp) => {
  const url = `/v1/auth/forgot-password`;
  return await postRequest(url, payload);
};

interface ForgotOtp {
    email: string;
  }
export const resetPassword = async (payload: ForgotOtp )=> {
  const url = `/v1/auth/reset-password`;
  return await postRequest(url, payload);
};

export const userLogout = async (payload: any)=> {
  const url = `/v1/auth/logout`;
  return await postRequest(url, payload);
};
