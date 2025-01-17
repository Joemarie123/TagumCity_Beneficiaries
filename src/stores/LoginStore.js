import { defineStore } from "pinia";
import axios from "axios";

export const useLoginStore = defineStore("LoginStore", {
  state: () => ({
    user: [],
    // isAuthenticated: false,
  }),
  actions: {
    async userlogin(payload) {
      // console.log("Payload =", payload);
      try {
        let res = await axios.post(
          "http://10.0.1.26:82/beneficiary/login.php",
          payload
        );
        this.user = res.data.auth;
        console.log("data=", this.user);

        return res;
      } catch (error) {
        return 0;
        console.error("Error:", error);
        // Handle the error as needed
      }
    },
  },
  persist: true,
});
