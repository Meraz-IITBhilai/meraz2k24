<script>
  import { onMount } from 'svelte';
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import {schedule} from "$lib/data/schedule.js"

  let timeline;

  onMount(() => {
      // DOM element where the Timeline will be attached
var groups = new vis.DataSet([
    { id: 0, content: "LH201", value: 1 },
    { id: 1, content: "LH202", value: 3 },
    { id: 2, content: "LH203", value: 2 },
    { id: 3, content: "LH204", value: 4 },
    { id: 4, content: "LH205", value: 5 },
    { id: 5, content: "LH206", value: 6 },
    { id: 6, content: "LH207", value: 7 },
]);

var items = new vis.DataSet(schedule);

var container = document.querySelector(".visualizer");
var options = {
    editable: false,
    moveable: true,
    zoomable: true,
    preferZoom: true,
    horizontalScroll: true,
    orientation: { axis: 'top' },
    rollingMode: { follow: false },
    showCurrentTime: true,
    align: 'box',
      hiddenDates: [
        { start: '2024-03-08 00:00:00', end: '2024-03-08 08:00:00', repeat: 'daily' }
      ],
};

var timeline = new vis.Timeline(container);
timeline.setOptions(options);
timeline.setGroups(groups);
timeline.setItems(items);
  });
</script>

<svelte:head>
  <title>Timeline | Meraz '22</title>
  <script type="text/javascript" src="https://unpkg.com/vis-timeline@latest/standalone/umd/vis-timeline-graph2d.min.js"></script>
  <link href="https://unpkg.com/vis-timeline@latest/styles/vis-timeline-graph2d.min.css" rel="stylesheet" type="text/css" />
</svelte:head>

<div class="container">
  <div class="heading">
      <SectionHeader name="Schedule"/>
  </div>
  <div class="box">
      <div class="visualizer"></div>
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
	}
  .heading {
    padding-top: 10vh;
    position: relative;
  }

  .visualizer {
      width: auto;
      height: auto;
      border: 1px solid gray;
      margin: 0;
      justify-items: center;
      background-color:transparent;
  }

  .box {
      margin: 100px;
      padding: 5vw;
  }

  /* Custom style for vis-item class */
</style>
