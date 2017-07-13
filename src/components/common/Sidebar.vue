<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
            <el-menu-item index="/">
                <i class="el-icon-setting"></i>没有下拉菜单
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>导航一</template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="/">选项一</el-menu-item>
                  <el-menu-item index="/">选项二</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <template slot="title">分组二</template>
                  <el-menu-item index="/">选项三</el-menu-item>
                  <el-menu-item index="/">选项四</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-date"></i>导航二</template>
                <el-menu-item index="/">选项一</el-menu-item>
                <el-menu-item index="/">选项二</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title"><i class="el-icon-star-on"></i>导航三</template>
                <el-menu-item index="/">选项一</el-menu-item>
                <el-menu-item index="/">选项二</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        top: 70px;
        bottom:0;

    }
    .sidebar > ul {
        height:100%;
    }
</style>
