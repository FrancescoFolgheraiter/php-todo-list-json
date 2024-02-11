// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da mondare in pagina
createApp({
    data() {
        return {
            message: 'Todo list php',
            myData: [],
            newTask: "",
            flagEdit: []
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
            for (let i = 0; i < this.myData.length; i++) {
                this.flagEdit.push(true)
            }
            console.log(this.flagEdit)
        },
        //chiamata api per caricare un nuovo task
        addTodoJson(){
            console.log("chiamata add:", this.myData, typeof this.myData)
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
        //cancellazione del task in array e nel file jsone tramite api
        deleteTask(j){
            
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
        editTask(j){
            this.flagEdit[j]= !(this.flagEdit[j])
            console.log("chiamata add:", this.myData, typeof this.myData)
            axios.post("http://localhost/Boolean/PrimaParteBackEnd/php-todo-list-json/backEnd/updateTaskTodo.php",
            {
                name : this.myData[j].name,
                done : this.myData[j].done,
                indice: j
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
                console.log("questo è mio Data", this.myData, typeof this.myData)
                this.myData.push({name:this.newTask, done: false,})
            }
            this.newTask = "";
            
        }
    },
    mounted(){
        this.searchData();
    },
    updated(){
    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');