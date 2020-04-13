<template>
    <div class="section">
            <article class="media noBorder" 
                v-for="sniper in sniperItemsNormal" 
                v-bind:key="sniper.id"
                v-bind:class="{ 'blue-border': sniper.trofei >= 20 }">
                
                <SniperSheet
                v-bind:sniper="sniper">
                </SniperSheet>

            </article>

            <button  class="button is-primary" @click=ReverseOrder()>
                ReverseOrder 
            </button>

            <InputRisultati
            v-bind:sniperItemsNormal="sniperItemsNormal">
            </InputRisultati>
        </div>
</template>


<script>
    import {mapGetters} from 'vuex';
    import SniperSheet from './SniperSheet';
    import InputRisultati from './InputRisultati';




    export default {
        name: "SnipersList",
   
        computed: {
            ...mapGetters([
                'sniperItemsTrofei',
                'sniperItemsReverse',
                'sniperItemsNormal'
            ]),

        },

        methods:{
            ReverseOrder() {
                this.$store.dispatch('getSniperItemsReverse');
            }
        },

        created(){
            this.$store.dispatch('getSniperItems');
        },

        components: {
            SniperSheet,
            InputRisultati
        }
    }
</script>


<style>

</style>