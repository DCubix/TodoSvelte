<script lang="ts">
import logo from './assets/svelte.png';
import Todo from "./lib/Todo.svelte";

</script>

<svelte:head>
  <!-- material icons -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

  <!-- Google Fonts -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">

  <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/pure-min.css" integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH" crossorigin="anonymous">
</svelte:head>

<main>
  <div class="appBody">
    <h2 style="margin: 0; margin-bottom: 12px; display: flex; align-items: center;">
      <img alt="The project logo" src={logo} style="width: 32px; height: auto;" /> Svelte Todo App
    </h2>
    <Todo />
  </div>
</main>

<style>
  :global(html) {
    height: 100%;
  }
  :global(body) {
    background-color: #556aa5;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .appBody {
    width: 600px;
    margin: 0 auto;
    padding: 16px;

    background-color: #ccc;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }
</style>
