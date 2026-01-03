import api from "./api.js"

export const loginUser = async (email, password, remember) => {
  try {
    const { data } = await api.post("/api/v1/auth/login", {
      email,
      password,
      remember,
    })

    // Save JWT (used by API interceptor)
    localStorage.setItem('authToken', data.token)

    return data
  } catch (error) {
    console.error('Login API error:', error?.response || error)
    throw new Error(error.response?.data?.message || 'Invalid email or password')
  }
}

export const logoutUser = async () => {
  await api.post("/api/v1/auth/logout")
  localStorage.removeItem('authToken')
}
