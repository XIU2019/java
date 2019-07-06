<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
        {{collapsed?'':sysName}}
      </el-col>
      <el-col :span="10">
        <div class="tools" @click.prevent="collapse">
          <i class="fa fa-align-justify"></i>
        </div>
      </el-col>
      <el-col :span="4" class="userinfo">
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" />{{sysUserName}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
        <!--导航菜单-->
        <el-aside width="230px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>文章管理</template>
              <el-menu-item-group>
<!--                <template slot="title">分</template>-->
                <el-menu-item index="1-1">发布文章</el-menu-item>
                <el-menu-item index="1-2">删除文章</el-menu-item>
                <el-menu-item index="1-2">修改文章</el-menu-item>
                <el-menu-item index="1-3">查询文章</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>管理管理员</template>
              <el-menu-item-group>
                <el-menu-item index="2-1">查询管理员</el-menu-item>
                <el-menu-item index="2-2">删除管理员</el-menu-item>
                <el-menu-item index="2-3">添加管理员</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-setting"></i>导航三</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>
      </aside>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data() {
      return {
        sysName: '智库管理后台',
        collapsed: false,
        sysUserName: '',
        sysUserAvatar: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleopen() {
        //console.log('handleopen');
      },
      handleclose() {
        //console.log('handleclose');
      },
      handleselect: function (a, b) {
      },
      //退出登录
      logout: function () {
        var _this = this;
        this.$confirm('确认退出吗?', '提示', {
          //type: 'warning'
        }).then(() => {
          sessionStorage.removeItem('user');
          _this.$router.push('/login');
        }).catch(() => {

        });


      },
      //折叠导航栏
      collapse: function () {
        this.collapsed = !this.collapsed;
      },
      showMenu(i, status) {
        this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
      }
    },
    mounted() {
      var user = sessionStorage.getItem('user');
      if (user) {
        user = JSON.parse(user);
        this.sysUserName = user.name || '';
        this.sysUserAvatar = user.avatar || '';
      }

    }
  }

</script>

<style>

  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }

  .header {
    height: 60px;
    line-height: 60px;
    background: #409EFF;
    color: #fff;
  }

  .userinfo {
    text-align: right;
    padding-right: 35px;
    float: right;
  }

  .userinfo-inner {
    cursor: pointer;
    color: #fff;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    float: right;
  }

  .logo {
  / / width: 230 px;
    height: 60px;
    font-size: 22px;
    padding-left: 20px;
    padding-right: 20px;
    border-color: rgba(238, 241, 146, 0.3);
    border-right-width: 1px;
    border-right-style: solid;
  }

  img {
    width: 40px;
    float: left;
    margin: 10px 10px 10px 18px;
  }

  .txt {
    color: #fff;
  }

  .logo-width {
    width: 230px;
  }

  .logo-collapse-width {
    width: 60px
  }

  .tools {
    padding: 0px 23px;
    width: 14px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }

  .main {
    display: flex;
  / / background: #324057;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
  }

  aside {
    flex: 0 0 230px;
    width: 230px;
  / / position: absolute;
  / / top: 0 px;
  / / bottom: 0 px;
  }

  .el-menu {
    height: 100%;
  }

  .collapsed {
    width: 60px;
  }

  .item {
    position: relative;
  }

  .submenu {
    position: absolute;
    top: 0px;
    left: 60px;
    z-index: 99999;
    height: auto;
    display: none;
  }


  .menu-collapsed {
    flex: 0 0 60px;
    width: 60px;
  }

  .menu-expanded {
    flex: 0 0 230px;
    width: 230px;
  }

  .content-container {
  / / background: #f1f2f7;
    flex: 1;
  / / position: absolute;
  / / right: 0 px;
  / / top: 0 px;
  / / bottom: 0 px;
  / / left: 230 px;
    overflow-y: scroll;
    padding: 20px;
  }

  .breadcrumb-container {
  / / margin-bottom: 15 px;
  }

  .title {
    width: 200px;
    float: left;
    color: #475669;
  }

  .breadcrumb-inner {
    float: right;
  }

  .content-wrapper {
    background-color: #fff;
    box-sizing: border-box;
  }


</style>
