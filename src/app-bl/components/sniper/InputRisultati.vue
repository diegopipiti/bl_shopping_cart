<template>
    <div class="input-form">
        
        <form @submit="submitForm" class="ui form" >
            <div class="field">
                <label>Trofei</label>
                <input v-model="fields.trofei" type="number" placeholder="Inserisci i trofei guadagnati" />
            </div>

            <div class="field">
                <label>Danni</label>
                <input v-model="fields.danni" type="number" placeholder="Inserisci i danni inflitti" />
            </div>

            <div class="field">
                <label>Kill</label>
                <input v-model="fields.kill" type="number" placeholder="Inserisci le kill fatte" />
            </div>

            <div class="field">
                <label>Posizione</label>
                <input v-model="fields.posizione" type="number" placeholder="Inserisci la posizione raggiunta" />
            </div>

            <div class="field">
                <label>Sniper</label>
                <select v-model="fields.sniper" class="ui fluid search dropdown">
                    <option disabled value="">Please select one</option>
                    <option v-for="sniper in sniperItemsNormal" v-bind:value="sniper.nome">
                        {{sniper.nome}}
                    </option>
                </select>
            </div>

        </form>

    </div>
</template>


<script>
export default {
    name: 'InputRisultati',

    props: ['sniperItemsNormal'],
    
    data() {
        return{
            fields: {
                trofei:null,
                danni: null,
                kill: null,
                posizione: null,
                sniper: null
            },

            fieldErrors: {
                trofei:undefined,
                danni: undefined,
                kill: undefined,
                posizione: undefined,
                sniper: undefined
            },
        }
    },

    methods:{
        submitForm(evt) {

        }
    }
    
}
</script>


<style>

</style>