<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>第二天工作内容：所有博客</h1>
    <!-- search -->
    <input type="text" v-model="search" placeholder="search something......" />
    <div v-for="(blog,index) in filterdBlogs" :key="index" class="single-blog">
      <router-link :to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>{{blog.body | snipppet}}</article>
    </div>
  </div>
</template>
<script>
import searchMixin from "../mixins/searchMixins";
export default {
  name: "showBlogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    // 拉取数据，存到数组中去
    this.$axios.get("/posts").then(res => {
      console.log(res.data);
      this.blogs = res.data.slice(0, 10);
    });
  },
  // 实现指令的地方
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  },
  filters: {
    // "to-uppercase":function(value){
    //   return value.toUpperCase();
    // }
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  mixins: [searchMixin]
};
</script>
<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

input[type="text"] {
  padding: 8px;
  width: 100%;
  /* border-box:边框和内边距的值是包含在width内的 */
  box-sizing: border-box;
}
</style>
