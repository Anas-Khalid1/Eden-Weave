import { getNextFriday, formatDate } from "@/utils/dateUtils";

// Upcoming events data - shared between home and events page
export const UPCOMING_EVENTS = [
  {
    id: "upcoming-1",
    title: "Friday Prayer (Jumuah)",
    date: formatDate(getNextFriday()),
    day: new Date(getNextFriday()).getDate().toString().padStart(2, "0"),
    month: new Date(getNextFriday()).toLocaleString("en-US", { month: "short" }).toUpperCase(),
    location: "Wavendon Community Hub, Dankworth Way, Glebe Farm, Wavendon, Milton Keynes MK17 8ZN",
    description: "Join our weekly congregational Friday prayer. We hold a short sermon followed by prayer to foster community spiritual growth and connection.",
    imageUrl: "/assets/hero-section-image-6.avif",
    startTime: "1:00 pm",
    endTime: "2:00 pm",
    isUpcoming: true,
  },
];

export const PREVIOUS_EVENTS = [
  {
    id: '1',
    title: 'Glebe Farm, Eagles Farm & Morton Park Community Get Together',
    date: '3rd Feb 2024',
    day: '03',
    month: 'FEB',
    location: 'Wavendon Community Hub, Dankworth Way, Glebe Farm, Wavendon, Milton Keynes MK17 8ZN',
    description: 'This was our first get together for the Muslim Community organised by 5 core members of the community. There were lots of activities for the kids with some amazing prizes.',
    imageUrl: '/gallery/gallery-img-4.webp'
  },
  {
    id: '2',
    title: 'Eid-ul-Fitr Community Event',
    date: '20th April 2024',
    day: '20',
    month: 'APR',
    location: 'Wavendon Community Hub, Dankworth Way, Glebe Farm, Wavendon, Milton Keynes MK17 8ZN',
    description: 'This was our first community Eid event for 2024. More families joined in and with the community bringing lots of delicious food to share. There were plenty of party games for the kids to enjoy.',
    imageUrl: '/gallery/gallery-img-eid.jpg'
  },
  {
    id: '3',
    title: 'Eid-ul-Adha Community Event',
    date: '23rd June 2024',
    day: '23',
    month: 'JUN',
    location: 'Wavendon Community Centre, Walton Road, Wavendon, Milton Keynes MK17 8LH',
    description: 'After a successful Eid-ul-Fitr event, the community once again came together to celebrate together the Eid-ul-Adha Event. There was a bouncy castle and lots of outdoor activities planed for the children.',
    imageUrl: '/assets/hero-section-image-7.avif'
  },
  {
    id: '4',
    title: 'Iftar & Tarawee Community Event',
    date: '15th March 2025',
    day: '15',
    month: 'MAR',
    location: 'Wavendon Community Hub, Dankworth Way, Glebe Farm, Wavendon, Milton Keynes MK17 8ZN',
    description: 'For the first time, the charity was able to organise a Iftar and Tarawee event. All families brought on a dish to share and kids were treated to several Islamic inspired activities. Tarawee was also held to give blessing for the month of Ramadhan.',
    imageUrl: '/gallery/gallery-img-10.webp'
  },
  {
    id: '5',
    title: 'Eid-ul-Adha Community Event',
    date: '22nd June 2025',
    day: '22',
    month: 'JUN',
    location: 'Wavendon Community Centre, Walton Road, Wavendon, Milton Keynes MK17 8LH',
    description: 'Families once again, gathered to celebrate Eid-ul-Adha. Families brought in a dish to share. There were several activities such as face painting, colouring, 5 a side football and many more.',
    imageUrl: '/assets/hero-section-image-7.avif'
  },
  {
    id: '6',
    title: 'Sports & Picnic Day',
    date: '27th July 2025',
    day: '27',
    month: 'JUL',
    location: 'Wavendon Recreation Ground MK 17 8LH',
    description: 'The charity organised a sports and picnic day to encourage children of young ages to showcase their athletic talent on the pitch. It was a lovely day out with several kids winning multiple medals!',
    imageUrl: '/gallery/gallery-img-11.webp'
  }
];
