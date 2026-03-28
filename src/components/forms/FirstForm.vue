<script setup>
import '../../assets/main.css'
import { onMounted, ref, watchEffect } from 'vue';

const inputText = ref('') ;
const message = (e) => {
    inputText.value
}
const count = ref(0) ;
const checked = ref('checked')
const picked = ref(Boolean) ;
watchEffect(() => {
    console.log("Count>>0" , count.value)
})

  //test form 
  const tasks = ref(['Task One' , 'Task Two' , 'Task Three']) ;
  const department = ref(['It' , 'SD' , 'Account' , 'Hr' , 'Designer']) ;  
  const newTask = ref('' ) ;
  const addTask = () => {
    if(newTask.value.trim() !== '') {
        tasks.value.push(newTask.value) ;
        newTask.value = '' ;
    }
  }

  const deleteTask = (index) => {
    tasks.value.splice(index , 1) ;
  }

 onMounted(async () => {
  try {
    // Adding ?_limit=10 so you don't get 200 items at once
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.error("Error>>", error);
  }
});

</script>
<template>
   <form action="" @submit.prevent = "addTask">
    <label for="">Add Task</label> 
    <input 
      id="taskInput" 
      type="text" 
      v-model="newTask" 
      placeholder="Enter a new task" 
    />
    <button type="submit">Submit</button>
    <h3 class="text-red-500">Task</h3> 
    <ul>
        <li v-for="task in tasks" :key="task" >
            <span class="text-red-500">{{ task }}</span>
            <button @click="deleteTask">Delete</button>
        </li>
    </ul>
   </form>
<input type="text" v-model="model" />
</template>

<style scoped>
</style>
