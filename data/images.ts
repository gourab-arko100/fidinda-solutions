/**
 * Every photo on the website lives here.
 *
 * Current photos are free to use under the Unsplash License (https://unsplash.com/license)
 * and are served from Unsplash's image CDN (resized + WebP/AVIF automatically).
 *
 * To use your own photo: put it in /public/images/ and change `src`, e.g.
 *   src: "/images/our-team.jpg"
 * Local files are served as-is (size them ~2000px wide, JPG/WebP).
 */
export interface Photo {
  src: string;
  alt: string;
  /** Unsplash photo page (for reference / credit). */
  page?: string;
}

const u = (id: string) => `https://images.unsplash.com/${id}`;

export const photos = {
  /* Cambodia */
  phnomPenhNight: {
    src: u("photo-1711271286349-da5c6effdddb"),
    alt: "Aerial view of Phnom Penh at night",
    page: "https://unsplash.com/photos/an-aerial-view-of-a-city-at-night-fhwvdbJvetU",
  },
  phnomPenhRiverside: {
    src: u("photo-1589640802044-1cac11427567"),
    alt: "Phnom Penh riverside skyline at night",
    page: "https://unsplash.com/photos/city-skyline-during-night-time-z0_qJKVqIfE",
  },
  phnomPenhDay: {
    src: u("photo-1645948715176-2641d507050f"),
    alt: "Aerial view of Phnom Penh city with tall buildings",
    page: "https://unsplash.com/photos/an-aerial-view-of-a-city-with-tall-buildings-Ftlwq_oVGvs",
  },
  angkorWat: {
    src: u("photo-1779419183221-df0bb6fdad1d"),
    alt: "Angkor Wat reflected in water at sunrise",
    page: "https://unsplash.com/photos/angkor-wat-temple-reflected-in-water-at-sunrise-jD2Ft6hqj6s",
  },

  /* Divisions */
  financial: {
    src: u("photo-1454165804606-c3d57bc86b40"),
    alt: "Accountant reviewing financial reports beside a laptop",
    page: "https://unsplash.com/photos/person-holding-pencil-near-laptop-computer-5fNmWej4tAA",
  },
  management: {
    src: "/images/divisions/management.jpg",
    alt: "Consulting team in a strategy meeting around a conference table",
  },
  health: {
    src: u("photo-1758691461957-474a7686e388"),
    alt: "Doctor consulting with a patient in a modern hospital office",
    page: "https://unsplash.com/photos/doctor-consults-with-patient-in-modern-office-7-l5EL7YHI4",
  },
  travel: {
    src: u("photo-1759784839707-a32c910a7747"),
    alt: "Airplane wing seen through a window above the clouds",
    page: "https://unsplash.com/photos/airplane-wing-seen-through-window-above-clouds-gYe2GTSKlk0",
  },

  /* People & company */
  meeting: {
    src: u("photo-1517048676732-d65bc937f952"),
    alt: "Professionals in a meeting around a table",
    page: "https://unsplash.com/photos/people-sitting-on-chair-in-front-of-table-while-holding-pens-during-daytime-KdeqA3aTnBY",
  },
  presentation: {
    src: u("photo-1542744173-8e7e53415bb0"),
    alt: "Consultant presenting to a business team",
    page: "https://unsplash.com/photos/man-standing-in-front-of-people-sitting-beside-table-with-laptop-computers-gMsnXqILjp4",
  },
  handshake: {
    src: u("photo-1521791136064-7986c2920216"),
    alt: "Two people shaking hands",
    page: "https://unsplash.com/photos/two-people-shaking-hands-n95VMLxqM2I",
  },
  teamUnity: {
    src: u("photo-1600880292089-90a7e086ee0c"),
    alt: "Team members joining hands in unity",
    page: "https://unsplash.com/photos/team-members-gripping-wrists-in-unity-gesture-Y5bvRlcCx8k",
  },
  community: {
    src: u("photo-1652971876875-05db98fab376"),
    alt: "Community group gathered beside a river",
    page: "https://unsplash.com/photos/a-group-of-people-standing-next-to-a-river-CxL29J-aM5E",
  },
  passports: {
    src: u("photo-1553697388-94e804e2f0f6"),
    alt: "Traveller holding passports",
    page: "https://unsplash.com/photos/person-holding-passports-0QcSnCM0aMc",
  },
  family: {
    src: u("photo-1475503572774-15a45e5d60b9"),
    alt: "Family holding hands on a beach",
    page: "https://unsplash.com/photos/man-woman-and-child-holding-hands-on-seashore-SIOdjcYotms",
  },
  signing: {
    src: u("photo-1764231467852-b609a742e082"),
    alt: "Hands signing a document on a desk",
    page: "https://unsplash.com/photos/hands-signing-a-document-on-a-desk-WTgGFO_gGW8",
  },

  /* Vision & Mission */
  compass: {
    src: u("photo-1504607798333-52a30db54a5d"),
    alt: "Compass held in hand, pointing the way forward",
    page: "https://unsplash.com/photos/shallow-focus-photograph-of-black-and-gray-compass-uCMKx2H1Y38",
  },
  vision: {
    src: "/images/about/vision.jpg",
    alt: "Businesswoman looking ahead through binoculars towards a staircase and open door",
  },
  mission: {
    src: u("photo-1586936893354-362ad6ae47ba"),
    alt: "Team collaborating on a plan with sticky notes",
    page: "https://unsplash.com/photos/team-collaborating-with-sticky-notes-w00FkE6e8zE",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
