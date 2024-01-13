<script>
    import { onMount } from 'svelte';
  
    let timeline;
  
    onMount(() => {
      // DOM element where the Timeline will be attached
var groups = new vis.DataSet([
  { id: 0, content: "First", value: 1 },
  { id: 1, content: "Third", value: 3 },
  { id: 2, content: "Second", value: 2 },
]);

// create a dataset with items
// note that months are zero-based in the JavaScript Date object, so month 3 is April
var items = new vis.DataSet([
  {
    id: 0,
    group: 0,
    content: "item 0",
    start: new Date(2014, 3, 17),
    end: new Date(2014, 3, 21),
  },
  {
    id: 1,
    group: 0,
    content: "item 1",
    start: new Date(2014, 3, 19),
    end: new Date(2014, 3, 20),
  },
  {
    id: 2,
    group: 1,
    content: "item 2",
    start: new Date(2014, 3, 16),
    end: new Date(2014, 3, 24),
  },
  {
    id: 3,
    group: 1,
    content: "item 3",
    start: new Date(2014, 3, 23),
    end: new Date(2014, 3, 24),
  },
  {
    id: 4,
    group: 1,
    content: "item 4",
    start: new Date(2014, 3, 22),
    end: new Date(2014, 3, 26),
  },
  {
    id: 5,
    group: 2,
    content: "item 5",
    start: new Date(2014, 3, 24),
    end: new Date(2014, 3, 27),
  },
]);

// create visualization
var container = document.querySelector(".visualizer");
var options = {
  // option groupOrder can be a property name or a sort function
  // the sort function must compare two groups and return a value
  //     > 0 when a > b
  //     < 0 when a < b
  //       0 when a == b
//   groupOrder: function (a, b) {
//     return a.value - b.value;
//   },
  editable: false,
  movable: true,
  zoomable: false,
  horizontalScroll: true,
  orientation: {axis : 'top'},
  rollingMode: {follow: false},

    // horizontalScroll : true,
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
  
  <div class="body">
    <div class="heading"><h1>Timeline</h1></div>
  <div class = "box">
    <div class="visualizer"></div>
</div>
  </div>
  
  <style>
    .heading {
      font-family: 'Oswald', 'cursive';
      font-size: 450%;
      position: relative;
      top: 4%;
      left: 15%;
      width: 70%;
      margin-bottom: 5%;
      text-align: center;
    }
  
    .visualizer {
        padding-left: 10px;
      width: auto;
      height: auto;
      border: 1px solid lightgray;
      margin: 0 auto;
      justify-items: center;
      background-color: bisque;
    }
    .box{
        margin: 100px;
    }
  </style>
  