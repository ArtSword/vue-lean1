<template>
    <div id="app">
        <router-view></router-view>
        <!--<login></login>-->
    </div>
</template>

<script>
    import IndexVue from './components/Index'
    import Login from "./components/Login";

    export default {
        name: 'app',
        components: {
            Login,
            IndexVue
        },
        mounted : function () {
            window.addEventListener('unload',this.saveState)
        },
        methods : {
            saveState : function () {
                console.log("页面刷新");
                sessionStorage.setItem('state',JSON.stringify(this.$store.state))
            }
        },
    }
</script>

<style>

</style>
