import { writable } from "svelte/store";

const meetupsStore = writable(
    [
        {
            id: 'mt1',
            title: 'Tongo show',
            subtitle: 'Le tongee!',
            description: 'Great Tongo concert',
            address: '1 Brassroad, 123 Uganda',
            contactEmail: 'whyareyougay@cucumber.pl',
            favourite: false
        },
        {
            id: 'mt2',
            title: 'Uganda Commando movie',
            subtitle: 'Watch it before you are Ge!',
            description: 'Watch this amazing movie',
            address: '23 Brassroad, 3 Kenia',
            contactEmail: 'sodomydefenda@cucumber.pl',
            favourite: false
        }
    ]
);

const customMeetupsStore = {
    subscribe: meetupsStore.subscribe,
    addMeetup: (newMeetupData) => {
        const newMeetup = {...newMeetupData, id: Math.random(), favourite: false};
        meetupsStore.update((mtps) => {
            return [...mtps, newMeetup];
        });
    },
    updateMeetup: (id, meetupData) => {
        meetupsStore.update((mtps) => {
            let updatedMeetupIndex = {...mtps.findIndex((meetup) => meetup.id === id)};
            let updatedMeetup = {...mtps[updatedMeetupIndex], ...meetupData};
            let updatedMeetups = [...mtps];
            updatedMeetup[updatedMeetupIndex] = updatedMeetup;
            return updatedMeetups;
        });
    },
    deleteMeetup: (id) => {
        meetupsStore.update((mtps) => {
            return [...mtps].filter((elm) => elm.id !== id);
        });
    },
    markAsFavourite: (id) => {
        meetupsStore.update((mtps) => {
            let favedMeetup = {...mtps.find((meetup) => meetup.id === id)};
            favedMeetup.favourite = !favedMeetup.favourite;
            const favMeetupIndex = mtps.findIndex((mtp) => mtp.id === id );
            const updatedMeetups = [...mtps];
            updatedMeetups[favMeetupIndex] = favedMeetup;
            return updatedMeetups;
        });
    }
}

export default customMeetupsStore;