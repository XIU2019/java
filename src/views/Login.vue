<template>
  <el-form ref="AccountFrom" label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
    <h3 class="title">欢迎登录</h3>
    <h4 v-show="showTishi">{{tishi}}</h4>
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
  //导入cookie.js文件
  import {setCookie,getCookie} from "../assets/js/cookie";

  export default {
    name: 'Login',
    data() {
      return {
        // showLogin:ture,
        tishi: '',
        showTishi: false,
        email: '',
        spassword: '',
      }
    },
    mounted() {
      /*页面挂载获取cookie，如果存在email的cookie，则跳转到主页，不需登录*/
      if (getCookie('email')) {
        this.$router.push('/')
      }
    },
    methods: {
      //登录
      login() {
        if (this.email === "" || this.spassword === "") {
          alert("请输入用户名或密码")
        } else {
          // let data = {'email':this.email,'spassword':this.spassword}
          /*接口请求*/
          this.$axios.get('/api/SpringDemo1/student/loginUser', {
            params: {
              email: this.email,
              spassword: this.spassword
            }
          }).then((res) => {
            console.log(res)
            /*接口的传值是(-1,该用户不存在),(0,密码错误)，*/
            if (res.data === -1) {
              this.tishi = "该用户不存在"
              this.showTishi = true
            } else if (res.data === 0) {
              this.tishi = "密码输入错误"
              this.showTishi = true
            } else if (res.data === 1) {
              /*路由跳转this.$router.push*/
              this.tishi = "登录成功"
              this.showTishi = true
              setCookie('email', this.email, 1000 * 60)
              setTimeout(function () {
                this.$router.push('/')
              }.bind(this), 1000)
            }
          })
        }
      },
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

