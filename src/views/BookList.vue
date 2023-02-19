<template>
  <li
    @click.prevent="logout"
    class="list-group-item text-dark text-decoration-none"
    style="cursor: pointer"
  >
    LOGOUT
  </li>
  <Book />
</template>

<script>
import Book from "@/components/Book.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "BookList",
  setup() {
    //state token
    const token = localStorage.getItem("token");

    //inisialisasi vue router on Composition API
    const router = useRouter();

    //mounted properti
    onMounted(() => {
      //check Token exist
      if (!token) {
        return this.$router.push("/");
      }
    });
  },
  components: {
    Book,
  },
};
</script>

<style></style>
