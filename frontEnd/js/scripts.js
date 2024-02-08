// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da mondare in pagina
createApp({
    data() {
        return {
            message: 'To do list',
            myData:[]
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
        reverseDone(j){
            console.log("hai clicclato sull'elemento n:",j)
            this.myData[j].done = !(this.myData[j].done);
        }
    },
    mounted(){
        this.searchData();
    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');