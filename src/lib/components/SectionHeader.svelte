<script>
	/** @type {string} */
	export let name = "";
  export let padding = 1
</script>

<div class="root">
  <div>
    <img src="assets/header_icon.svg" width="60px" class="icon" alt="" />
  </div>
  <h1 class="heading-text" style="padding-left:{padding}rem;">
    {name}
  </h1>
</div>

<style lang="scss">
  .root{
    position: relative;
    display: flex;
    justify-content: center;
    font-family: "BluuNext";
    max-width: 100vw;

    color: #ffbe4a;
  }
  .icon{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .heading-text{
    // font-size: 2.8em;
    justify-content: center;
    align-items: center;
  }
</style>

