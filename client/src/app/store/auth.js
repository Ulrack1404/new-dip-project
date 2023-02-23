import { createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import userService from "../services/users.service";
import { errorsListener } from "../utils/errorsListener";
import history from "../utils/history";

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          userId: localStorageService.getUserId(),
          isLoggedIn: true,
          error: null,
          isLoading: true
      }
    : {
          entities: null,
          userId: null,
          isLoggedIn: false,
          signUpError: null,
          signInError: null,
          isLoading: true
      };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        usersRequested(state) {
            state.isLoading = true;
        },
        usersReceived(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        usersRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        authRequested: (state) => {
            state.error = null;
        },
        authRequestSuccess(state, action) {
            state.userId = action.payload;
            state.isLoggedIn = true;
        },
        authSignInRequestFailed(state, action) {
            state.error = action.payload;
        },
        authSignUpRequestFailed(state, action) {
            state.error = action.payload;
        },
        userCreated(state, action) {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        userLogOut(state) {
            state.isLoggedIn = false;
            state.userId = null;
        }
    }
});

const { reducer: authReducer, actions } = authSlice;
const {
    usersRequested,
    usersReceived,
    usersRequestFailed,
    authRequested,
    authRequestSuccess,
    authSignInRequestFailed,
    authSignUpRequestFailed,
    userCreated,
    userLogOut
} = actions;

const errorCatcher = (error) => {
    let errorMessage;
    const { code, message } = error.response.data.error;
    if (code === 400) {
        errorMessage = errorsListener(message);
    } else {
        errorMessage = error.message;
    }
    return errorMessage;
};

export const loadUsersList = () => async (dispatch) => {
    dispatch(usersRequested());
    try {
        const { content } = await userService.get();
        dispatch(usersReceived(content));
    } catch (error) {
        dispatch(usersRequestFailed(error.message));
    }
};

export const signIn =
    ({ payload, redirect }) =>
    async (dispatch) => {
        dispatch(authRequested());
        try {
            const data = await authService.login(payload);
            localStorageService.setTokens(data);
            dispatch(authRequestSuccess(data.userId));
            history.push(redirect);
        } catch (error) {
            const errorMessage = errorCatcher(error);
            dispatch(authSignInRequestFailed(errorMessage));
        }
    };

export const signUp = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const data = await authService.register(payload);
        localStorageService.setTokens(data);
        dispatch(authRequestSuccess(data.userId));
    } catch (error) {
        const errorMessage = errorCatcher(error);
        dispatch(authSignUpRequestFailed(errorMessage));
    }
};

export const logout = () => (dispatch) => {
    localStorageService.removeAuthData();
    dispatch(userLogOut());
    history.push("/");
};

export const getCurrentUserData = () => (state) => {
    return state.auth.entities
        ? state.auth.entities.find((user) => user._id === state.auth.userId)
        : null;
};
export const getAuthUserId = () => (state) => state.auth.userId;

export const getUserById = (id) => (state) => {
    return state.auth.entities.find((user) => user.id === id);
};

export const getAuthErrors = () => (state) => state.auth.error;
export const getIsLoading = () => (state) => state.auth.isLoading;
export const getIsLoggedIn = () => (state) => state.auth.isLoggedIn;
export default authReducer;
