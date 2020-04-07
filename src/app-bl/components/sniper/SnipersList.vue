<template>
    
</template>


<script>
export default {
    name: "SnipersList",

    created(){
        this.$store.dispatch('getSniperItems');
    },
    computed(){
        sniperItems(){
            return this.$store.getters.sniperItems;
        }
    }
    
}
</script>


<style>

</style>