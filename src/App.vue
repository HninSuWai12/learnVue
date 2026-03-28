<script setup>
import './assets/main.css' ;
import { onMounted, onUnmounted, ref, watchEffect } from 'vue';
import FirstForm from './components/forms/FirstForm.vue';
// const emoji = ref ('hello') ;
// const name = ref("Rachel") ;
// const year = ref("2026") ;
// const quote = ref("First , solve the problem.Then , write the code") ;
// const author = ref("Hnin Su") ;
// const href = ref("https://vuejs.org") ;
// const isDisabled = ref(true);
// quote.value = "It is a feature , not a bug." 
// author.value = "Unknown" ;

// const count = ref(0) ;
// const nameVale = ref('') ;
// const handleOnclick = (e) => {
//   alert(nameVale.value) ;
// }
// const count = ref(0)

// watchEffect(() => {
//   console.log("watchEffect:", count.value)
// })

// onMounted(() => {
//   console.log("Mounted")
// })

// onUnmounted(() => {
//   console.log("Unmounted")
// })

</script>

<template>
  <FirstForm/>
 <h3 class="text-red-500 text-2xl font-bold">
  Tailwind Working
</h3>
   <!-- <button @click="count++">Add +1</button> -->
  <!-- <header>
    <span>{{ emoji }}</span>
  </header>
  <main>
    <h1>Hello , {{ name }}</h1>
    <p>I'm about to learn <a href="https://vuejs.org">Vue.js</a></p>
    <p>{{ count }}</p>
    <section>
      <p>{{ quote }}</p>
      <a target="_blank" v-bind:href="href"> <span>{{ author }}</span></a>
      <input type="text" @input="(e) => nameVale = e.target.value" />
    </section>
    <section id="buttons">
      <button v-bind:disabled="isBtnDisabled" >Another</button>
      <button v-bind:disabled="isBtnDisabled" >Share</button>
     

      <button @click="handleOnclick">OK name</button>
    </section>
  </main>
  <footer>
    <p>&copy; {{ year }}</p>
  </footer> -->
</template>

<style scoped> 

</style>
