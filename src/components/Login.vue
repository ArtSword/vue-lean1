<template>
    <v-app>
        <v-container justify-center class="container">
            <v-card>
                <v-card-title>
                    <h1>登录</h1>
                </v-card-title>
                <v-card-actions>
                    <v-form style="width:100%">
                        <v-text-field v-model="name"/>
                        <v-text-field v-model="password"/>
                        <Center>
                            <!--<v-btn color="primary" :disabled="!valid" @click="submit">
                                登录
                            </v-btn>-->
                            <v-btn color="primary" @click="submit">
                                登录
                            </v-btn>
                            <v-btn to="/sigin">
                                注册
                            </v-btn>
                        </Center>
                    </v-form>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        name : "Login",
        data(){
            return {
                name : '',
                password : ''
            }
        },
        methods : {
            submit(){
                console.log(this.name + "\n" + this.password)
                this.$router.push('sigin')
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 40%;
        border: 1px red solid;
    }
</style>