<template>
  <div>
    <h1 class="title">Add New Book</h1>
    <form enctype="multipart/form-data" @submit.prevent="saveBook">
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
          <button class="button is-primary">Save</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddForm",

  data() {
    return {
      title: "",
      author: "",
      description: "",
      selectedFile: null,
    };
  },
  methods: {
    async saveBook() {
      try {
        const token = localStorage.getItem("token");
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;

        let formData = new FormData();
        formData.append("author", this.author);
        formData.append("title", this.title);
        formData.append("description", this.description);
        formData.append("poster_image", this.selectedFile);

        await axios.post("books/create/", formData);
        (this.title = ""), (this.author = ""), this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
