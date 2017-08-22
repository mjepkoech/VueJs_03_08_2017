
<template>
  <div class="container2">
   <img src="./slide2.jpg" height="400px" width="100%" alt="">
     <h2 class="title">My Hobbies</h2>
            <ul>
                <li v-for="passion in passions" v-text="passion"></li>
            </ul>
            <input id="input" type="text" v-model="newPassion" v-focus>
            <button @click="addPassion">Add Hobby</button>
           <div v-demo:foo.a.b="message"></div>

   <p>{{ count }}</p>
   <p>
    <button @click="increment_counter">+</button>
    <button @click="decrement_counter">-</button>
  </p>

        <watch class="section"></watch>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
  return{
   message: 'hello!',
  newPassion: '',
            passions: ['Playing Piano', 'Coding', 'Skating']
  }

        },

  computed: {
    count () {
      return this.$store.state.count
    }
  },

directives: {
  demo: function (el, binding, vnode) {
      var s = JSON.stringify
      el.innerHTML =
        'name: '       + s(binding.name) + '<br>' +
        'value: '      + s(binding.value) + '<br>' +
        'vnode keys: ' + Object.keys(vnode).join(', ')
    },
      focus: {
        // directive definition
      }
},
        methods: {
            addPassion: function() {
                this.passions.push(this.newPassion);
                this.newPassion = '';
                alert('Hobby Added');
                },
            increment_counter () {
               this.$emit('increment_counter')
               this.$store.commit('increment_counter')
             },

            decrement_counter () {
               this.$emit('decrement_counter')
               this.$store.commit('decrement_counter')
             }
          }
  }

</script>

<style>
        .container2 { 
            padding-bottom: 40px;
            background-color: #D0DEFC ;
         } 
      
</style>