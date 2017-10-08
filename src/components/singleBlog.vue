<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>                
        <p>Author: {{blog.author}}</p>
        <h4>Catigories:</h4>
        <ul>
            <li v-for="cat in blog.catigories">
                {{cat}}
            </li>
        </ul>

    </div>
</template>
<script>
export default {
  data(){
      return{
          id: this.$route.params.id,
          blog:{}
      }
  },
  created(){
    //   this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id)
    //   .then(function(data){          
    //       this.blog = data.body;
    //   })

    this.$http.get('https://ninja-vue.firebaseio.com/posts/'+  this.id +'.json' )
      .then(function(data){          
          console.log(data.body)
          this.blog = data.body;
      })

  }
}
</script>
<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>

