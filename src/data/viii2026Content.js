const IMG = '/images/viii';

export const viii2026Content = {
  keynoteSpeakers: [
    { name: 'Prof. Kunihiko Kaneko', affiliation: 'University of Copenhagen', img: `${IMG}/KK.png` },
    { name: 'Prof. Jin Wang', affiliation: 'Stony Brook University', img: `${IMG}/JW.png` },
  ],
  invitedSpeakers: [
    { name: 'Prof. Gang Chen', affiliation: 'CUHK SZ', img: `${IMG}/GC.png` },
    { name: 'Prof. Xiakun Chu', affiliation: 'HKUST GZ', img: `${IMG}/XKC.png` },
    { name: 'Dr. Ye Ding', affiliation: 'DP Tech.', img: `${IMG}/YD.png` },
    { name: 'Prof. Jun Fan', affiliation: 'CityU', img: `${IMG}/JF.png` },
    { name: 'Dr. Lin Huang', affiliation: 'ScitiX', img: `${IMG}/LH.png` },
    { name: 'Prof. Feiran Li', affiliation: 'Tsinghua', img: `${IMG}/FRL.png` },
    { name: 'Dr. Tan Li', affiliation: 'QuiKTech', img: `${IMG}/TL.png` },
    { name: 'Prof. Wenfei Li', affiliation: 'Nanjing U.', img: `${IMG}/WFL.png` },
    { name: 'Prof. Hanbin Ma', affiliation: 'UESTC', img: `${IMG}/HBM.png` },
    { name: 'Dr. Frank Pun', affiliation: 'Insilico Medicine', img: `${IMG}/FP.png` },
    { name: 'Dr. Ruyuan Song', affiliation: 'DPBIO', img: `${IMG}/RYS.png` },
    { name: 'Mr. Zhuwei Shi', affiliation: 'Scientz', img: `${IMG}/SZW.png` },
    { name: 'Dr. Lei Sun', affiliation: 'GeneMind', img: `${IMG}/LS.png` },
    { name: 'Prof. Qianyuan Tang', affiliation: 'HKBU', img: `${IMG}/QYT.png` },
    { name: 'Dr. Wen Wang', affiliation: 'BGI Research', img: `${IMG}/WW.png` },
    { name: 'Prof. Yanting Wang', affiliation: 'ITP, CAS', img: `${IMG}/YTW.png` },
    { name: 'Prof. Yi Wang', affiliation: 'CUHK', img: `${IMG}/YW.png` },
    { name: 'Mr. Qirong Yang', affiliation: 'BioMap', img: `${IMG}/QY.png` },
    { name: 'Prof. Xiangze Zeng', affiliation: 'HKBU', img: `${IMG}/XZZ.png` },
  ],
  programDate: 'Date: Jan 11, 2026',
  program: [
    {
      rows: [
        { time: '8:00 ~ 8:50', title: 'Registration' },
        {
          time: '8:50 ~ 9:00',
          title:
            'Opening speech by Prof. Che Ting CHAN, Interim Director of Jockey Club Institute for Advanced Study, HKUST',
        },
      ],
    },
    {
      heading: 'Session I: Keynote lectures',
      note: 'Session chairs: Qianyuan Tang, Xiakun Chu · Venue: LT-G',
      rows: [
        {
          time: '9:00 ~ 9:45',
          title:
            'Evolutionary Dimensional Reduction, Geno-Phenotype Fluctuation Relationship and Developmental Homeorhesis',
          speaker: 'Prof. Kunihiko Kaneko',
        },
        {
          time: '9:45 ~ 10:30',
          title:
            'Quantifying the Landscape and Flux as the Driving Forces for Cell Fate Decision Making',
          speaker: 'Prof. Jin Wang',
        },
        { time: '10:30 ~ 10:45', title: 'Tea break & Photo' },
      ],
    },
    {
      heading: 'Session II: AI-Bio',
      note: 'Session chairs: Yi Wang, Jun Fan · Venue: LT-G',
      rows: [
        {
          time: '10:45 ~ 11:10',
          title: 'Phase transitions in voting simulated by an intelligent Ising model',
          speaker: 'Prof. Yanting Wang',
        },
        {
          time: '11:10 ~ 11:35',
          title: 'Modeling protein dynamics by integrating biophysics and artificial intelligence',
          speaker: 'Prof. Wenfei Li',
        },
        {
          time: '11:35 ~ 12:00',
          title: 'AI in Drug Discovery and Aging Research',
          speaker: 'Dr. Frank Pun',
        },
        {
          time: '12:00 ~ 12:25',
          title: 'New Paradigm of Quantum Chemistry - From Molecular Model to Life on Silicon',
          speaker: 'Dr. Lin Huang',
        },
        { time: '12:25 ~ 13:30', title: 'Lunch' },
      ],
    },
    {
      heading: 'Session III-A: Omics',
      note: 'Session chair: Gang Chen · Venue: LT-G',
      rows: [
        {
          time: '13:30 ~ 13:55',
          title: 'Sequencing for Multi-Omics',
          speaker: 'Dr. Lei Sun',
        },
        {
          time: '13:55 ~ 14:20',
          title:
            'From VCC to Reality: Progress and Challenges in building a Truly Usable Virtual Cell',
          speaker: 'Mr. Qirong Yang',
        },
        { time: '14:20 ~ 14:45', title: 'AI-aided digital cell', speaker: 'Prof. Feiran Li' },
        { time: '14:45 ~ 15:15', title: 'Poster session & Tea break' },
      ],
    },
    {
      heading: 'Session III-B: Omics',
      note: 'Session chair: Yanting Wang · Venue: LT-G',
      rows: [
        {
          time: '15:15 ~ 15:40',
          title:
            'How chromatin fluctuations and transcriptional condensates orchestrate the enhancer-promoter communication in 3D genome',
          speaker: 'Prof. Xiakun Chu',
        },
        {
          time: '15:40 ~ 16:05',
          title:
            'Statistical Physics Meets AI Predictions: Evolutionary Trends and Universal Scaling Laws from AlphaFold Database',
          speaker: 'Prof. Qianyuan Tang',
        },
        {
          time: '16:05 ~ 16:30',
          title: 'Droplet Microfluidcs for Antibody discovery and Synthetic Biology',
          speaker: 'Dr. Ruyuan Song',
        },
        {
          time: '16:30 ~ 16:55',
          title: 'Thin-film transistor-based active-matrix digital microfluidics',
          speaker: 'Prof. Hanbin Ma',
        },
      ],
    },
    {
      heading: 'Session IV-A: Biophysics',
      note: 'Session chair: Xiangze Zeng · Venue: LT-F',
      rows: [
        {
          time: '13:30 ~ 13:55',
          title:
            'Exploring AAAD conformations and dynamics as well as the structure of VacA through MD simulations',
          speaker: 'Prof. Yi Wang',
        },
        {
          time: '13:55 ~ 14:20',
          title:
            'Uni-FEP: A high-accuracy and efficient free energy perturbation tool for drug discovery',
          speaker: 'Dr. Ye Ding',
        },
        {
          time: '14:20 ~ 14:45',
          title:
            'From Fundamental Interactions to Functional Devices: A Computational Journey with 2D Nanomaterials in Lipid Membrane and Biosensing',
          speaker: 'Prof. Jun Fan',
        },
        { time: '14:45 ~ 15:15', title: 'Poster session & Tea break' },
      ],
    },
    {
      heading: 'Session IV-B: Biophysics',
      note: 'Session chair: Wenfei Li · Venue: LT-F',
      rows: [
        {
          time: '15:15 ~ 15:40',
          title:
            'Developing a coarse-grained scheme for simulating thermoresponsive behavior of intrinsically disordered proteins',
          speaker: 'Prof. Xiangze Zeng',
        },
        {
          time: '15:40 ~ 16:05',
          title:
            'Targeting an Oncogenic RNA Junction: A Dual-Affinity PNA Platform for Inhibiting miRNA-21 Maturation and Rescuing Tumor Suppressor PTEN',
          speaker: 'Prof. Gang Chen',
        },
        {
          time: '16:05 ~ 16:30',
          title:
            'Introduction of Scientz solutions for life science research: New Technologies and Applications',
          speaker: 'Mr. Zhuwei Shi',
        },
        {
          time: '16:30 ~ 16:55',
          title: 'AI-Driven New Generation of Intelligent Molecular Synthesis Methods',
          speaker: 'Prof. Tan Li',
        },
      ],
    },
    {
      rows: [
        { time: '17:00 ~ 17:15', title: 'Poster awards and closing (LT-G)' },
        { time: '17:30 ~ 20:30', title: 'Dinner' },
      ],
    },
  ],
  committee: {
    members: [
      { name: 'Dr. Haibin Su', role: 'Prof.', org: 'HKUST', img: `${IMG}/sponsors/HBS.png` },
      { name: 'Dr. Xiakun Chu', role: 'Asst. Prof.', org: 'HKUST(GZ)', img: `${IMG}/XKC.png` },
      {
        name: 'Ms. Lingyun Gao',
        role: 'Executive Director',
        org: 'HKUST-SHCIRI',
        img: `${IMG}/sponsors/LYG.png`,
      },
      {
        name: 'Dr. Jason Chen',
        role: 'CEO',
        org: 'HKUST(GZ)-NHJITTC',
        img: `${IMG}/sponsors/JC.png`,
      },
      { name: 'Mr. Zhong Shen', role: 'CGD', org: 'HKUST-FYTRI', img: `${IMG}/sponsors/ZS.png` },
    ],
    orgLogos: [
      { src: `${IMG}/sponsors/CHEM.png`, alt: 'HKUST Department of Chemistry' },
      { src: `${IMG}/sponsors/HKUSTGZ.png`, alt: 'HKUST (Guangzhou)' },
      { src: `${IMG}/sponsors/CIRI.png`, alt: 'HKUST SHCIRI' },
      { src: `${IMG}/sponsors/HT.jpg`, alt: 'HKUST(GZ)-NHJITTC' },
      { src: `${IMG}/sponsors/FYT.png`, alt: 'HKUST-FYTRI' },
    ],
    notes: [
      'HKUST(GZ)-NHJITTC stands for HKUST (GZ)- Ningbo Harbour Joint Innovative Technology Transfer Center',
      'CGD stands for Consultant to the General Director',
    ],
    secretary: 'Mr. Shihong Chen',
    supportingTeam: [
      'Ms. Bovy Guo',
      'Mr. Changwen Li',
      'Mr. Hao Chen',
      'Mr. Wentao Xu',
      'Mr. Chi Ming Kan',
      'Ms. Kathleen Kam',
      'Ms. Shan Qi Yap',
      'Mr. Ka Pui Chang',
      'Ms. Tianyu Guo',
      'Mr. Xiaoguang Lu',
      'Mr. Chun Hey Siu',
      'Dr. Mengqi Jia',
      'Dr. Kaicheng Zhu',
    ],
    soireeLogo: `${IMG}/sponsors/SOIREE.png`,
  },
  sponsors: [
    { src: `${IMG}/sponsors/UGC.png`, alt: 'UGC' },
    { src: `${IMG}/sponsors/S.png`, alt: 'S' },
    { src: `${IMG}/sponsors/unicrom.png`, alt: 'Unicrom' },
    { src: `${IMG}/sponsors/IM.png`, alt: 'Insilico Medicine' },
    { src: `${IMG}/sponsors/DP_Tech.png`, alt: 'DP Technology' },
    { src: `${IMG}/sponsors/XZ.png`, alt: 'XZ' },
    { src: `${IMG}/sponsors/DPBio.png`, alt: 'DP Bio' },
    { src: `${IMG}/sponsors/SCITIX.png`, alt: 'ScitiX' },
    { src: `${IMG}/sponsors/HKUST_KT.png`, alt: 'HKUST Knowledge Transfer' },
    { src: `${IMG}/sponsors/Genemind.png`, alt: 'GeneMind' },
    { src: `${IMG}/sponsors/BTbio.png`, alt: 'BioMap' },
    { src: `${IMG}/sponsors/KJ.png`, alt: 'KJ' },
    { src: `${IMG}/sponsors/POTUS_LOGO_Red.png`, alt: 'POTUS' },
    { src: `${IMG}/sponsors/ACSIC.png`, alt: 'ACSIC' },
    { src: `${IMG}/sponsors/GenePie.png`, alt: 'GenePie' },
  ],
  posterAwardSponsor: { src: `${IMG}/sponsors/SCIR.png`, alt: 'Scientific Reports' },
  registration: {
    intro:
      'We are pleased to invite participants to register for the 8th Symposium on Biophysics Postgraduate Research in Hong Kong, to be held on January 11, 2026 at HKUST.',
    fee: 'This symposium is a non-profit event designed to benefit the research community in biophysics and related fields. No registration fee is required for participation.',
    deadline:
      'Registration is required for all attendees. The registration deadline is December 31, 2025.',
    formUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSclTKq277Oh7srDzR9Ocq2c4_sLIBLaJ-6IBVflDsPAkcxZHA/viewform?usp=header',
    contactEmail: 'shihong.chen@connect.ust.hk',
  },
  photos: {
    intro:
      'Thank you for participating in the 8th Symposium on Biophysics Postgraduate Research in Hong Kong. Here are the photo highlights from the event:',
    list: Array.from({ length: 27 }, (_, i) => `${IMG}/photos/photo-${i + 1}.jpg`),
    posters: ['p1', 'p2', 'p3', 'p4', 'ps1', 'ps2'].map((name) => `${IMG}/posters/${name}.jpg`),
  },
  venueMap: `${IMG}/venue_map.png`,
  venueMapLink: 'https://publish.ust.hk/univ/maps/Lecture_Theaters.pdf',
};
