<script>
	export let events = [];
  export let type;
</script>

<div class="final">
    <div class="container">
        {#each events as event}
            {#if type === 'pronite' || type === 'informals'}
                <div class="roundHex">
                    <div class="shape">
                        <img src={`/assets/event-images/${event.image}`} alt=""/>
                    </div>
                </div>
            {:else}
                <a href={`/events/${type}/${event.id}`}>
                    <div class="roundHex">
                        <div class="shape">
                            <img src={`/assets/event-images/${event.image}`} alt=""/>
                        </div>
                    </div>
                </a>
            {/if}
        {/each}
    </div>
</div>

<style lang="scss">
	
	.final {
    padding-left: 15%;
    margin-top: 80px;
    padding-bottom: 100px;
    overflow-x: auto;  // Enable horizontal scrolling
    white-space: nowrap;  // Prevent wrapping to new lines
    // background-color: white;

    .container {
        margin-top: 100px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        margin-left: 30px;
        gap: 20px;

        .roundHex {
            position: relative;
            &:hover{
                transform: scale(1.05);
            }
            img {
                top: -90px;
                position: absolute;
                height: 200%;
                width: 100%;
                -webkit-clip-path: polygon(
                50% 0,
                100% 25%,
                100% 70%,
                50% 100%,
                0 70%,
                0 25%
                );
                clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
            }
            margin: 0 auto;
            position: relative;
            border-radius: 10px;
            height: 200px;
            width: 331px;
            background: transparent;
            box-sizing: border-box;
            transition: all 1s;
            border: 10px solid transparent;
            border-left-color: gold;
            border-right-color: gold;
        }
        .roundHex:before,
        .roundHex:after {
        content: "";
        border: inherit;
        position: absolute;
        top: -10px;
        left: -10px;
        background: inherit;
        border-radius: inherit;
        height: 100%;
        width: 100%;
    }
    .roundHex:before {
        transform: rotate(60deg);
    }
    .roundHex:after {
        transform: rotate(-60deg);
    }

    }

}
.final::-webkit-scrollbar {
    display: none;
}
@media only screen and (max-width: 900px) {
  .final {
    margin-top: 100px;
  }
}
@media only screen and (max-width: 474px) {
    .final {
        padding-left:5%;
        .container{
            margin-left: 0px;
        .hexagon {
            width: 300px;
            height: 350px;
        }
  }
}
}
</style>