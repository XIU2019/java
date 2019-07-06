<template>

  <div>
    <label>欢迎{{email}}</label>
    <button v-on:click="quit">退出登录</button>
  </div>

</template>

<script>
  import {setCookie, getCookie, delCookie} from '../../assets/js/cookie.js'

  export default {
    name: "home",
    data() {
      return {
        email: ''
      }
    },
    mounted() {
      /*页面挂载获取保存的cookie值，渲染到页面上*/
      let uname = getCookie('email')
      this.email = uname
      /*如果cookie不存在，则跳转到登录页*/
      if (uname === "") {
        this.$router.push('/Login')
      }
    },
    methods: {
      quit() {
        /*删除cookie*/
        delCookie('email')
        this.$router.push('/TestLogin')
      }
    }
  }
</script>

<style scoped>

</style>
