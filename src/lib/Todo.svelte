<script lang="ts">
    import { todoStore, globalID } from "./stores";
    import TodoItem from "./TodoItem.svelte";

    let todoText;

    function addTodo() {
        $globalID = $globalID + 1;
        $todoStore = [ ...$todoStore, { description: todoText, completed: false, id: $globalID } ];
        todoText.value = "";
    }

    function handleToggle(e) {
        let dat = e.detail;
        let idx = $todoStore.findIndex(t => t.id === dat.id);
        $todoStore[idx].completed = dat.completed;
    }

    function handleDelete(e) {
        let dat = e.detail;
        let idx = $todoStore.findIndex(t => t.id === dat.id);
        $todoStore = [ ...$todoStore.slice(0, idx), ...$todoStore.slice(idx + 1) ];
    }

</script>

<div class="todoContainer">
{#each $todoStore as todo}
    <TodoItem {...todo} on:toggle={handleToggle} on:delete={handleDelete} />
{:else}
    <span style="align-self: center; margin: auto; font-weight: bold; color: rgba(0,0,0,0.3)">No todos available.</span>
{/each}
</div>

<form on:submit={addTodo} class="pure-form">
    <fieldset>
        <label for="todo-text">
            <input id="todo-text" type="text" placeholder="What needs to be done?" bind:value={todoText} />
        </label>
        
        <input class="pure-button pure-button-primary" type="submit" value="Add Todo" />
    </fieldset>
</form>

<style>
    .todoContainer {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        height: 400px;
        overflow-y: auto;
        overflow-x: hidden;

        background-color: #bbb;
        border-radius: 5px;
    }
</style>