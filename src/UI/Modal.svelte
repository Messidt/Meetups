<script>
    import { createEventDispatcher } from "svelte";
    import { fly, fade } from 'svelte/transition';
    let dispatch = createEventDispatcher();
    export let title;
</script>
<style>
    .backdrop {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, .75);
        z-index: 10;
    }

    .modal {
        position: fixed;
        top: 10vh;
        left: 10%;
        width: 80%;
        max-height: 80vh;
        background: white;
        border-radius: 5px;
        z-index: 100;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    }

    h1 {
        text-align: center;
        padding: 1rem;
        margin: 0;
        border-bottom: 1px solid #ccc;
        font-family: 'Roboto Slab', sans-serif;
    }

    .content {
        margin: auto;
        padding: 1rem;
    }

    .footer {
        padding: 1rem;
    }

    @media (min-width: 768px) {
        .modal {
            width: 40rem;
            left: calc(50% - 20rem);
        }
    }

</style>
<div class="backdrop" on:click={() => dispatch('cancelModal')} transition:fade></div>
<div class="modal" transition:fly={{y: 300}}>
    <div class="header">
        <h1>{title}</h1>
    </div>
    <div class="content">
        <slot/>
    </div>
    <div class="footer">
        <slot name="footer"/>
    </div>
</div>