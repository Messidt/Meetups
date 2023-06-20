<script>
  import { createEventDispatcher } from 'svelte';
    import meetUpsStore from './meetups-store'
    import { onDestroy } from 'svelte';
    import Button from '../UI/Button.svelte';
    export let id;
    let meetupDetails = {};

    let dispatch = createEventDispatcher();

    let unsubscribe = meetUpsStore.subscribe((meetups) => {
      meetupDetails = meetups.find((mtp) => mtp.id === id);
    });

    onDestroy(() => {
      unsubscribe();
    });

</script>
<style>
section {
  margin-top: 4rem;
}

h1 {
  font-size: 2rem;
  font-family: 'Roboto Slab', sans-serif;
  margin: 0.5rem 0;
}

h2 {
  font-size: 1.25rem;
  color: #6b6b6b;
}

p {
  font-size: 1.5rem;
}
</style>

<section>
    <h1>{meetupDetails.title}</h1>
    <h2>{meetupDetails.subtitle}</h2>
    <p>{meetupDetails.description}</p>
    <Button type="buuton" caption="Cancel" on:click={() => dispatch('cancel')}/>
</section>