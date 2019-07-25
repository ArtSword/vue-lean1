import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index";
import Index2 from "../components/Index2";
import Sigin from "../components/Sigin";
import Login from "../components/Login";
import Table from "../components/Table";
import Input from "../components/Input";
import Query from "../components/Query";
import TestSlot from "../components/TestSlot";
import Home from "../components/Home";

Vue.use(Router);

export default new Router({
    //mode : 'history',
    routes : [
        {
            path:'/',
            component:Index
        },
        {
            path:'/Login',
            component:Login
        },
        {
            path:'/sigin',
            component:Sigin
        },
        {
            path:'/table',
            component:Table
        },
        {
            path:'/input',
            component:Input
        },
        {
            path:'/index2',
            component:Index2
        },
        {
            path:'/query',
            component:Query
        },
        {
            path:'/t1',
            component:TestSlot
        },
        {
            path:'/home',
            component:Home
        },
    ]
})