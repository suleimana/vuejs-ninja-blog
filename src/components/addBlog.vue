<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form v-if="!submited"> 
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required/>
            <label>Blog Contnet:</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <label>Blog Catigories:</label>
            <div id="checkboxes">
                <label>Ninja</label>
                <input type="checkbox" value="ninja" v-model="blog.catigories">
                <label>Mario</label>
                <input type="checkbox" value="mario" v-model="blog.catigories">
                <label>Youshi</label>
                <input type="checkbox" value="youshi" v-model="blog.catigories">
                <label>Conanan</label>
                <input type="checkbox" value="conanan" v-model="blog.catigories">
            </div>
            <label>Author:</label>
            <select v-model="blog.author">
                <option v-for="author in authors"> {{author}}</option>
            </select>
            <button v-on:click.prevent="postBlog">Add Blog</button>
        </form>
        <div v-if="submited">
            Thanks! You post has been submitted 
        </div>
        <div id="preview">
            <h3>Preview blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p style="white-space: pre">{{ blog.content }}</p>
            <p>Blog Catigories:</p>
            <ul>
                <li v-for="catigory in blog.catigories">{{catigory}}</li>
            </ul>
            <p>Author:</p>
            <p>{{blog.author}}</p>
        </div>
    </div>
</template>

<script>

export default {

    data() {

        return {
            blog: {
                title: '',
                content: '',
                author:'',
                catigories:[]
            },
            authors:['Suleiman Alrosan', 'Ninja Man', 'Super Man'],
            submited: false
        }
    },
    methods:{
        postBlog:function(){
            this.$http.post('https://ninja-vue.firebaseio.com/posts.json',this.blog).then(function(data){
                console.log(data);
                this.submited = true;
            })
            ;

        }
    }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block

}

#checkboxes label{
    display: inline-block

}

</style>
