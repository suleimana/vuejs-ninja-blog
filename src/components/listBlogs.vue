<template>
    <div  v-theme:column="'wide'" id="show-blogs">
        <h1>List Articles</h1>
        <input type="text" v-model="search" placeholder="Search for blog by title"/>
        <div class="single-blog" v-for="blog in filteredBlogs">            
            <h2 v-rainbow >{{blog.title | to-uppercase}}</h2>
            <article>{{blog.body | snippet}}</article> 
        </div>
      
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
    

    data() {

        return {
            blogs:[],
            search:''           
        }
    },
    computed:{
        // filteredBlogs:function(){
        //     return this.blogs.filter(blog =>{                
        //         return blog.title.match(this.search);
        //     })
        //}
    },
    methods:{
    },
    created: function(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            console.log(data);
            this.blogs = data.body.slice(0,10);
        });
    },
    filters:{
        toUppercase(value){
            return value.toUpperCase();
        }
    },
    directives:{
        'rainbow':{
            bind(el, binding,vnode){
                  el.style.color = '#' + Math.random().toString().slice(2,8);
            }
        }
    },
    mixins:[searchMixin]

    
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    background: #eee;
    box-sizing: border-box;
    padding: 20px;
    margin:  20px 0;

}

</style>
