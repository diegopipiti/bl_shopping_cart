<template>
    <div class="input-form">
        
        <form @submit="submitForm" class="ui form" >
            <div class="field">
                <label>Trofei</label>
                <input v-model="fields.trofei" type="number" placeholder="Inserisci i trofei guadagnati" />
                <span style="color: red">{{ fieldErrors.trofei }}</span>
            </div>

            <div class="field">
                <label>Danni</label>
                <input v-model="fields.danni" type="number" placeholder="Inserisci i danni inflitti" />
                <span style="color: red">{{ fieldErrors.danni }}</span>
            </div>

            <div class="field">
                <label>Kill</label>
                <input v-model="fields.kill" type="number" placeholder="Inserisci le kill fatte" />
                <span style="color: red">{{ fieldErrors.kill }}</span>
            </div>

            <div class="field">
                <label>Posizione</label>
                <input v-model="fields.posizione" type="number" placeholder="Inserisci la posizione raggiunta" />
                <span style="color: red">{{ fieldErrors.posizione }}</span>
            </div>

            <div class="field">
                <label>Partite</label>
                <input v-model="fields.partite" type="number" placeholder="Inserisci le partire giocate" />
                <span style="color: red">{{ fieldErrors.partite }}</span>
            </div>

            <div class="field">
                <label>Sniper</label>
                <select v-model="fields.sniper" class="ui fluid search dropdown">
                    <option disabled value="">Please select one</option>
                    <option v-for="sniper in sniperItemsNormal" v-bind:value="sniper.nome">
                        {{sniper.nome}}
                    </option>
                </select>
                <span style="color: red">{{ fieldErrors.sniper }}</span>
            </div>

            <div class="paddingInf50">
                <button class="button is-primary" @click="submitForm">Submit</button>
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
                partite:null,
                sniper: null
            },

            fieldErrors: {
                trofei:undefined,
                danni: undefined,
                kill: undefined,
                posizione: undefined,
                partite: undefined,
                sniper: undefined
            },
        }
    },

    methods:{
        submitForm(evt) {
            evt.preventDefault();
            this.fieldErrors = this.validateForm(this.fields);
            if (Object.keys(this.fieldErrors).length) {return};
        },

        validateForm(fields){
            const errors= {};
            if (!fields.trofei){errors.trofei = 'Inserire il numero di trofei'};
            if (!fields.danni){errors.danni = 'Inserire il numero di danni'};
            if (!fields.kill){errors.kill = 'Inserire il numero di kill'};
            if (!fields.posizione){errors.posizione = 'Inserire il numero di posizione'};
            if (!fields.partite){errors.partite = 'Inserire il numero di partite'};
            if (!fields.sniper){errors.sniper = 'Selezionare uno sniper'};

            return errors;
        }
    }
    
}
</script>


<style>
.paddingInf50{
    padding-bottom: 50px;
}
</style>