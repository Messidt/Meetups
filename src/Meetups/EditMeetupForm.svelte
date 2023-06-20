<script>
    import { createEventDispatcher } from "svelte";
    import TextInput from "../UI/TextInput.svelte";
    import Button from "../UI/Button.svelte";
    import Modal from "../UI/Modal.svelte";
    import {isEmpty} from "../helpers/helpers"
    import meetupsStore from './meetups-store';

    const dispatch = createEventDispatcher();
    export let id = null;

    let newMeetupCard = {
            title: '',
            subtitle: '',
            description: '',
            address: '',
            contactEmail: '',
            favourite: false
    };

    $: titleValid = !isEmpty(newMeetupCard.title);
    $: subtitleValid = !isEmpty(newMeetupCard.subtitle);
    $: descriptionValid = !isEmpty(newMeetupCard.description);
    $: addressValid = !isEmpty(newMeetupCard.address);
    $: contactEmailValid = !isEmpty(newMeetupCard.contactEmail);

    function submitForm() {
        if(id) {
            meetupsStore.updateMeetup(id, newMeetupCard);
        } else {
            meetupsStore.addMeetup(newMeetupCard);
        }
        dispatch('onSubmit');
    }

    if(id) {
        const unsubscribe = meetupsStore.subscribe((data) => {
            newMeetupCard = data.find((mtps) => mtps.id === id);
        });
        unsubscribe();
    }
</script>
<style>
    form {
        width: 100%;
    }
</style>
<Modal on:cancelModal title="Edit meetup">
    <form on:submit|preventDefault={submitForm}>
        <TextInput id="title" label="Title" value="{newMeetupCard.title}"
         type="text" on:input={(event) => {newMeetupCard.title = event.target.value}}
         validationMessage="Please enter a title" valid={titleValid}/>
        <TextInput id="subtitle" label="Subtitle" value="{newMeetupCard.subtitle}"
         type="text" on:input={(event) => {newMeetupCard.subtitle = event.target.value}}
         validationMessage="Please enter a subtitle" valid={subtitleValid}/>
        <TextInput id="address" label="Address" value="{newMeetupCard.address}"
         type="text" on:input={(event) => {newMeetupCard.address = event.target.value}}
         validationMessage="Please enter address" valid={addressValid}/>
        <TextInput id="contactEmail" label="Contact Email" value="{newMeetupCard.contactEmail}"
         type="email" on:input={(event) => {newMeetupCard.contactEmail = event.target.value}}
         validationMessage="Please enter email" valid={contactEmailValid}/>
        <TextInput id="description" label="Description" rows="3" value="{newMeetupCard.description}"
         type="textarea" on:input={(event) => {newMeetupCard.description = event.target.value}}
         validationMessage="Please enter description" valid={descriptionValid}/>
        <Button type="submit" caption="Submit"/>
    </form>
</Modal>
