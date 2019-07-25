<template>
    <div>
        <h4>插槽之外-上</h4>
        <Sigin>
            <template v-slot:header>
                <h4>header插槽</h4>
            </template>
            <template v-slot:default="slotProps">
                <p>访问跟组件数据 </p>
                <p>{{slotProps.user.rootName}}</p>
                <p>不指定名称,进入默认插槽</p>
                <p>And another one.</p>
            </template>
            <template v-slot:footer>
                <h4>footer插槽</h4>
            </template>
        </Sigin>
        <h4>插槽之外-下</h4>
        <br/>
        <br/>
        <br/>
        <Sigin>
            <template v-slot:header>
                <h4>header2插槽</h4>
            </template>
            <template>
                <p>访问当前组件数据 </p>
                <p>{{this.user.sonName}}</p>
                <p>不指定名称,进入默认插槽</p>
                <p>And another one.</p>
            </template>
            <template v-slot:footer>
                <h4>footer2插槽</h4>
            </template>
        </Sigin>
    </div>
</template>

<script>
    import Sigin from './Sigin.vue'
    export default {
        name: "TestSlot",
        components: {
            Sigin
        },
        data() {
            return {
                user: {
                    sonName : '插槽111111111'
                }
            }
        }
    }
</script>

<style scoped>

</style>