<script>
  import { onMount } from 'svelte';
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import {schedule} from "$lib/data/schedule.js"

  let timeline;

  onMount(async () => {
      // DOM element where the Timeline will be attached

var groups = new vis.DataSet([
    { id: 0, content: "LHC Foyer", value: 1 },
    { id: 1, content: "LH101", value: 3 },
    { id: 2, content: "LH102", value: 2 },
    { id: 3, content: "L105/L209 FOYER", value: 4 },
    { id: 4, content: "LHC Foyer", value: 5 },
    { id: 5, content: "LH209", value: 6 },
    { id: 6, content: "Institute Club", value: 7 },
    { id: 7, content: "STALLS IN ARENA", value: 8},
    { id: 8, content: "Cricket Ground", value: 9},
    { id: 9, content: "Mini Stage", value: 10},
    { id: 10, content: "LH500", value: 11},
    { id: 11, content: "LH103", value: 12},
    { id: 12, content: "LH104", value: 13},
    { id: 13, content: "Main Stage", value: 14},
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
  <title>Timeline | Meraz '24</title>
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
  <div>
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
      background-color: black;
    }
  
    .box {
      margin: 50px;
      padding: 5vw;
    }
  
    .redirect-button {
      padding: 6px 30px;
      border-radius: 10px;
      display: none;
      vertical-align: middle;
      border: 2px solid #bfbfbf;
      text-align: center;
      margin: 10px;
    }
  
    .redirect-button:active {
      background-color: #f1d380;
      font-weight: 900;
      color: #121212;
    }
  
    @media (max-width: 600px) {
      .box {
        display: none;
      }
  
      .redirect-button {
        display: inline-block;
      }
    }
  </style>
  


