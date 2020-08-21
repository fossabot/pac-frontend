export const locations = [
    {
        id: 1,
        name: "Belexpo Centar",
    },
    {
        id: 2,
        name: "Hotel Plaza",
    },
    {
        id: 3,
        name: "Belgrade Fair Building One",
    }
];

export const events = [
    {
        id: 1,
        name: "Best Java Conference",
        beginDate: "2021-02-12T00:00:00Z",
        endDate: "2021-02-14T00:00:00Z",
        location: locations[0], // Belexpo Centar
    },
    {
        id: 2,
        name: "Prodyna Job Fair",
        beginDate: "2021-05-02T00:00:00Z",
        endDate: "2021-05-05T00:00:00Z",
        location: locations[1], // Hotel Plaza
    },
    {
        id: 3,
        name: "IT Connect",
        beginDate: "2021-05-10T00:00:00Z",
        endDate: "2021-05-12T00:00:00Z",
        location: locations[1], // Hotel Plaza
    },
    {
        id: 4,
        name: "Cloud Native Conference",
        beginDate: "2021-05-22T00:00:00Z",
        endDate: "2021-05-23T00:00:00Z",
        location: locations[2], // Belgrade Fair Building One
    },
    {
        id: 5,
        name: "Google I/O",
        beginDate: "2021-06-02T00:00:00Z",
        endDate: "2021-06-05T00:00:00Z",
        location: locations[2], // Belgrade Fair Building One
    },
];

export const organizations = [
    {
        id: 1,
        name: "Prodyna SE",
    },
    {
        id: 2,
        name: "Google",
    },
];

export const rooms = [
    {
        id: 1,
        name: "Red Room",
        organization: organizations[0], // Prodyna
    },
    {
        id: 2,
        name: "White Room",
        organization: organizations[0], // Prodyna
    },
    {
        id: 3,
        name: "Blue Room",
        organization: organizations[0], // Prodyna
    },
    {
        id: 4,
        name: "Google Room",
        organization: organizations[1], // Google
    }
];

export const topics = [
    {
        id: 1,
        name: "Java"
    },
    {
        id: 2,
        name: "Hibernate",
        children: [{id: 1, name: "Java"}]
    },
    {
        id: 3,
        name: "Spring",
        children: [{id: 1, name: "Java"}, {id: 2, name: "Hibernate"}]
    },
    {
        id: 4,
        name: "Kubernetes",
    },
    {
        id: 5,
        name: "JavaScript",
    },
    {
        id: 6,
        name: "Job Market",
    },
];

export const speakers = [
    {
        id: 1,
        name: "Darko Krizic",
        organization: organizations[0], // Prodyna
    },
    {
        id: 2,
        name: "Goran Grujic",
        organization: organizations[0], // Prodyna
    },
    {
        id: 3,
        name: "Milos Nikolic",
        organization: organizations[0], // Prodyna
    },
    {
        id: 4,
        name: "Aaron Koblin",
        organization: organizations[1], // Google
    },
];

export const talks = [
    {
        id: 1,
        title: "Java, Spring, and You",
        durationInMinutes: 90,
        language: "English",
        level: "beginner",
        persons: [speakers[0], speakers[1]],        // Darko Krizic, Goran Grujic
        topics: [topics[0], topics[1], topics[2]],  // Java, Spring, Hibernate
        talkDates: [],
    },
    {
        id: 2,
        title: "Fullstack JavaScript on Kubernetes",
        durationInMinutes: 60,
        language: "Serbian",
        level: "expert",
        persons: [speakers[2]],             // Milos Nikolic
        topics: [topics[3], topics[4]],     // JavaScript, Kubernetes
        talkDates: [],
    },
    {
        id: 3,
        title: "Java for Beginners",
        durationInMinutes: 60,
        language: "English",
        level: "beginner",
        persons: [speakers[1]],  // Goran Grujic
        topics: [topics[0]],     // Java
        talkDates: [],
    },
    {
        id: 4,
        title: "The IT Job Market Today",
        durationInMinutes: 60,
        language: "English",
        level: "beginner",
        persons: [speakers[3]],             // Aaron Koblin
        topics: [topics[0], topics[5]],     // Java, Job Market
        talkDates: [],
    },
];

export const talkDates = [
    {
        id: 1,
        beginDate: "2021-05-12T14:00:00Z",
        talk: talks[0],         // Java, Spring, and You
        room: rooms[0],         // Red Room
        event: events[0],       // Best Java Conference
        location: locations[0], // Belexpo Centar
    },
    {
        id: 2,
        beginDate: "2021-05-02T10:00:00Z",
        talk: talks[1],         // Fullstack JavaScript on Kubernetes
        room: rooms[1],         // White Room
        event: events[1],       // Prodyna Job Fair
        location: locations[1], // Hotel Plaza
    },
    {
        id: 3,
        beginDate: "2021-05-02T13:00:00Z",
        talk: talks[2],         // Java for Beginners
        room: rooms[1],         // White Room
        event: events[1],       // Prodyna Job Fair
        location: locations[1], // Hotel Plaza
    },
    {
        id: 4,
        beginDate: "2021-05-10T14:00:00Z",
        talk: talks[2],         // Java for Beginners
        room: rooms[2],         // Blue Room
        event: events[2],       // IT Connect
        location: locations[1], // Hotel Plaza
    },
    {
        id: 5,
        beginDate: "2021-06-02T15:00:00Z",
        talk: talks[3],         // The IT Job Market Today
        room: rooms[3],         // Google Room
        event: events[2],       // Google I/O
        location: locations[2], // Belgrade Fair Building One
    },
    {
        id: 6,
        beginDate: "2021-05-10T12:00:00Z",
        talk: talks[3],         // The IT Job Market Today
        room: rooms[2],         // Blue Room
        event: events[2],       // IT Connect
        location: locations[1], // Hotel Plaza
    },
];


// Back-patch talk dates:
talks[0].talkDates = [talkDates[0]];    // Java, Spring, and You
talks[1].talkDates = [talkDates[1]];    // Fullstack JavaScript on Kubernetes
talks[2].talkDates = [talkDates[2], talkDates[3]];    // Java for Beginners
talks[3].talkDates = [talkDates[4], talkDates[5]];    // The IT Job Market Today
