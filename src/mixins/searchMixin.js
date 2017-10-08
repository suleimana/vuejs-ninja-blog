//mixins used for using same code in many vaues 

export default {
    computed: {
        filteredBlogs: function () {
            return this.blogs.filter(blog => {
                return blog.title.match(this.search);
            })
        }
    }
}