<script>
    export let isPageLoaded;

    let disp = "none";
    $: disp= isPageLoaded ? "none" : "block";
</script>

    <div class="loader" style="{`display: ${disp}`}">
        <div id="wrapper" class="center">
            <svg class="progress hexagon noselect" viewBox="0 0 100 115">
                <polygon class="fill" points="50,1 95,25 95,75 50,99 5,75 5,25"></polygon>
                <text class="value" x="50%" y="50%">0%</text>
            </svg>
        </div>
    </div>

    <style>
    .loader {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: black;
        z-index: 9999;
    }

    #wrapper {
        display: inherit;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        width: 300px;
    }

    .progress {
        display: inherit;
        width: 300px; 
        height: 350px;
    }

    .progress .fill {
        display: inherit;
        fill: rgba(0, 0, 0, 0);
        stroke-width: 2;
        stroke: #f3c156;
        stroke-linecap: round;
        transition: stroke-dasharray 1s;
    }

    .progress .value {
        display: inherit;
        font-family: "Open Sans";
        fill: white;
        text-anchor: middle;
        font-size: 16px;
    }

    .noselect {
        display: inherit;
        user-select: none;
        cursor: default;
    }

    </style>
