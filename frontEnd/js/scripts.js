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
        //chiamata api per caricare i task nel json 
        searchData(){
            axios.get("http://localhost/Boolean/PrimaParteBackEnd/php-todo-list-json/backEnd/index.php")
            .then((response) => {
                this.myData = response.data;
                console.log(this.myData);
            })
        },
        //chiamata api per caricare un nuovo task
        addTodoJson(){
            axios.post("http://localhost/Boolean/PrimaParteBackEnd/php-todo-list-json/backEnd/putNewTodo.php",
                {
                    name : this.newTask
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
        deleteTask(j){
            this.myData.splice(j,1);
            console.log(j)
            axios.post("http://localhost/boolean/PrimaParteBackEnd/php-todo-list-json/backEnd/cancelTaskTodo.php",
                {
                    index : j
                }
                ,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            .then((response) => {
                console.log(response);
                this.myData.splice(j,1);
            })
        },
        reverseDone(j){
            console.log("hai clicclato sull'elemento n:",j)
            this.myData[j].done = !(this.myData[j].done);
            axios.post("http://localhost/boolean/PrimaParteBackEnd/php-todo-list-json/backEnd/updateDoneData.php",
            {
                index : j
            }
            ,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
        .then((response) => {
            console.log(response);
        })
        }
        ,
        addTask(){
            if(this.newTask.trim().length > 3){
                this.myData.push({name:this.newTask, done: false,})
            }
            this.newTask = "";
            
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