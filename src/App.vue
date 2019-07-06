<template>
  <div id="app">
<!--        <img src="../assets/logo.png">-->
<!--    <div>-->
<!--            <ul>-->
<!--              <li v-for="item in movieArr">-->
<!--                <span>{{item.title}}</span>-->
<!--              </li>-->
<!--            </ul>-->
<!--            <button @click="getData">渲染</button>-->
<!--    </div>-->
<!--        <div>-->
<!--          <label>abc:{{songName}}</label>-->
<!--        </div>-->
        <router-view/>
      </div>
</template>

<script>
  import axios from 'axios/index';

  export default {
    name: 'App',
  //   data() {
  //     return {
  //       songName: '',
  //     }
  //   },
  //   methods: {
  //     getData() {
  //       this.$axios.get('/api')
  //         .then((response) => {
  //           console.log(response)
  //           // console.log(response.data.subjects)
  //
  //           this.songName = response.data.sonngList[0].songName
  //           // 这里要强调一下这个this 箭头函数指的是它的父级也就是vue实例  然后不用箭头函数的话 this是一个undefined 无法.movieArr来给他赋值  这里要注意一下 我被坑了半天 希望小伙伴不要被坑
  //         })
  //     }
  //   }
   }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
