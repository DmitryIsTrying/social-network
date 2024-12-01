import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "api-key": "382bfce1-2258-420f-a736-6160001df197",
  },
});

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 10) {
    try {
      const res = await instance.get(
        `users?page=${currentPage}&count=${pageSize}`
      );
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
  async getProfile(id) {
    try {
      const res = await instance.get(`profile/${id}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching get profile:", error);
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
};
