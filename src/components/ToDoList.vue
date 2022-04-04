<script setup>

import { reactive, onMounted } from 'vue' ;
// -- les 2 sous composants
import ToDoListItem from "./ToDoListItem.vue";
import ToDoForm from "./ToDoFrom.vue"
// -- la classe Chose
import Chose from "../Chose" ;

const url = "https://webmmi.iut-tlse3.fr/~pecatte/todos/public/3/todos";
// -- la liste des choses
// --> donnée réactive = l'afficahge sera actualisée automatiquement à chaque changement dans la liste 
const listeC = reactive([]);

function handlerFaire(id, libelle, fait) {
    console.log(id, libelle, fait);
    let myHeaders = new Headers();
 myHeaders.append("Content-Type", "application/json");
 const fetchOptions = {
 method: "PUT",
 headers: myHeaders,
 body: JSON.stringify({id:id, libelle:libelle, fait:!fait}),
 };
 fetch(url, fetchOptions)
    .then((response)=>{
        return response.json();
    })
    .then((dataJSON)=>{
        console.log(dataJSON);
        getToDos()
    })
    .catch((error)=>console.log(error));

}

function handlerDelete(id) {
const fetchOptions = { method: "DELETE"};
    fetch(url+"/"+id, fetchOptions)
    .then((response)=>{
        return response.json();
    })
    .then((dataJSON)=>{
        console.log(dataJSON);
        getToDos()
    })
    .catch((error)=>console.log(error));
}

function handlerAdd(libelle){
    let myHeaders = new Headers();
 myHeaders.append("Content-Type", "application/json");
 const fetchOptions = {
 method: "POST",
 headers: myHeaders,
 body: JSON.stringify({ libelle : libelle }),
 }; 
 fetch(url, fetchOptions)
    .then((response)=>{
        return response.json();
    })
    .then((dataJSON)=>{
        console.log(dataJSON);
        getToDos()
    })
    .catch((error)=>console.log(error));
}

function getToDos(){
    const fetchOptions = { method: "GET"};
    fetch(url, fetchOptions)
    .then((response)=>{
        return response.json();
    })
    .then((dataJSON)=>{
        console.log(dataJSON);
        listeC.splice(0, listeC.length)
        dataJSON.forEach((v)=>listeC.push(new Chose(v.id, v.libelle, v.fait)));
    })
    .catch((error)=>console.log(error));
}

onMounted(()=>{
    console.log("onmounted")
    getToDos()
});


</script>


<template>
<h3>Liste des choses à faire</h3>
    <ToDoForm @addC="handlerAdd"></ToDoForm>

<ul>
    <ToDoListItem v-for="(chose, index) in listeC" 
        :key="chose.id"
        :chose="chose"
        :index="index"
        @deleteC="handlerDelete"
        @faireC="handlerFaire"
    ></ToDoListItem>
</ul>
</template>