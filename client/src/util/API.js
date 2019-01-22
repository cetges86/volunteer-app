import axios from "axios";

export default {
  uploadImage: function (image) {
    return axios.post("/api/users/image/", image);
  },
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
    return axios.get('api/posts/' + author)
  },
  editPost: function (id, volunteer) {
    return axios.put("/api/posts/" + id , volunteer)
  }
  //   
  //   logout: function() {
  //     return axios.get("/api/users/logout");
  //   },
  //   checkAuthenticated: function () {
  //     return axios.get("/api/users/authenticated")
  //   },
  //   getJobs: function(jobTerm) {
  //     return axios.get("/api/users/jobs/"+ jobTerm)
  //   }
};
