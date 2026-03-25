<script setup>
import { ref } from 'vue';

const emoji = ref ('hello') ;
const name = ref("Rachel") ;
const year = ref("2026") ;
const quote = ref("First , solve the problem.Then , write the code") ;
const author = ref("Hnin Su") ;
const href = ref("https://vuejs.org") ;
const isDisabled = ref(true);
quote.value = "It is a feature , not a bug." 
author.value = "Unknown" ;

</script>

<template>
  <header>
    <span>{{ emoji }}</span>
  </header>
  <main>
    <!-- <h1>Hello , {{ name }}</h1>
    <p>I'm about to learn <a href="https://vuejs.org">Vue.js</a></p> -->
    <section>
      <p>{{ quote }}</p>
      <a target="_blank" v-bind:href="href"> <span>{{ author }}</span></a>
    </section>
    <section id="buttons">
      <button v-bind:disabled="isBtnDisabled" >Another</button>
      <button v-bind:disabled="isBtnDisabled" >Share</button>
    </section>
  </main>
  <footer>
    <p>&copy; {{ year }}</p>
  </footer>
</template>

<style scoped> 

</style>
