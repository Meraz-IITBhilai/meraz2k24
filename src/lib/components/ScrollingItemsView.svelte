<script>
	export let events = [];
  export let type;
</script>

<div class="final">
    <div class="container">
        {#each events as event}
            {#if type === 'pronite' || type === 'informals'}
                <div class="hexagon">
                    <div class="shape">
                        <img src={`/assets/event-images/${event.image}`} alt=""/>
                    </div>
                </div>
            {:else}
                <a href={`/events/${type}/${event.id}`}>
                    <div class="hexagon">
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
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        // flex-wrap: wrap;
        width: fit-content;
        margin-left: 30px;

        .hexagon {
            position: relative;
            width: 350px;
            height: 400px;
            margin: 50px 5px 70px;
            flex-shrink: 0;
            transition: all 0.5s ease-in-out;
            &:hover{
                transform: scale(1.05);
            }

            .shape {
                img {
                    height: 100%;
                    width: 100%;
                }
                position: absolute;
                top: 0;
                height: 100%;
                width: 100%;
                left: 0;
                background-color: white;
                clip-path: polygon(50% 0, 100% 25%, 100% 70%, 50% 100%, 0 70%, 0 25%);
                display: flex;
                justify-content: center;
                align-content: center;
            }
        }
    }

}
.final::-webkit-scrollbar {
    display: none;
}
@media only screen and (max-width: 900px) {
  .final {
    margin-top: 100px;
    // margin-left: 100px;
  }
}
@media only screen and (max-width: 600px) {
  .final {
    // margin-top: 300px;
    // margin-left: 50px;
  }
}
</style>
