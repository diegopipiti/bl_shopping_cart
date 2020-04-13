<template>
    <div>
        <button @click="onButtonClick" name = "buttonJCK" value = "Jack" class="ui button">Jack</button>
        <button @click="onButtonClick" name = "buttonSMN" value = "Samantha" class="ui button">Samantha</button>
        <button @click="onButtonClick" name = "buttonVLP" value = "Vulpix" class="ui button">Vulpix</button>
        <button @click="onButtonClick" name = "buttonJNR" value = "Jack il nero" class="ui button">Jack il nero</button>
    </div>
</template>


<script>
export default {
    name: 'ButtonRow',

    methods: {
        onButtonClick(evt) {
        const button = evt.target;
        console.log(`The user clicked ${button.name}: ${button.value}`);
        },
    }
}
</script>


<style>

</style>