<template>
    <v-app>
        <v-toolbar
                dark
                color="teal"
        >
            <v-toolbar-title>State selection</v-toolbar-title>
            <v-autocomplete
                    v-model="select"
                    :loading="loading"
                    :items="items"
                    :search-input.sync="search"
                    cache-items
                    class="mx-3"
                    flat
                    hide-no-data
                    hide-details
                    label="What state are you from?"
                    solo-inverted
            ></v-autocomplete>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>
    </v-app>
</template>

<script>
    export default {
        name: "Input"
    }
</script>

<style scoped>
    .app{
        width: 50%;
        border: 1px red solid;
        margin: 0 auto;
    }
</style>