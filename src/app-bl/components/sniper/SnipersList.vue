<template>
    <div class="container is-fullhd">
            <div class = "columns">
                <div class="column is-half">
                    <article class="media noBorder" 
                        v-for="sniper in sniperItemsDanni" 
                        v-bind:key="sniper.id"
                        v-bind:class="{ 'blue-border': sniper.trofei >= 20 }">
                        <SniperSheet
                        v-bind:sniper="sniper">
                        </SniperSheet>
                    </article>
                </div>

                <div class="column is-half">
                    <article class="media noBorder" 
                        v-for="sniper in sniperItemsKill" 
                        v-bind:key="sniper.id"
                        v-bind:class="{ 'blue-border': sniper.trofei >= 20 }">
                        <SniperSheet
                        v-bind:sniper="sniper">
                        </SniperSheet>
                    </article>
                </div>
            </div>

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
                'sniperItemsNormal',
                'sniperItemsKill',
                'sniperItemsDanni'
            ]),

        },

        methods:{
            ReverseOrder() {
                this.$store.dispatch('getSniperItemsDanni');
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
    .wrapper{
        width: auto;
    }
</style>