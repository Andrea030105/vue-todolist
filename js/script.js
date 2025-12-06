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
    methods: {
        deleteTask(index) {
            console.log(this.todoList[index]);
            this.todoList.splice(index, 1);
        },
    },
}).mount('#app')