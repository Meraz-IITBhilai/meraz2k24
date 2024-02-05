<script>
  import { onMount } from 'svelte';
  import SectionHeader from "../../lib/components/SectionHeader.svelte";

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

var items = new vis.DataSet([
    {
        id: 0,
        group: 0,
        content: "Event 1",
        start: new Date(2024, 3, 8, 8, 0),
        end: new Date(2024, 3, 8, 9, 0),
        style: 'border-color: blue; background-color: lightblue; border-radius: 5px;',
    },
    {
        id: 1,
        group: 0,
        content: "Event 2",
        start: new Date(2024, 3, 9, 10, 0),
        end: new Date(2024, 3, 9, 11, 0),
        style: 'border-color: blue; background-color: lightblue; border-radius: 5px;',
    },
    {
        id: 2,
        group: 1,
        content: "Event 3",
        start: new Date(2024, 3, 8, 13, 30),
        end: new Date(2024, 3, 8, 14, 30),
        style: 'border-color: green; background-color: lightgreen; border-radius: 5px;',
    },
    {
        id: 3,
        group: 1,
        content: "Event 4",
        start: new Date(2024, 3, 9, 8, 0),
        end: new Date(2024, 3, 9, 9, 0),
        style: 'border-color: green; background-color: lightgreen; border-radius: 5px;',
    },
    {
        id: 4,
        group: 1,
        content: "Event 5",
        start: new Date(2024, 3, 8, 16, 45),
        end: new Date(2024, 3, 8, 17, 45),
        style: 'border-color: orange; background-color: yellow; border-radius: 5px;',
    },
    {
        id: 5,
        group: 2,
        content: "Event 6",
        start: new Date(2024, 3, 9, 8, 0),
        end: new Date(2024, 3, 9, 9, 0),
        style: 'border-color: orange; background-color: yellow; border-radius: 5px;',
    },
    {
        id: 6,
        group: 3,
        content: "Event 7",
        start: new Date(2024, 3, 8, 11, 0),
        end: new Date(2024, 3, 8, 12, 0),
        style: 'border-color: red; background-color: lightcoral; border-radius: 5px;',
    },
    {
        id: 7,
        group: 4,
        content: "Event 8",
        start: new Date(2024, 3, 9, 14, 0),
        end: new Date(2024, 3, 9, 15, 0),
        style: 'border-color: purple; background-color: lavender; border-radius: 5px;',
    },
]);

var container = document.querySelector(".visualizer");
var options = {
    editable: false,
    movable: true,
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
