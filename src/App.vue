<template>
  <div id="app">
    <!-- <AddBlog></AddBlog> -->
    <Header />
    <!-- 缓存机制：只请求一次 -->
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
    <!-- <ShowBlogs />
    <ListBlogs />-->
  </div>
</template>
<script>
// import AddBlog from "./components/AddBlog";
// import ShowBlogs from "./components/ShowBlogs";
// import ListBlogs from "./components/ListBlogs";
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    // AddBlog
    // ShowBlogs,
    // ListBlogs
    Header
  }
};
</script>
<style>
</style>
