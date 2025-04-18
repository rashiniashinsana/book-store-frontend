import {configureStore} from "@reduxjs/toolkit";
import flowerReducer from "../slice/bookSlice";
import userSlice from "../slice/userSlice";
import {useReducer} from "react"; // ✅ Correct Import

export const store = configureStore({
    reducer: {
        flowers: flowerReducer,
        users: userSlice,
        // ✅ Use `flowerReducer`, not `bookSlice`
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
