import Vue from "vue";
import Vuex from "vuex";
const state = {
    menus: [{
            src: require("../assets/images/img1.jpg"),
            love: false,
            foodname: "สปาเกตตี้1",
            username: "Nattaphon Janron",
            userpic: require("../assets/userpics/iconapp.png"),
            description: "Originating in North Africa and now strongly associated with Israeli cuisine, shakshuka typically involves a sauce of tomatoes and red peppers. Our take on this simmered skillet breakfast spins the color wheel, thanks to roasted tomatillos and Swiss chard, and takes flavor inspiration from Mexico. We top these eggs cooked in a tangy, spicy salsa verde with cotija cheese and avocado but the topping choices are endless from chorizo to toasted pine nuts.",
            allpic: [{
                    src: require("../assets/images/img2.jpg"),
                },
                {
                    src: require("../assets/images/img3.jpg"),
                },
                {
                    src: require("../assets/images/img4.jpg"),
                },
                {
                    src: require("../assets/images/img1.jpg"),
                },
            ],
            ingredient: [{
                    objec: "ต้นหอม",
                    volumn: "2หัว"
                },
                {
                    objec: "หมึกไข่",
                    volumn: "3 ตัว"
                },
                {
                    objec: "พริกขี้หนูสวนสับ",
                    volumn: "1 ชต"
                },
                {
                    objec: "น้ำมะนาว",
                    volumn: "2-2.5 ชต "
                },
                {
                    objec: "น้ำปลา",
                    volumn: "1.5 ชต"
                },
                {
                    objec: "ซีอิ้วขาว",
                    volumn: "1 ชต"
                },
                {
                    objec: "หอมดง",
                    volumn: "2หัว"
                },
                {
                    objec: "ผักแกล้ม",
                    volumn: "ตามชอบ"
                },
            ],
            howto: [{
                    num: "1",
                    how: "Preheat a to450º and line a large baking sheet with foil. Rinse tomatillos well, then cut in quarters.",
                    src: require("../assets/images/img8.jpg", ),
                },
                {
                    num: "2",
                    how: "Preheat a to450º and line a large baking sheet with foil. Rinse tomatillos well, then cut in quarters.",
                    src: require("../assets/images/img9.jpg", ),
                },
                {
                    num: "3",
                    how: "Preheat a to450º and line a large baking sheet with foil. Rinse tomatillos well, then cut in quarters.",
                    src: require("../assets/images/img2.jpg", ),
                },
                {
                    num: "4",
                    how: "Preheat a to450º and line a large baking sheet with foil. Rinse tomatillos well, then cut in quarters.",
                    src: require("../assets/images/img8.jpg", ),
                },
            ]

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
    menus1(state) {
        return state.menus.allpic;
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