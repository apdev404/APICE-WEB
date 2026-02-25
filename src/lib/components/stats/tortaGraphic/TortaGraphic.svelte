<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { Chart, registerables } from 'chart.js';

  Chart.register(...registerables);

  export let labels: string[] = [];
  export let data: number[] = [];

  let canvas: HTMLCanvasElement;
  let chart: Chart;

  onMount(() => {
    chart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: [
              '#FD7D00', // amarillo
              '#043939', // verde
              '#b81111', // rojo
              '#120aa3', // azul extra si agregás más
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  });

  onDestroy(() => {
    chart?.destroy();
  });
</script>

<div class="w-full max-w-md mx-auto">
  <canvas bind:this={canvas}></canvas>
</div>