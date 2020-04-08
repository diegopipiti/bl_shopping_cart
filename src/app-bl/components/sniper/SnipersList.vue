<template>
    <div class="section">
            <article class="media noBorder" 
                v-for="sniper in sniperItemsTrofei" 
                v-bind:key="sniper.id"
                v-bind:class="{ 'blue-border': sniper.trofei >= 20 }">
                
                <SniperSheet
                v-bind:sniper="sniper"
                >
                </SniperSheet>

            </article>
        </div>
</template>


<script>
    import {mapGetters} from 'vuex';
    import SniperSheet from './SniperSheet';

    export default {
        name: "SnipersList",

        computed: {
            ...mapGetters([
                'sniperItemsTrofei',
                'sniperItemsReverse'
            ]),

        },

        created(){
            this.$store.dispatch('getSniperItems');
        },

        components: {
            SniperSheet
        }
    }
</script>


<style>

</style>