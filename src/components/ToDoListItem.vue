<script setup>
defineProps(["chose", "index"]);
</script>



<template>
 <li>{{ chose.pourAfficher() }}
     <div id="bouttons">
        <button @click="$emit('deleteC', chose.id)">Delete</button>
        <button @click="$emit('faireC', chose.id, chose.texte, chose.fait)">Faire</button>
    </div>
 </li>
</template>



<style>
</style>