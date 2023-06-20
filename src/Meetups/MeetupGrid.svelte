<script>
    import MeetupItem from "./MeetupItem.svelte";
    import { createEventDispatcher } from "svelte";
    import MeetupControls from "./MeetupControls.svelte";
    import Button from "../UI/Button.svelte";
    import { scale } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    const dispatch = createEventDispatcher();
    export let meetUps;
    let showFavs = false;
    $: meetupsSource = showFavs ? meetUps.filter(m => m.favourite === true) : meetUps;

    function toggleFavs(event) {
        showFavs = event.detail === 'favs';
    }
</script>
<style>
    #meetups {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1rem;
    }
  
    #meetup-controls {
      margin: 1rem;
      display: flex;
      justify-content: space-between;
    }
  
    @media (min-width: 768px) {
      #meetups {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  </style>
<section id="meetup-controls">
    <MeetupControls on:filter={toggleFavs}/>
    <Button type="button" caption="New Meetup" on:click={() => dispatch('addNew')}/>
</section>
<section id="meetups">
    {#each meetupsSource as meetUp (meetUp.id)}
    <div transition:scale animate:flip={{duration: 300}}>
        <MeetupItem meetupItem="{meetUp}" on:toggleFavourite on:showDetails on:editMeetup/>
    </div>
    {/each}
</section>