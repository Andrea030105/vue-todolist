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
        doneTask(index) {
            if (this.todoList[index].done) {
                this.todoList[index].done = false
            } else {
                this.todoList[index].done = true
            }
        }
    },
}).mount('#app')