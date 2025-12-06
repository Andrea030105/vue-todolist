const {
    createApp
} = Vue;

createApp({
    data() {
        return {
            newTask: '',
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
        addTask() {
            let object = {
                text: this.newTask,
                done: false,
            }
            this.todoList.push(object);
            this.newTask = '';
        },
    },
}).mount('#app')