<script>
    import Header from "./UI/Header.svelte";
    import EditMeetupForm from "./Meetups/EditMeetupForm.svelte";
    import MeetupGrid from "./Meetups/MeetupGrid.svelte";
    import Button from "./UI/Button.svelte";
    import meetupsStore from "./Meetups/meetups-store";
    import MeetupDetails from "./Meetups/MeetupDetails.svelte";

    let editMode = false;
    let page = 'overview';
    let detailsId;
    let editedMeetupId;

    let newMeetupCard = {
            title: '',
            subtitle: '',
            description: '',
            imageUrl: '',
            address: '',
            contactEmail: '',
            favourite: false
    };

    function submitForm(event) {
        editMode = false;
    }

    function markAsFavourite(event) {
        meetupsStore.markAsFavourite(event.detail);
    }

    function showDetails(event) {
        page = 'details';
        console.log(event);
        detailsId = event.detail;
    }

    function showOverview() {
        page = 'overview';
    }

    function editMeetup(event) {
        editedMeetupId = event.detail;
        editMode = true;
    }
</script>
<style>
    main {
        margin-top: 4.5rem;
    }
</style>

<Header/> 
<main>
    {#if page === 'overview'}
        {#if editMode}
        <EditMeetupForm on:onSubmit={submitForm} on:cancelModal={() => editMode = false} id={editedMeetupId}/>
        {/if}
        <MeetupGrid meetUps={$meetupsStore} on:toggleFavourite={markAsFavourite} on:showDetails={showDetails} on:editMeetup={editMeetup}  on:addNew={() => editMode = true}/>
    {:else}
        <MeetupDetails id={detailsId} on:cancel={showOverview}/>
    {/if}
</main>





