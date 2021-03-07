import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menus: [{
                src: require("../assets/images/img1.jpg"),
                love: false
            },
            {
                src: require("../assets/images/img2.jpg"),
                love: false
            },

            {
                src: require("../assets/images/img3.jpg"),
                love: false
            },
            {
                src: require("../assets/images/img4.jpg"),
                love: false
            },
            {
                src: require("../assets/images/img5.jpg"),
                love: false
            },
            {
                src: require("../assets/images/img6.jpg"),
                love: false
            },
            {
                src: require("../assets/images/img7.jpg"),
                love: false
            },
            {
                src: require("../assets/images/img8.jpg"),
                love: false
            },
            {
                src: require("../assets/images/img9.jpg"),
                love: false
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {}
})