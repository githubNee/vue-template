<template>
    <div class="header">
      <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: sessionStorage.getItem('realname')
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('token');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    // sessionStorage.removeItem('token')
                    sessionStorage.clear();
                    // this.$router.push('/login');
                }
            },
            gomarket(){
            this.$router.push('/market');
            }
        }
    }
</script>
<style scoped>
    .header {
        left: 0;
    }

</style>
