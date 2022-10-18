import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// ? mustache curly html attributelrinde kullanılmaz.
// * <div :id="dynamicId">   </div>
// ! <button :disabled="isDisabled"> </button>
// ? <p v-if="seen">Now you see me</p>
// *  <a :href="url"> one-way-binding </a>
// !  <a @click="do something"> </a> ==> < a v-on:click="do smthng" >
// ? methodların içinde arrow function ile this keywordune ulasılmaz

{/* <script>  {
    //* provider atadan tüm childe elementlere prop driling yapmadan data göndermeyi sağlar. eger data objesinin içinde ise  provide() { return this.message } şeklinde kullan. provide () ile gönder return içinde obje olarak gönder. inject ile ["key"] şeklinde al.
    
    provider : {
        message : "hello mozz",
    },

    provide () {
        return {
            message : "hello"
        }
    },

    {/* kullanmak için  */}

//     inject : {
//         ["message"]
//     }

//     components : {
//         GeneratedButton,
//     }

  

//     data () {
//         return {

//             styleObject : {
//                     color : "red",
//                     fontSize : '20px'
//             },

//             secondObject : {
//                 title: 'How to do lists in Vue',
//                 author: 'Jane Doe',
//                 publishedAt: '2016-04-10'
//             },

//             awesome : true,

//             items : [

//                 {
//                     message : "vue"
//                 },

//                 {
//                     message : "react"
//                 }

//             ],

            

//             count : 1,
//             hasError : false,
//             author : {
//                 name : "aziz",
//                 books : ["denem1" , "deneme2" , "deneme3"],

//             }
//         }
//     },

//     computed : {

//         publishedMessage () {
//             return this.author.books > 0 ? "yes" : "no"
//         }
           
//     },

  

//     mounted() {
//         this.count = 2 
//     }
//     // burası cıktı olarak 2 yi verecektir.

// </script>

// <template>
//     {{count}} */}
    {/* <span class="staticClassName" :class="{active : isActive , "textDanger" : hasError }"> */}
        {/* hasError true is textDanger classını verecek */}
        {/* {{author.books.length > 0 ? "yes" : "no"}}  ==> conditional rendering */}
        {/* bunu kullanmak yerine computed te yaz buraya function olarak ekle. */}

        {/* {{publishedMessage}} ==> computedten geliyor */}
    {/* </span> */}

        {/* <MyComponent class="deneme" />

        <p :class="$attrs.class">y</p>
        <span>x</span> */}


    {/* <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>  inline stle*/}
        {/* <div :style="styleObject"></div>  inLineStyle */}

        {/* <div v-if="awesome">
            if statement true oldugu zaman calısır
        </div> */}

        {/* <button @click="awesome = !awesome">TOGGLE</button> */}
        {/* <p v-if="awesome">vueJs</p>
        <p v-else>reactJs</p> */}
{/* 
        <div v-for="item in items">
            {{item.message}}
        </div> */}

        {/* <p v-for="(value , key) in secondObject" :key="item.index">

            {{value}} : {{key}}

        </p> */}

        // <GeneratedButton>

        //   CLICK ME => HERE IS SLOT CONTENT
        // </GeneratedButton>



// </template> 
