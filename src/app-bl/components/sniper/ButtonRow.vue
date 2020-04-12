<template>
    <div>
        <button @click="onJackClick" class="ui button">Jack</button>
        <button @click="onSamanthaClick" class="ui button">Samantha</button>
        <button @click="onVulpixClick" class="ui button">Vulpix</button>
        <button @click="onJack_il_neroClick" class="ui button">Jack il nero</button>
    </div>
</template>


<script>
export default {
    name: 'ButtonRow',

    methods: {
        onJackClick(evt) {
        console.log('The user clicked button-Jack', evt);
        },
        onSamanthaClick(evt) {
        console.log('The user clicked button-Samantha', evt);
        },
        onVulpixClick(evt) {
        console.log('The user clicked button-Vulpix', evt);
        },
        onJack_il_neroClick(evt) {
        console.log('The user clicked button-Jack il nero', evt);
        }
    }
}
</script>


<style>

</style>