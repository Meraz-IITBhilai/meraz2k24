<script>

</script>

    <div class="loader">
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
        display: grid;
        place-items: center;
        background-color: black;
        z-index: 9999;
    }

    #wrapper {
        position: relative;
        width: 400px; 
    }



    .progress {
        width: 300px; 
        height: 350px;
    }

    .progress .fill {
        fill: rgba(0, 0, 0, 0);
        stroke-width: 2;
        stroke: #f3c156;
        stroke-linecap: round;
        transition: stroke-dasharray 1s;
    }

    .progress .value {
        font-family: "Open Sans";
        fill: white;
        text-anchor: middle;
        font-size: 16px;
    }

    .noselect {
        user-select: none;
        cursor: default;
    }
      
    </style>