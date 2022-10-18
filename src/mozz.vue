<template>

    <p  :class="{ red : isRed}" @click="toogleRed">{{message}}</p>

    <button @click="reverseMessage">click here to reverse sentences</button>

    <button @click="message += '!'">add queMark</button>

    <button @click="list.pop()">pop number</button>
    <button @click="list.reverse()">reverse numbers</button>
    <button @click="list.push(list.length + 1)">add to list</button>

    <ul v-if="show && list.length">
        <li v-for="item in list"> {{item}} </li>
    </ul>

    <input v-model="text"/> {{text}}
    <!-- //? burada her iki taraflı binding olusturduk. -->

    <input type="radio" id="one" value="one" v-model="picked" />
    <label for="one">one</label>

    <input type="radio" id="otwo" value="two" v-model="picked" />
    <label for="two">two</label>


</template>

<script> 
import {store} from "./store.js"
import todoItems from "../components/todoItem.vue"
import demoGrid from "../components/demoGrid.vue"



// const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`



export default  {

        components :  {
            todoItems,
            demoGrid,
        },
       


        data () {
            return  {
                store,
                message : "deneme",
                isRed : true,
                color : "green",
                show : true,
                list : [1,2,3,4,5],
                text : "ancient app",
                picked : "one"
            }
        },

        methods : {

            reverseMessage() {
                this.message.split("").reverse().join("")
            },

            toogleRed() {
                       this.isRed = !this.isRed
            },

            notify () {
                alert("checked")
            }
        }
}
const fetchData = () => {
    fetch(store.url).then((data) => data.json())
}

</script>

 <!-- ? metots ta functionlar yazılıyor.
    ? v-model ile two-way binding yapabiliyoruz. 
    ? we can create two way binding in form values with v-model
?-->



