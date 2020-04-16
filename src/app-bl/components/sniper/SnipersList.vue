<template>
    <div class="container is-fullhd">
            
            <div>
                <img class="image is-512" src="https://i.ibb.co/w0zFKvn/Battlelands-Screenshot-2020-04-13-19-48-23.jpg">
            </div>
            
            <div class = "columns">
                <div class="column is-half">

                    <article class="media noBorder" 
                        v-for="sniper in sniperItemsDanni" 
                        v-bind:key="sniper.id"
                        v-bind:class="{ 'blue-border': sniper.trofei >= 20 }">
                        <SniperSheet
                        v-bind:sniper="sniper"
                        v-bind:rank="sniperItemsDanni.indexOf(sniper)">
                        </SniperSheet>
                    </article>
                </div>

                <div class="column is-half">
                    <article class="media noBorder" 
                        v-for="sniper in sniperItemsKill" 
                        v-bind:key="sniper.id"
                        v-bind:class="{ 'blue-border': sniper.trofei >= 20 }">
                        <SniperSheet
                        v-bind:sniper="sniper"
                        v-bind:rank="sniperItemsKill.indexOf(sniper)">
                        </SniperSheet>
                    </article>
                </div>
            </div>

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
    .image.is-512{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding: 20px;
  padding-bottom: 50px;

}
</style>