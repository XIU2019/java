<template>
  <el-form ref="AccountFrom" label-position="left" label-width="0px"
           class="demo-ruleForm login-container" >
    <h3 class="title">欢迎登录</h3>
    <el-form-item prop="email">
      <el-input type="text" v-model="email" auto-complete="off" placeholder="邮箱"></el-input>
    </el-form-item>
    <el-form-item prop="spassword">
      <el-input type="password" v-model="spassword" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  // import blogHeader from '@/components/common/BlogHeader.vue'
  // import blogFooter from '@/components/common/BlogFooter.vue'
  import {Vue} from "vue";
  import axios from 'axios/index';

  export default {
    name: 'BlogLogin',
    data() {
      return {
        // showLogin:ture,
        // tishi: '',
        email: '',
        spassword: '',
        // songName: '',
        // responseResult: [],
      }
    },
    methods: {
      test() {
        // 验证是否跨域成功的方法,用axios方式
        this.$axios.get('/api/SpringDemo1/student/registerUser')
          .then((response) => {
            console.log(response)
            console.log(response.data.subjects)
            // this.songName = response.data.sonngList[0].songName
          })
      },
      login() {
        // let date = {email: this.email, spassword: this.spassword};
        this.$axios.get('/api/SpringDemo1/student/loginUser',
          {
            params: {
              email: this.email,
              spassword: this.spassword}
            })
          .then((response) => {
            console.log(response)
          })

      }
    }
  }

</script>
<style>
  body {
    background: #DFE9FB;
  }

  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 160px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

    background: -ms-linear-gradient(top, #ace, #00C1DE); /* IE 10 */
    background: -moz-linear-gradient(top, #ace, #00C1DE); /*火狐*/
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ace), to(#00C1DE)); /*谷歌*/
    background: -webkit-linear-gradient(top, #ace, #00C1DE); /*Safari5.1 Chrome 10+*/
    background: -o-linear-gradient(top, #ace, #00C1DE);
  }

  /*Opera 11.10+*/

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .remember {
    margin: 0px 0px 35px 0px;
  }

</style>

