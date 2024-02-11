<script>
	import { onMount } from "svelte";

  export let events = [];
  export let type;

  let scroll;
  let items = {};
  onMount(()=>{});

</script>

<div class="main-container">
    <div class="scroll-container" on:scroll={(e) => console.log(e.target.scrollLeft)}>
        <div class="container">
            {#each events as event,i}
                {#if type === 'pronite' || type === 'informals'}
                    <div class="event-image" bind:this={items[i]}>
                        <img src={`/assets/event-images/${event.image}`} alt=""/>
                    </div>
                {:else}
                    <a href={`/events/${type}/${event.id}`}>
                        <div class="event-image" bind:this={items[i]}>
                            <img src={`/assets/event-images/${event.image}`} alt=""/>
                        </div>
                    </a>
                {/if}
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    .main-container {
        position: relative;
        display: contents;
    }
    .scroll-container{
        border: 1px solid purple;
        overflow-x: scroll;
        height: 100%;
    }
    .scroll-container::-webkit-scrollbar{
        display: none;
    }
    .container {
        position: auto;
        display: flex;
        height: 80%;
        justify-content: center;
        align-items: center;
        width: fit-content;
        gap: 1%;
        transform: translateX(50vw);
        border: 1px solid green;
    }

    .event-image {
        position: relative;
        margin: 0 auto;
        border-radius: 2px;
        height: min(50vh, 92.3vw);
        width: min(43.3vh, 80vw);
        background: var(--primary);
        padding: 3px;
        transition: all 1s;
        clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
        -webkit-clip-path: polygon(
            50% 0,
            100% 25%,
            100% 75%,
            50% 100%,
            0 75%,
            0 25%
        );
        &:hover{
            transform: scale(1.05);
        }
        img {
            position: absolute;
            height: calc(100% - 6px);
            width: calc(100% - 6px);
            -webkit-clip-path: polygon(
                50% 0,
                100% 25%,
                100% 75%,
                50% 100%,
                0 75%,
                0 25%
            );
            clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
        }
    }
</style>
