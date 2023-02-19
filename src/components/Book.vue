<template>
  <div>
    <h1 class="title">Book List</h1>
    <router-link :to="{ name: 'AddBook' }" class="button is-primary"
      >Add New</router-link
    >
    <table class="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th>Author</th>
          <th>Title</th>
          <th>Description</th>
          <th>Images</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.author }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.description }}</td>
          <td>
            <img v-bind:src="'http://localhost:8000' + book.poster_image" />
          </td>
          <td>
             <router-link
              :to="{ name: 'EditBook', params: { id: book.id } }"
              class="button is-info is-small"
              >Edit</router-link
            >
            <button
              class="button is-danger is-small"
              @click="deleteBooks(book.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Book",
  data() {
    return {
      books: [],
    };
  },
  created() {
    this.getBooks();
  },
  methods: {
    async getBooks() {
      try {
        const response = await axios.get("books/");
        this.books = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteBooks(id) {
      try {
        await axios.delete(`books/${id}/delete/`);
        this.getBooks();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
