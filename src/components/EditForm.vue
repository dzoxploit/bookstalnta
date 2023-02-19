<template>
  <div>
    <h1 class="title">Update Book</h1>
    <form enctype="multipart/form-data" @submit.prevent="updateBook">
      <div class="field">
        <label class="label">Author</label>
        <div class="control">
          <input
            type="text"
            v-model="author"
            class="input"
            placeholder="Author"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input
            type="text"
            v-model="title"
            class="input"
            placeholder="Title"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <input
            type="text"
            v-model="description"
            class="input"
            placeholder="Description"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">poster_image</label>
        <div class="control">
          <input
            type="file"
            ref="fileInput"
            @change="selectedFile = $event.target.files[0]"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-primary">Update</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditForm",
  data() {
    return {
      title: "",
      author: "",
      description: "",
      selectedFile: null,
    };
  },
  created() {
    this.getBookById();
  },
  methods: {
    async getBookById() {
      try {
        const token = localStorage.getItem("token");
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;

        const response = await axios.get(`books/?id=${this.$route.params.id}`);
        (this.title = response.data[0].title),
          (this.author = response.data[0].author),
          (this.description = response.data[0].description);
      } catch (error) {
        console.log(error);
      }
    },
    async updateBook() {
      try {
        let formData = new FormData();
        formData.append("author", this.author);
        formData.append("title", this.title);
        formData.append("description", this.description);
        formData.append("poster_image", this.selectedFile);

        await axios.post(`books/update/${this.$route.params.id}/`, formData);
        (this.title = ""), (this.author = ""), this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
