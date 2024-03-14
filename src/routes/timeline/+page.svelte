<script>
  import SectionHeader from "$lib/components/SectionHeader.svelte";
</script>

<svelte:head>
  <title>Timeline | Meraz '24</title>
  <script type="text/javascript" src="https://unpkg.com/vis-timeline@latest/standalone/umd/vis-timeline-graph2d.min.js"></script>
  <link href="https://unpkg.com/vis-timeline@latest/styles/vis-timeline-graph2d.min.css" rel="stylesheet" type="text/css" />
</svelte:head>

<div class="container">
  <div class="heading">
    <SectionHeader name="Schedule"/>
  </div>
  <div class="box">
    <a href="https://docs.google.com/spreadsheets/d/1Ze7gMTYuhjnBzuGcTF-m5vdGILBFTtayVSlS9WlqvTA/edit#gid=2115344226" class="redirect-button">
      View in Google Sheets
    </a>
  </div>
</div>

<style>
  .container {
    background-image: url('/assets/schedule_bg.jpeg');
    font-family: BluuNext, 'Yusei Magic';
    font-size: 1.5rem;
    align-items: center;
    background-size: cover;
    padding-bottom: 9.563rem;
    background-position: center;
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    text-align: center; 
    height: 100vh; 
  }

  .heading {
    position: relative;
    margin-bottom: 20vh; 
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: center; 
  }

  .redirect-button {
    padding: 10px 40px;
    border-radius: 10px;
    vertical-align: middle;
    border: 2px solid #bfbfbf;
    text-align: center;
  }

  .redirect-button:hover {
    background-color: #f1d380;
    font-weight: 900;
    color: #121212;
  }

</style>
