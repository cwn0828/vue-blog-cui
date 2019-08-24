// 把计算属性混入到component中
export default {
    // 计算属性(频繁使用的属性)
    computed: {
        filterdBlogs() {
            return this.blogs.filter(blog => {
                // match()匹配
                return blog.title.match(this.search);
            });
        }
    },
}