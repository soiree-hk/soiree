export const navItems = [
  {
    label: 'Home',
    path: '/',
    children: [
      { label: 'About Us', path: '/about-us' },
      { label: 'Mission', path: '/mission' },
    ],
  },
  { label: 'News', path: '/news' },
  {
    label: 'Events',
    path: '/events',
    children: [
      { label: 'Dialogues/Lectures', path: '/events-dialogs-lectures' },
      { label: 'Workshops', path: '/workshops' },
    ],
  },
  {
    label: 'Centers',
    path: '/centers',
    children: [
      { label: 'AiForce', path: '/centers/aiforce' },
      { label: 'Art', path: '/art-center' },
    ],
  },
  { label: 'Membership', path: '/membership' },
  { label: 'Contact', path: '/contact' },
];
