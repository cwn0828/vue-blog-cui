<template>
  <nav>
    <ul>
      <li>
        <!-- a标签每次点击时都会重新加载整个项目 -->
        <!-- <a href="/">首页</a> -->
        <!-- 优化 -->
        <router-link exact to="/">首页</router-link>
      </li>
      <li>
        <!-- <a href="/add">添加博客</a> -->
        <router-link exact to="/add">添加博客</router-link>
      </li>
      <li>
        <!-- <a href="/list">测试Mixin混入</a> -->
        <router-link exact to="/list">测试Mixin混入</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "mr-header"
};
</script>

<style scoped>
ul {
  list-style: none;
  text-align: center;
  margin: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}

nav {
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}

.router-link-active {
  background: #eee;
  color: #444;
}
</style>
