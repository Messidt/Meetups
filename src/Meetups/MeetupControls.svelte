<script>
    import Button from "../UI/Button.svelte";
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();
</script>
<style>
</style>
<div class="controls">
    <Button type="Button" caption="All" on:click={() => dispatch('filter', 'all')}></Button>
    <Button type="Button" caption="Favourites" on:click={() => dispatch('filter', 'favs')}></Button>
</div>