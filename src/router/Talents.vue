<template>
    <div class="container2">
     <img src="./slide2.jpg" height="400px" width="100%" alt=""> 
        <h2 class="title">My Skills</h2>
        <ul>
          <li v-for="skill in skills" v-text="skill.description"></li>
        </ul>
        <button class="button" @click="addHobby">Test API</button>
       <watch class="section"></watch>

    </div>
</template>


<script>
import Vue from 'vue'
import axios from 'axios'

  export default { 
  name: 'Talents',
  data() {
        return{
        test: 'something',
            title: 'Hello',
            skills: [
                { description: 'Programming', talent: true },
                { description: 'Blogging', talent: false },
                { description: 'Web Design', talent: true },
                { description: 'Networking', talent: false }
            ]
        }
    }, 
  methods: {
    addHobby () {
            let postUrl = "https://vuejs-6df6a.firebaseio.com/.json";
            let testData = { name: 'Millie', Hobby: 'playing bass guitar'};
            axios.post(postUrl, testData)
            console.log('Done');
        }
   },

   mounted(){}
   }

</script>

<style>
        .container2 { 
            padding-bottom: 40px;
            background-color: #D0DEFC ;
         } 
      
</style>