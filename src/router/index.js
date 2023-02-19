import { createRouter, createWebHistory } from "vue-router";
import AddBook from "../views/AddBook";
import EditBook from "../views/EditBook";
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
  {
    path: "/edit/:id",
    name: "EditBook",
    component: EditBook,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
