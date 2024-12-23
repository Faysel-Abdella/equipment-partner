export type ReviewType = {
  reviewer: string;
  date: string;
  rating: number; // Range: 0-5
  content: string;
  images: string[];
  recommendation: number;
  isLiked: boolean;
};

export type ReviewItemProps = {
  review: ReviewType;
};
