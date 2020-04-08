<template>
    
</template>


<script>
import {mapGetters} from 'vuex';

export default {
    name: "SnipersList",

    computed: {
        ...mapGetters([
            'sniperItems'
        ])
    },

    created(){
        this.$store.dispatch('getSniperItems');
    },
    
    
}
</script>


<style>

</style>