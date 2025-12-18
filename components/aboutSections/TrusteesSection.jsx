import React from 'react';

/* ---------------- Icons ---------------- */

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="h-5 w-5"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
    2.239 5 5 5h14c2.761 0 5-2.239 
    5-5v-14c0-2.761-2.239-5-5-5zm-11 
    19h-3v-10h3v10zm-1.5-11.268c-.966 
    0-1.75-.79-1.75-1.764s.784-1.764 
    1.75-1.764 1.75.79 
    1.75 1.764-.784 
    1.764-1.75 1.764zm13.5 
    11.268h-3v-5.604c0-1.337-.027-3.057-1.863-3.057-1.863 
    0-2.149 1.454-2.149 
    2.957v5.704h-3v-10h2.881v1.367h.041c.401-.761 
    1.379-1.563 2.838-1.563 
    3.035 0 3.598 
    2.001 3.598 4.604v5.592z" />
  </svg>
);

/* ---------------- Data ---------------- */

const trustees = [
  {
    id: '1',
    name: 'Nabeel',
    role: 'Trustee & Founding Member',
    bio: 'A town planning consultant with over a decade of local government experience. He provides strategic direction and strengthens community engagement to support long-term impact.',
    imageUrl: '/assets/Nabeel-Kasmani.jpg',
    linkedinUrl: '#',
  },
  {
    id: '2',
    name: 'Irshad',
    role: 'Trustee',
    bio: 'A seasoned IT professional with over 14 years in the telecom sector. He leads community events, supports fundraising initiatives, and promotes community well-being.',
    imageUrl: '/assets/Irshad-Tagala.jpg',
    linkedinUrl: '#',
  },
  {
    id: '3',
    name: 'Rizwan',
    role: 'Trustee',
    bio: 'A senior technology consultant specialising in IoT, cloud, and digital transformation. He provides strategic guidance on innovation and technology initiatives.',
    imageUrl: '/assets/Syed-Rizwan.jpg',
    linkedinUrl: '#',
  },
  
  {
    id: '5',
    name: 'Adeel',
    role: 'Trustee & Founding Member',
    bio: 'With over 12 years in financial services, Adeel oversees financial governance, budgeting, and planning while supporting community events and sustainability.',
    imageUrl: '/assets/Adeel-Hussain.jpg',
    linkedinUrl: '#',
  },
  {
    id: '6',
    name: 'Ebrahim',
    role: 'Trustee',
    bio: 'An experienced technology professional with a diverse background across charity, government, corporate finance, and PropTech. As a trustee of the Eden Weave Foundation, he provides strategic oversight on technology and educational initiatives, including the Garden of Knowledge madrassah.',
    imageUrl: '/assets/Ebrahim.jpeg',
    linkedinUrl: '#',
  },
];

/* ---------------- Card ---------------- */

const TrusteeCard = ({ trustee }) => (
  <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="aspect-[4/5] w-full overflow-hidden bg-gray-200">
      <img
        src={trustee.imageUrl}
        alt={trustee.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="flex flex-1 flex-col p-6">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
          {trustee.name}
        </h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-600">
          {trustee.role}
        </p>

        <div className="my-4 h-px w-12 bg-gray-200 group-hover:bg-brand-200 transition-colors" />

        <p className="text-base leading-relaxed text-gray-600">
          {trustee.bio}
        </p>
      </div>

      {/* {trustee.linkedinUrl && (
        <div className="mt-6">
          <a
            href={trustee.linkedinUrl}
            className="text-gray-400 hover:text-[#0077b5] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      )} */}
    </div>
  </div>
);

/* ---------------- Section ---------------- */

const TrusteesSection = () => {
  return (
    <section className="bg-white py-24" id="trustees">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Board of Trustees
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Dedicated individuals working together to serve the community and
            guide the charity’s mission.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {trustees.map((trustee) => (
            <TrusteeCard key={trustee.id} trustee={trustee} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrusteesSection;
