<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { fly } from "svelte/transition";
    import { bounceOut, backIn } from "svelte/easing";
    
    const dispatch = createEventDispatcher();

    export let id: number;
    export let description: string;
    export let completed: boolean;
    
    function onToggle() {
        dispatch("toggle", { id: id, completed: !completed });
    }

    function onDelete() {
        if (!confirm("Are you sure you want to delete this todo?")) return;
        dispatch("delete", { id: id });
    }
</script>

<div
    class="card"
    transition:fly|local={{ x: 700, duration: 400 }}
>
    <h3 style="flex: 1 1 auto; margin: 0;">{ description }</h3>
{#if completed}
    <button class="pure-button flat" title="Complete" on:click={onToggle}>
        <span class="material-icons">check_box</span>
    </button>
{:else}
    <button class="pure-button flat" title="Complete" on:click={onToggle}>
        <span class="material-icons">check_box_outline_blank</span>
    </button>
{/if}
    <button class="pure-button" style="background: rgb(202, 60, 60); color: white;" title="Delete" on:click={onDelete}>
        <span class="material-icons">delete</span>
    </button>
</div>

<style>
    .card {
        margin-bottom: 5px;
        padding: 16px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
    }

    .flat {
        border: none;
        background-color: transparent;
    }
</style>