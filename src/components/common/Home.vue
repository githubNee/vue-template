<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import router from '../../router/index.js';
    export default {
        components:{
            vHead, vSidebar
        },
        created() {
            if (sessionStorage.getItem('token') == null) {
                // this.$router.push('/login')
            }
        }
    }
</script>
<style media="screen">
  .content{
    margin: auto;
    max-width: 30%;
  }
</style>
