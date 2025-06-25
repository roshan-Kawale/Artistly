export interface startCardProps {
  header: string;
  length: number;
  desc: string;
}

export interface TabNavigationProps {
  options: { id: string; label: string }[];
}

export interface activeTabProps {
  tab: string;
}
