const IMG = '/images/fob/general-info';

export const fob2026VisaTravel = {
  sections: [
    {
      heading: 'Immigration and Travel',
      paragraphs: [
        "Hong Kong is a key aviation hub with connections to major cities throughout the world. Nationals of most countries do not require a visa to enter Hong Kong for tourism and can stay for periods varying from seven to 180 days, depending on nationality. If you're unsure of your status, please check with any Chinese embassy or consulate.",
      ],
    },
    {
      heading: 'Visa',
      paragraphs: [
        'Before travel to Hong Kong, please check whether you need a visa or entry permit to enter Hong Kong for a visit or transit. Please check the below links for information.',
      ],
      links: [
        { label: 'General Visa Requirements', url: 'https://www.gov.hk/en/nonresidents/visarequire/general/' },
        {
          label:
            'Visit Visa / Entry Permit Requirements for the Hong Kong Special Administrative Region',
          url: 'https://www.immd.gov.hk/eng/services/visas/visit-transit/visit-visa-entry-permit.html',
        },
      ],
    },
    {
      heading: 'Travel in Hong Kong',
      paragraphs: [
        "If you're trying to get an overview of Hong Kong, you may visit the below e-guidebooks link to provide an insight into everything from award-winning Chinese dishes and other culinary treasures to some of the best hiking trails around town for your information.",
      ],
      links: [
        { label: 'E-guidebooks', url: 'https://www.discoverhongkong.com/eng/plan/traveller-info/e-guidebooks.html' },
        { label: 'Attraction offers for you', url: 'https://www.discoverhongkong.com/eng/explore/attractions.html' },
      ],
    },
    {
      heading: 'Weather',
      paragraphs: [
        "Hong Kong's weather is pleasant most of the time and doesn't experience extremes, as its sub-tropical. However, it does get quite humid and hot during summer, so pack accordingly for those conditions.",
      ],
      bullets: [
        'Summer in Hong Kong (June to August): Hot, humid, and sunny, with occasional rain showers and thunderstorms. The temperature often ranges from 26°C to 33°C in urban areas.',
        'What to pack? Pack lightweight, breathable clothing such as cotton shirts, shorts, and dresses. A hat, sunglasses, and sunscreen are essential. Bring an umbrella or a light raincoat in case of sudden rain showers. Check ahead for dress codes if you plan to visit up-market restaurants and bars.',
      ],
    },
    {
      heading: 'Things to Know',
      bullets: [
        'Electricity & Voltage: The standard electrical voltage in Hong Kong is 220 volts AC, 50Hz. The majority of electrical outlets in Hong Kong take a three-pronged UK-style plug.',
        'Currency & e-payment: The legal tender in Hong Kong is the Hong Kong dollar (HKD), which is pegged to the US dollar at a rate of about 7.84 HKD to 1 USD, although exchange rates may fluctuate slightly.',
      ],
    },
    {
      heading: 'Octopus Card',
      paragraphs: [
        'The Octopus Card is an essential part of traveling around Hong Kong. It offers a convenient way to pay for public transport, as well as various retail outlets, restaurants, and attractions.',
        'You can easily obtain an Octopus Card before or after arriving in Hong Kong:',
      ],
      bullets: [
        'For iPhone/Apple Watch users: Download the Octopus App for Tourists to add a new Octopus Card.',
        'For Huawei users: Sign in with a Chinese Mainland or Macao region, and download the Octopus App from AppGallery.',
        'Physical Octopus Cards: Available at Airport, transit stations, and convenience stores.',
      ],
      links: [{ label: 'Octopus Hong Kong website', url: 'https://www.octopus.com.hk/en/consumer/tourist/channels/index.html' }],
    },
  ],
  attractions: Array.from({ length: 6 }, (_, i) => `${IMG}/attraction-0${i + 1}.png`),
};

export const fob2026Accommodation = {
  intro:
    'Welcome to Hong Kong, China. If you are attending the symposium, we would like to offer some advice on accommodations in Hong Kong.',
  onCampus: {
    image: `${IMG}/CL.png`,
    description:
      'Conference Lodge (CL) is the latest on-campus hospitality facility in HKUST, offering professional hotel-managed accommodations, high-end dining, and catering services to guests. Please note that the prices shown are for reference purposes and may change based on the market rates.',
    price: 'HKD 1180+',
    url: 'https://www.conferencelodge.hk/en/',
    declaration:
      'Declaration: It is important to know that the hotel rate and booking are entirely managed by the hotel themselves, and our organizing team is not involved in the process.',
  },
  offCampus: [
    'Crowne Plaza Hong Kong Kowloon East, Tseung Kwan O: HKD 1500+',
    'Holiday Inn Express Hong Kong Kowloon CBD2, Kwun Tong: HKD 700+',
    'EAST Hong Kong, Kwun Tong: HKD 700+',
    'Dorsett Kwun Tong, Kwun Tong: HKD 800+',
    'Hotel COZi · Harbour View, Kwun Tong: HKD 700+',
    'Nina Hotel Kowloon East, Kwun Tong: HKD 800+',
  ],
  moreUrl: 'https://www.discoverhongkong.com/uk/plan/accommodation.html',
};

export const fob2026Transportation = {
  campusImage: `${IMG}/img_hkust_campus.jpg`,
  locationMap: `${IMG}/hkust_location_map.jpg`,
  intro: 'HKUST is located at Clear Water Bay, on the Sai Kung Peninsula.',
  routes: [
    {
      heading: 'From Hong Kong International Airport',
      options: [
        'Red taxi (Airport → HKUST): ~45 minutes, ~HK$375',
        'Airport Express (Airport → Kowloon Station) + Red Taxi (Kowloon Station → HKUST): ~25 + 30 minutes, ~HK$105 + HK$160',
        'Bus A29 (Airport → Po Lam) + Taxi or Bus 91M (Po Lam → HKUST): ~100 + 15 minutes, ~HK$44 + HK$70 or HK$6.8',
      ],
    },
    {
      heading: 'From Hong Kong West Kowloon Station',
      options: [
        'Red taxi (West Kowloon Station → HKUST): ~35 minutes, ~HK$165',
        'MTR (West Kowloon → Hang Hau Station) + Taxi or Minibus 11M (Hang Hau → HKUST): ~40 + 15 minutes, ~HK$13.5 + HK$45 or HK$6',
      ],
    },
  ],
  publicTransport: [
    { label: 'Mass Transit Railway (MTR)', url: 'https://www.mtr.com.hk' },
    { label: 'The Kowloon Motor Bus (KMB)', url: 'https://www.kmb.hk' },
    { label: 'Citybus & New World First Bus (NWFB)', url: 'https://www.citybus.com.hk' },
  ],
  note: 'The MTR (subway) stations closest to HKUST are Choi Hung, Diamond Hill, Hang Hau and Po Lam. There are various bus and minibus services available for getting to campus.',
};
