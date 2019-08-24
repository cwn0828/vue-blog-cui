// 优化：把main.js中routes数组中配置的路由抽离到router.js中
import ShowBlogs from './components/ShowBlogs'
import AddBlog from './components/AddBlog'
import ListBlogs from './components/ListBlogs'
import SingleBlog from './components/SingleBlog'

export default [
    { path: "/", component: ShowBlogs },
    { path: "/add", component: AddBlog },
    { path: "/list", component: ListBlogs },
    { path: "/blog/:id", component: SingleBlog },
]