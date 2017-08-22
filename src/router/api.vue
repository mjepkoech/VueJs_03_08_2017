<template>

    <div class="columns medium-3">
      <button class="button" @click="addItem">Add Item</button>
    </div>


</template>

<script>

import Vue from 'vue'
import axios from 'axios'

export default {
  name: 'api',
  data() {
    return
    {
        test: 'something'

    }

   },

   methods: {

        addItem () {

            let testData = { name: 'Sharon', amount: 12000, time: '10 am' };

            let postUrl = "https://vuejs-6df6a.firebaseio.com";


            axios.post(postUrl, testData)
            .then(function (response)
            {
                console.log(response.data, "result");
            }, function (response) {
                console.log("error");
            });
        }
   },

   mounted()
   {

   }
   }