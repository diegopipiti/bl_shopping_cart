<template>
    <div class="input-form">
        
        <form @submit="submitForm" class="ui form" >
            <div class="field">
                <label>New Item</label>
                <input v-model="fields.newItem" type="text" placeholder="Add an item!" />
            </div>

            <div class="field">
                <label>Email</label>
                <input v-model="fields.email" type="text" placeholder="What's your email?" />
            </div>

            <div class="field">
                <label>Urgency</label>
                <select v-model="fields.urgency" class="ui fluid search dropdown">
                    <option disabled value="">Please select one</option>
                    <option>Nonessential</option>
                    <option>Moderate</option>
                    <option>Urgent</option>
                </select>
            </div>

            <div class="field">
                <div class="ui checkbox">
                    <input v-model="fields.termsAndConditions" type="checkbox" />
                    <label>I accept the terms and conditions</label>
                </div>
            </div>

        </form>

        <div class="ui segment">
            <h4 class="ui header">Items</h4>
            <ul>
                <li v-for="commento in commenti" class="item">{{ commento }}</li>
            </ul>
        </div>

    </div>
</template>


<script>
export default {
    name: 'InputForm',
    
    data() {
        return{
            fields: {
                newItem:'',
                email: '',
                urgency: '',
                termsAndConditions: false
            },

            fieldErrors: {
                newItem: undefined,
                email: undefined,
                urgency: undefined,
                termsAndConditions: undefined
            },

            commenti: []
        }
    },

    methods:{
        submitForm(evt) {
            this.commenti.push(this.newComment);
            this.newComment = '';
            evt.preventDefault();
        }
    }
    
}
</script>


<style>

</style>