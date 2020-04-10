<template>
    <div id='brawler-sheet' style="display: flex; width: 100%">
        <figure class="media-left">
            <img class="image is-64x64 image is-64x92"
            :src="sniper.sniperImage">
        </figure>

        <div class="media-content">
            <div class="content">
                <p>
                    <strong>
                        <div class="has-text-info blue-text">{{sniper.nome}}</div> &nbsp
                        <div class="has-text-info" ><font color="red">{{sniper.soprannome}}</font></div>
                        <span class="tag is-small">#{{sniper.id}}</span>
                    </strong>
                    <br>
                        <p class="blockquote">{{sniper.descrizione}}</p>
                    <br>
                        <div class= "columns">
                            <div class="column is-half" > 
                                <p class="lista-piccola"><span class="red-text">Trofei: </span>{{sniper.trofei}}</p>
                                <p class="lista-piccola"><span class="blue-text">Kill:</span> {{sniper.kill}}</p>
                                <p class="lista-piccola"><span class="red-text">Partite:</span> {{sniper.partite}}</p>
                                <p class="lista-piccola"><span class="blue-text">Danni:</span> {{sniper.danni}}</p>
                            </div>
                            <div class= "column is-half" >
                                <p class="lista-piccola"><span class="red-text">Trofei per partita:</span> {{trofei_x_partita(sniper.id)}}</p>
                                <p class="lista-piccola"><span class="blue-text">Kill per partita:</span> {{(sniper.kill / sniper.partite).toFixed(1)}}</p>
                                <p class="lista-piccola"><span class="red-text">Danni per partita:</span> {{(sniper.danni / sniper.partite).toFixed(1)}}</p>
                                <p class="lista-piccola"><span class="blue-text">Posizione media:</span> {{(sniper.posizioni / sniper.partite).toFixed(1)}}</p>
                            </div>
                        </div>
                </p>
            </div>
        </div>
        
        <div class="media-right">
            <div class="icon is-small">
                <div><strong class="has-text-info">{{sniper.trofei}}</strong></div>
                <i class="fa fa-pencil-square edit-icon" @click=trofei_x_partita(sniper.id)></i>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "SniperSheet",
    props:['sniper'],

    computed: {

    },

    methods: {
        trofei_x_partita(sniperID){
            const sniperObj = this.$store.getters.getSniperById(sniperID);
            alert(sniperObj.nome);
        }
    }
    
}
</script>


<style lang="css" scoped>
#brawler-sheet {
  background: #FFF;
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.red-text{
  color: red;
  font-weight: 800; 
}

.blue-text{
  color: #3c296b;
  font-weight: 800; 
}

.w-text{
  color: white;
}

.lista-piccola{
  font-size: 0.7em;
}

.image.is-64x92{
  position: relative;
  top: 5px;
  border-radius: 20px;
  width: 85px;
  height: auto;
}

.col10{
    margin-top: 5px;
    width: 408px;
    height: 60px;
}

.blockquote {
margin: 0;
background: #3c296b;
color: white;
padding: 30px;
position: relative;
text-align: center;
text-transform: uppercase;
font-family: 'Lato', sans-serif;
}

.sinistro{
    float: left;
    width: 50%;
}

.destro{
    float: right;
    width: 50%;
}

</style>