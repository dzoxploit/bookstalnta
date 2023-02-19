import { createRouter, createWebHistory } from "vue-router";
import AddBook from "../views/AddBook";
import BookList from "../views/BookList.vue";

const routes = [
  {
    path: "/",
    name: "BookList",
    component: BookList,
  },
  {
    path: "/create",
    name: "AddBook",
    component: AddBook,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
