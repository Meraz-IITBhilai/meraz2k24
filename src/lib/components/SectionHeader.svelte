<script>
	/** @type {string} */
	export let name = "";
  export let padding = 1
</script>

<div class="root">
  <div>
    <img src="assets/header_icon.svg" width="60px" class="icon" alt="" />
  </div>
  <div class="heading-text" style="padding-left:{padding}rem;">
    {name}
  </div>
</div>

<style lang="scss">
  .root{
    position: relative;
    display: flex;
    justify-content: center;
    font-family: "BluuNext";
    color: #ffbe4a;
  }
  .icon{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .heading-text{
    font-size: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

