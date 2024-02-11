<script>
  import CardBackground from "$lib/designs/cardBackground.svelte";
  import ActualCardBackground from "$lib/designs/ActualCardBackground.svelte";

  /**
  * @type {{ name: string, image: string, comment1: string, comment2: string}}
  */
  export let data = {
    name: "",
    image: "",
    comment1: "",
    comment2: ""
  };
</script>

<div class="root">
  <div class="card-background">
    <CardBackground/>
  </div>
  <div class="top-card-container">
    <div class="top-card">
      <div class="card-design">
        <ActualCardBackground />
      </div>
      <div class="top-card-content">
        <div class="card-content-tagline">
          <div class="card-tagline-left">
            {data.comment1}
          </div>
          <div class="card-tagline-right">
            {data.comment2}
          </div>
        </div>
        <div class="card-content-image">
        </div>
        <div class="card-content-name">
          <div class="card-name">
            {data.name}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .root{
    position: relative;
    font-family: "BluuNext";
    min-width: max(27vw, 10.8em);
    min-height: max(33vw, 13.2em);
  }
  .card-background{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 50;
  }
  .top-card-container{
    position: absolute;
    top: 7%;
    right: 10%;
    bottom: 6.2%;
    left: 10%;
    z-index: 100;
  }
  .top-card{
    background: #191919;
    width: 100%;
    height: 100%;
    z-index: 110;
  }

  /* Content inside the card */
  .card-design{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 120;
  }
  .top-card-content{
    position: relative;
    z-index: 130;
    width: 100%;
    height: 100%;
  }
  .card-content-tagline{
    position: absolute;
    width:    86%;
    top:      4%;
    left:     7%;

    display:         flex;
    vertical-align:  middle;
    justify-content: space-between;
    text-align:      center;
    color:           #AB8D60;
    font-weight:     bold;
  }
  .card-tagline-left, .card-tagline-right{
     font-size: 16px;
  }
  .card-content-image{
    position: absolute;
    background-image: url(/assets/darshan_raval.png);
    background-size: cover;
    width:    86%;
    top:      12%;
    left:     7%;
    height:   73%;
  }
  .card-content-name{
    position:        absolute;
    height:          9%;
    width:           86%;
    bottom:          3.5%;
    left:            7%;

    display:         flex;
    vertical-align:  middle;
    justify-content: center;
    text-align:      center;
    color:           #AB8D60;
    font-weight:     bold;
    font-size: 22px;
  }
</style>

