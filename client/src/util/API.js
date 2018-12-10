import axios from "axios";

export default {
  uploadImage: function () {
    return axios.post("cloudinary upload");
  },
  getAllPosts:function(){
    return axios.get("/api/posts")
  },
  addNewPost:function(postBody) {
    return axios.post("/api/posts", postBody)
  },
  // login: function (loginInfo) {
  //   return axios.post("/api/users/signIn", loginInfo);
  // }
//   createUser: function (userData) {
//     return axios.post("/api/users/signUp", userData);
//   },
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
