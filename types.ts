export type Section = 'reason' | 'product' | 'ai' | 'appeal' | 'playtest';

export interface TabProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export type CardType = 'motion' | 'phenomenon' | 'time' | 'space' | 'consciousness' | 'relation';

export interface CardData {
  type: CardType;
  title: string;
  content: string;
  icon: string;
}

export interface GameCardProps {
  card: CardData;
}

export interface TileData {
    type: string;
    icon?: string;
}