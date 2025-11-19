export interface GuardianSpirit {
  emoji: string;
  title: string;
}

export interface RitualState {
  luckIndex: string;
  guardian: GuardianSpirit;
  currentProphecy: string | null;
  clickCount: number;
}