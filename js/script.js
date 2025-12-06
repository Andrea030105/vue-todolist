const {
    createApp
} = Vue;

createApp({
    data() {
        return {
            todoList: [
                {
                    text: "Fare la spesa",
                    done: true,
                },
                {
                    text: "Fare la spesa",
                    done: false,
                },
                {
                    text: "Fare la spesa",
                    done: true,
                },
                {
                    text: "Fare la spesa",
                    done: false,
                },
                {
                    text: "Fare la spesa",
                    done: true,
                },
            ]
        }
    },
}).mount('#app')