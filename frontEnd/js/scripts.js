// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da mondare in pagina
createApp({
    data() {
        return {
            message: 'Todo list php',
            myData:[],
            newTask: "",
        };
    },
    methods:{
        searchData(){
            axios.get("http://localhost/Boolean/PrimaParteBackEnd/php-todo-list-json/backEnd/index.php")
            .then((response) => {
                this.myData = response.data;
                console.log(this.myData);
            })
        },
        addTodoJson(){
            axios.post("http://localhost/Boolean/PrimaParteBackEnd/php-todo-list-json/backEnd/putNewTodo.php",
                {
                    name : "ciao"
                }
                ,
                {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                }
            )
            .then((response) => {
                console.log(response)
                this.addTask();
            })
        },
        reverseDone(j){
            console.log("hai clicclato sull'elemento n:",j)
            this.myData[j].done = !(this.myData[j].done);
        },
        addTask(){
            if(this.newTask.trim().length > 3){
                this.myData.push({name:this.newTask, done: false,})
            }
            this.newTask = "";
            console.log(this.myData)
        },
        deleteTodo(j){
            this.myData.splice(j,1);
        }
    },
    mounted(){
        this.searchData();
    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');