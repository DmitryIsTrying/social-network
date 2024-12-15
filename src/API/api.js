import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
  headers: {
    "api-key": process.env.REACT_APP_API_KEY,
    Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
  },
});

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 10) {
    try {
      const res = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  },
  async follow(userId) {
    try {
      const res = await instance.post(`follow/${userId}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching follow:", error);
    }
  },
  async unFollow(userId) {
    try {
      const res = await instance.delete(`follow/${userId}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching unFollow:", error);
    }
  },
};

export const profileAPI = {
  async getProfile(id) {
    try {
      const res = await instance.get(`profile/${id}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching get profile:", error);
    }
  },
  async getStatus(id) {
    try {
      const res = await instance.get(`profile/status/${id}`);
      return res.data;
    } catch (err) {
      console.log("Error fetching get status:", err);
    }
  },
  async updateStatus(status) {
    try {
      const res = await instance.put(`/profile/status`, {
        status,
      });
      return res.data;
    } catch (err) {
      console.log("Error fetching update status:", err);
    }
  },
};

export const authAPI = {
  async me() {
    try {
      const res = await instance.get("auth/me");
      return res.data;
    } catch (error) {
      console.error("Error fetching authentication:", error);
    }
  },
  async login({ email, password, rememberMe = false, captcha = null }) {
    try {
      const res = await instance.post("auth/login", {
        email,
        password,
        rememberMe,
        captcha,
      });

      return res.data;
    } catch (err) {
      console.log("Error with login:", err);
    }
  },
  async logout() {
    try {
      const res = await instance.delete("auth/login");
      return res.data;
    } catch (err) {
      console.log("Error with logout:", err);
    }
  },
  async getCaptcha() {
    try {
      const res = await instance.get("security/get-captcha-url");
      return res.data;
    } catch (err) {
      console.log("Error with captcha:", err);
    }
  },
};
