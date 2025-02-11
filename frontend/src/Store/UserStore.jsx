import { create } from "zustand";
import axios from "axios";

export const useUserStore = create((set) => ({
    user: null,
    isLoading: false,
    error: "",
    message: "",
    toast: { message: "", type: "" },

    setToast: (message = "", type = "") => set({ toast: { message, type } }),

    login: async (studentId, password) => {
        try {
            set({ isLoading: true, error: "", message: "", toast: { message: "", type: "" } });

            const response = await axios.post("http://localhost:5000/api/auth/login", { studentId, password });

            console.log("Login response:", response.data);

            if (response.data.success) {
                if (typeof window !== "undefined") {
                    localStorage.setItem("token", response.data.token);
                }
                set({
                    user: response.data.user,
                    message: response.data.message,
                    isLoading: false,
                    toast: { message: "Login successful!", type: "success" }
                });
            } else {
                set({
                    user: null,
                    error: response.data.message || "Login failed",
                    isLoading: false,
                    toast: { message: response.data.message || "Login failed", type: "error" }
                });
            }

        } catch (error) {
            console.error("Login error:", error);
            set({
                user: null,
                error: error?.response?.data?.message || "Something went wrong",
                isLoading: false,
                toast: { message: error?.response?.data?.message || "Login failed", type: "error" }
            });
        }
    },

    signUp: async (name, email, studentId, password, program, gender) => {
        try {
            set({ isLoading: true, error: "", message: "", toast: { message: "", type: "" } });

            const response = await axios.post("http://localhost:5000/api/auth/register", { name, email, studentId, password, program, gender });

            console.log("Signup response:", response.data);

            if (response.data.success) {
                set({
                    user: response.data.user,
                    message: response.data.message,
                    isLoading: false,
                    toast: { message: "Signup successful!", type: "success" }
                });
            } else {
                set({
                    user: null,
                    error: response.data.message || "Signup failed",
                    isLoading: false,
                    toast: { message: response.data.message || "Signup failed", type: "error" }
                });
            }

        } catch (error) {
            console.error("Signup error:", error);
            set({
                user: null,
                error: error?.response?.data?.message || "Something went wrong",
                isLoading: false,
                toast: { message: error?.response?.data?.message || "Signup failed", type: "error" }
            });
        }
    },
}));
