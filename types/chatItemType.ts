export type ChatItemProps = {
  profileImage: string;
  name: string;
  status?: string; // Restrict status to 'completed' or 'pending'
  message: string;
  time: string;
  isMuted?: boolean;
  notificationCount?: number;
  onClick: () => void;
};
