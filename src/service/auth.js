import api from "./api.js"

export const loginUser = async (email, password, remember) => {
  try {
    const { data } = await api.post("/api/auth/login", {
      email,
      password,
      remember,
    })

    // Save JWT
    localStorage.setItem("token", data.token)

    return data
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Invalid email or password"
    )
  }
}

export const logoutUser = async () => {
  await api.post("/api/auth/logout")
  localStorage.removeItem("token")
}
