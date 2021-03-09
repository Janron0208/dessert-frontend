import Vue from "vue";
import Vuex from "vuex";
const state = {
    menus: [{
            src: require("../assets/images/img1.jpg"),
            love: false,
            foodname: "สปาเกตตี้1",
            username: "Nattaphon Janron"

        },
        {
            src: require("../assets/images/img2.jpg", ),
            love: false,
            foodname: "สปาเกตตี้2",
            username: "Nattaphon Janron"

        },

        {
            src: require("../assets/images/img3.jpg", ),
            love: false,
            foodname: "สปาเกตตี้3",
            username: "Nattaphon Janron"

        },
        {
            src: require("../assets/images/img4.jpg", ),
            love: false,
            foodname: "สปาเกตตี้4",
            username: "Nattaphon Janron"

        },
        {
            src: require("../assets/images/img5.jpg", ),
            love: false,
            foodname: "สปาเกตตี้5",
            username: "Nattaphon Janron"

        },
        {
            src: require("../assets/images/img6.jpg", ),
            love: false,
            foodname: "สปาเกตตี้6",
            username: "Nattaphon Janron"

        },
        {
            src: require("../assets/images/img7.jpg", ),
            love: false,
            foodname: "สปาเกตตี้7",
            username: "Nattaphon Janron"

        },
        {
            src: require("../assets/images/img8.jpg", ),
            love: false,
            foodname: "สปาเกตตี้8",
            username: "Nattaphon Janron"

        },
        {
            src: require("../assets/images/img9.jpg", ),
            love: false,
            foodname: "สปาเกตตี้9",
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