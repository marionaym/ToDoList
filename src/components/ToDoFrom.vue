<script setup>
import { ref } from "vue";
const libelle = ref(""); // -- donnée réactive pr la saisie du libellé
</script>



<template>
    <form @submit.prevent="$emit('addC', libelle)">

        <input type="text" v-model="libelle" placeholder="chose ?"/>
        <input type="submit" value="valider" />
    </form>

</template>



<style scoped>
</style>