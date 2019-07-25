<template>
    <v-app>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                            aspect-ratio="2.75"
                    ></v-img>

                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                            <div> {{ card_text }} </div>
                        </div>
                    </v-card-title>
                    <v-card-title>
                        <div>
                            <h3 class="headline mb-0">{{ txt }}</h3>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn flat color="orange">Share</v-btn>
                        <v-btn flat color="orange">Explore</v-btn>
                        <v-btn color="success" @click="add">Success</v-btn>
                        <v-btn color="error">Error</v-btn>
                        <v-btn color="warning">Warning</v-btn>
                        <v-btn color="info">Info</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
    export default {
        name: "Index",
        data(){
            return {
                txt : "this is card text",
                card_text : ""
            }
        },
        created : function () {
            console.log("created")
        },
        mounted : function () {
            console.log("mounted");
            let userData = this.$store.getters.getUser;
            console.log(userData.username);
            this.txt = userData.username
        },
        methods:{
            add(){
                console.log("add");
                this.$store.commit('updateUser',{username:"ArtSword"})
            }
        }
    }
</script>

<style scoped>

</style>