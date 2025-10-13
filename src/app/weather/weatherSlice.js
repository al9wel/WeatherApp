import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import Swal from "sweetalert2";

const initialState = {
    city: "mukalla",
    data: {
        city: "",
        country: "",
        date: "",
        temp: null,
        description: null,
        wind: "",
        feels: "",
        humidity: "",
    },
    loader: false
};
const successError = async (icon, title, text) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        color: "#fff",
        background: "#050f16",
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    await Toast.fire({
        icon: icon,
        title: title,
        text: text
    });
}
export const getWeather = createAsyncThunk(
    "weather/getWeather",
    async (city, { rejectWithValue }) => {
        const BASE_URL = "https://api.openweathermap.org/data/2.5";
        const API_KEY = import.meta.env.VITE_API_KEY;
        try {
            const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}`);
            const data = await response.json();
            if (!response.ok) {
                return rejectWithValue({ code: data.cod, message: data.message });
            }
            return data;
        } catch {
            return rejectWithValue({ code: 0, message: "Network error, please check connection" });
        }
    }
);

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        changeCity: (state, action) => {
            state.city = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state) => {
                state.loader = true
            })
            .addCase(getWeather.fulfilled, (state, action) => {
                const data = action.payload;
                state.data = {
                    city: data.name,
                    country: data.sys.country,
                    date: moment().format("D/MM/YYYY"),
                    temp: Math.floor(data.main.temp - 272),
                    description: data.weather[0].description,
                    wind: data.wind.speed,
                    feels: Math.floor(data.main.feels_like - 272),
                    humidity: data.main.humidity,
                    icon: data.weather[0].icon,
                };
                state.loader = false
                successError("success", "", "Data Recived Successfully")
            })
            .addCase(getWeather.rejected, (state, action) => {
                state.data = {
                    city: "?",
                    country: "?",
                    date: moment().format("D/MM/YYYY"),
                    temp: "0",
                    description: "?",
                    wind: "0",
                    feels: "0",
                    humidity: "0",
                    icon: "?",
                };
                state.loader = false
                successError("error", action.payload.code, action.payload.message)
            });
    },
});

export const { changeCity } = weatherSlice.actions;
export default weatherSlice.reducer;