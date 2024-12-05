import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "api-key": "382bfce1-2258-420f-a736-6160001df197",
    Authorization: "Bearer 4f7a70e2-e906-4bca-ba05-d73889809c98",
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
};
