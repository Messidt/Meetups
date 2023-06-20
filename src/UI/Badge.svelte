<script>
    import { slide } from 'svelte/transition'
</script>

<style>
    span {
    display: inline-block;
    margin: 0 0.25rem;
    border-radius: 3px;
    border: 1px solid #3e4ab8;
    background: #3e4ab8;
    color: white;
    padding: 0 0.5rem;
    font-family: "Lato", sans-serif;
    font-size: 0.8rem;
    }
</style>

<span transition:slide><slot/></span>