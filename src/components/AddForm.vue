<template>
  <div>
    <h1 class="title">Add New Book</h1>
    <form @submit.prevent="saveProduct">
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
            id="file"
            ref="file"
            v-on:change="handleFileUpload()"
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
      price: "",
    };
  },
  methods: {
    async saveProduct() {
      try {
        let formData = new FormData();
        formData.append("file", this.file);

        await axios.post(
          "product",
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
          {
            author: this.author,
            title: this.title,
            description: this.description,
            poster_image: formData,
          }
        );
        (this.title = ""), (this.price = ""), this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>

<style></style>
