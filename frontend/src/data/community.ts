export interface UpcomingEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  type: 'match' | 'tournament' | 'special';
  reward: string;
  image?: string;
}

export interface POAPBadge {
  id: string;
  name: string;
  description: string;
  image: string;
  dateEarned: Date;
  eventName: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  multiplier: number;
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: '1',
    title: 'Champions League Final',
    description: "The ultimate showdown between Europe's best teams",
    date: 'Saturday June 15',
    time: '21:00',
    type: 'match',
    reward: 'Exclusive CL Final POAP + 2x Multiplier',
  },
  {
    id: '2',
    title: 'Manchester Derby',
    description: 'Historic rivalry between Man City and Man United',
    date: 'Sunday June 16',
    time: '17:00',
    type: 'match',
    reward: 'Derby Day POAP + 1.5x Multiplier',
  },
  {
    id: '3',
    title: 'World Cup Qualifiers',
    description: 'Special tournament for World Cup qualification matches',
    date: 'Monday June 17',
    time: '20:00',
    type: 'tournament',
    reward: 'Qualifier POAP + Bonus Tokens',
  },
  {
    id: '4',
    title: 'Premier League Season Finale',
    description: 'End of season celebration with exclusive rewards',
    date: 'Wednesday June 19',
    time: '19:00',
    type: 'special',
    reward: 'Season Finale POAP + 3x Multiplier',
  },
  {
    id: '5',
    title: 'CS:GO Major Championship',
    description: 'Elite esports tournament featuring top CS:GO teams',
    date: 'Friday June 21',
    time: '16:00',
    type: 'tournament',
    reward: 'Major Champion POAP + 2.5x Multiplier',
  },
  {
    id: '6',
    title: 'Valorant Champions Tour',
    description: 'International Valorant competition with massive prize pool',
    date: 'Saturday June 22',
    time: '18:00',
    type: 'tournament',
    reward: 'VCT POAP + Exclusive Skin',
  },
];

export const userPOAPBadges: POAPBadge[] = [
  {
    id: '1',
    name: 'First Bet',
    description: 'Made your first bet on the platform',
    image: '🎯',
    dateEarned: new Date('2024-01-15'),
    eventName: 'Premier League Week 1',
    rarity: 'common',
    multiplier: 1.1,
  },
  {
    id: '2',
    name: 'Champions League Attendee',
    description: 'Participated in Champions League Final betting',
    image: '🏆',
    dateEarned: new Date('2024-06-01'),
    eventName: 'Champions League Final 2024',
    rarity: 'epic',
    multiplier: 1.5,
  },
  {
    id: '3',
    name: 'El Clasico Veteran',
    description: 'Bet on 5 El Clasico matches',
    image: '⚽',
    dateEarned: new Date('2024-03-22'),
    eventName: 'El Clasico Series',
    rarity: 'rare',
    multiplier: 1.3,
  },
  {
    id: '4',
    name: 'Diamond Hands',
    description: 'Won 10 consecutive bets',
    image: '💎',
    dateEarned: new Date('2024-05-10'),
    eventName: 'Winning Streak Achievement',
    rarity: 'legendary',
    multiplier: 2.0,
  },
];

export const getRarityColor = (rarity: POAPBadge['rarity']) => {
  switch (rarity) {
    case 'common':
      return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
    case 'rare':
      return 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300';
    case 'epic':
      return 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300';
    case 'legendary':
      return 'bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 text-yellow-700 dark:text-yellow-300';
    default:
      return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
  }
};

export const calculateTotalMultiplier = (badges: POAPBadge[]) => {
  return badges.reduce((total, badge) => total + badge.multiplier, 0);
};
