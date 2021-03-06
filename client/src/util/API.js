import axios from "axios";

export default {
  getAllPosts: function () {
    return axios.get("/api/posts")
  },
  addNewPost: function (postBody) {
    return axios.post("/api/posts", postBody)
  },
  createUser: function (userData) {
    return axios.post("/api/users/signUp", userData);
  },
  login: function (loginInfo) {
    return axios.post("/api/users/signIn", loginInfo);
  },
  getUser: function (user) {
    return axios.get('/api/users/' + user)
  },
  getPostsByAuthor: function (author) {
    return axios.get('/api/posts/author/' + author)
  },
  getPostById: function (id) {
    return axios.get('/api/posts/' + id)
  },
  signUpForPost: function (id, volunteer) {
    return axios.put("/api/posts/" + id, volunteer)
  },
  editPost: function (id, editedPost) {
    return axios.put("/api/posts/edit/" + id, editedPost)
  },
  editUser: function (id, editedUser) {
    return axios.put("/api/users/edit/" + id, editedUser)
  },
  deletePost: function (id) {
    return axios.delete("/api/posts/" + id);
  }
  //   checkAuthenticated: function () {
  //     return axios.get("/api/users/authenticated")
  //   }
};
