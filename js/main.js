// Descrizione:
// Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
// Bonus:
// Aggiungere lo stato per ogni todo e modificare la visualizzazione dell'elemento in pagina, verde e barrato se il todo è stato fatto o rosso se non è ancora stato fatto.
// Prevedere inoltre un pulsante per modificare lo stato del singolo todo


const app = new Vue(
    {
        el: '#root',
        data: {
            todos: [
                "Fare gli esercizi",
                "Fare la spesa",
                "Fare la torta",
                "Fare le pulizie",
                "Fare il bucato"
            ],
            newTodo: ""
        },
        methods: {
            addNewTodo: function (){
                if(this.newTodo != ""){
                    this.todos.push(this.newTodo);
                }
            },
            removeTodo: function(index){
                this.todos.splice(index, 1);
            }
        }
    }
);