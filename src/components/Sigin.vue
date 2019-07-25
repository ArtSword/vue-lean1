<template>
    <div>
        <h1>我是注册页面</h1>
        <header class="header">
            <p>注册页面slot header上</p>
            <slot name="header"></slot>
            <p>注册页面slot header下</p>
        </header>
        <main class="main">
            <p>注册页面slot main上<p>
            <slot v-bind:user="user">{{this.user.rootName }}</slot>
            <p>注册页面slot main下</p>
        </main>
        <footer class="footer">
            <p>注册页面slot footer上<p>
            <slot name="footer"></slot>
            <p>注册页面slot footer下</p>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "Sigin",
        data() {
            return {
                user : {
                    rootName  : "根组件信息"
                }
            }
        }
    }
</script>

<style scoped>
    .header {
        border: 1px red solid;
        margin-top: 3px;
    }
    .main {
        border: 1px blue solid;
        margin-top: 3px;
    }
    .footer {
        border: 1px green solid;
        margin-top: 3px;
    }
</style>