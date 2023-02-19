<template>
  <div class="container-fluid mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <h4>LOGIN</h4>
            <hr />
            <form @submit.prevent="login">
              <div class="form-group">
                <label>Username</label>
                <input
                  type="text"
                  v-model="username"
                  class="form-control"
                  placeholder="Username"
                />
              </div>

              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="btn btn-primary btn-block">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        let formData = new FormData();
        formData.append("username", this.username);
        formData.append("password", this.password);

        const response = await axios.post("users/token/", formData);
        localStorage.setItem("token", response.data.access);
        (this.username = ""), (this.password = ""), this.$router.push("/books");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
