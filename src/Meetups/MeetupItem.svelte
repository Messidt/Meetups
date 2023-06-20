<script>
    import { createEventDispatcher } from "svelte";
    import Button from "../UI/Button.svelte";
    import Badge from "../UI/Badge.svelte";
    import meetupsStore from './meetups-store'
    export let meetupItem;
    const dispatch = createEventDispatcher();

    function deleteMeetup() {
        meetupsStore.deleteMeetup(meetupItem.id);
    }
    
</script>
<style>
    article {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      border-radius: 5px;
      background: white;
      margin: 1rem;
    }
  
    header, .content, footer {
      padding: 1rem;
    }
  
    h1 {
      font-size: 1.25rem;
      margin: 0.5rem 0;
      font-family: "Roboto Slab", sans-serif;
    }
  
    h2 {
      font-size: 1rem;
      color: #808080;
      margin: 0.5rem 0;
    }
  
    p {
      font-size: 1.25rem;
      margin: 0;
    }
  
    div {
      text-align: right;
    }
  
    .content {
      height: 4rem;
    }

    .title {
        display: flex;
        justify-content: flex-start;
    }

    .delete {
        color: red;
    }

    .delete:hover {
        cursor: pointer;
        color: rgb(189, 21, 21);
    }

    .favourite:hover {
        cursor: pointer;
        color: gold;
    }
  </style>

<article>
    <header>
        <div>
            <span class="material-symbols-outlined delete" on:click={deleteMeetup}>delete</span>
        </div>
        <div class="title">
            <h1>{meetupItem.title}</h1>
            <span class="material-symbols-outlined favourite" on:click={() => dispatch('toggleFavourite', meetupItem.id)}>star</span>
        </div>
        {#if meetupItem.favourite}
        <Badge>
            Favourite
        </Badge>
        {/if}
        <h2>{meetupItem.subtitle}</h2>
        <p>{meetupItem.address}</p>
    </header>
    <main class="content">
        <p>{meetupItem.description}</p>
    </main>
    <footer>
        <Button type="button" caption="Show details" on:click={() => dispatch('showDetails', meetupItem.id)}/>
        <Button type="button" caption="Edit" on:click={() => dispatch('editMeetup', meetupItem.id)}/>
    </footer>
</article>