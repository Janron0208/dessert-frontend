import Vue from "vue";
import Vuex from "vuex";
const state = {
    menus: [{
            id: 1,
            src: require("../assets/images/img1.jpg"),
            love: false,
            foodname: "สปาเกตตี้",
            username: "Nattaphon Janron"

        },
        {
            id: 2,
            src: require("../assets/images/img2.jpg", ),
            love: false,
            foodname: "สปาเกตตี้",
            username: "Nattaphon Janron"

        },

        {
            id: 3,
            src: require("../assets/images/img3.jpg", ),
            love: false,
            foodname: "สปาเกตตี้",
            username: "Nattaphon Janron"

        },
        {
            id: 4,
            src: require("../assets/images/img4.jpg", ),
            love: false,
            foodname: "สปาเกตตี้",
            username: "Nattaphon Janron"

        },
        {
            id: 5,
            src: require("../assets/images/img5.jpg", ),
            love: false,
            foodname: "สปาเกตตี้",
            username: "Nattaphon Janron"

        },
        {
            id: 6,
            src: require("../assets/images/img6.jpg", ),
            love: false,
            foodname: "สปาเกตตี้",
            username: "Nattaphon Janron"

        },
        {
            id: 7,
            src: require("../assets/images/img7.jpg", ),
            love: false,
            foodname: "สปาเกตตี้",
            username: "Nattaphon Janron"

        },
        {
            id: 8,
            src: require("../assets/images/img8.jpg", ),
            love: false,
            foodname: "สปาเกตตี้",
            username: "Nattaphon Janron"

        },
        {
            id: 9,
            src: require("../assets/images/img9.jpg", ),
            love: false,
            foodname: "สปาเกตตี้",
            username: "Nattaphon Janron"

        },

    ],
    orders: [],
    orderInfo: null
};
const getters = {
    specials(state) {
        return state.specials;
    },
    menus(state) {
        return state.menus;
    },
    haveOrders(state) {
        return state.orders.length > 0;
    },
    numberOfOrders(state) {
        return state.orders.length;
    },
    orders(state) {
        return state.orders;
    }
}

const mutations = {
    ADD_ORDER(state, order) {
        state.orders.push(order);
    },
    DELETE_ORDER(state, index) {
        state.orders.splice(index, 1);
    },
    SUBMIT_ORDER(state, orderInfo) {
        state.orderInfo = orderInfo;
    },
    CLEAR_ORDER(state) {
        state.orders = [];
    }
}
Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    mutations
});
export default store;