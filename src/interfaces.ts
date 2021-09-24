export interface IComment {
  name: string;
  email: string;
  rating: number;
  comment: string;
}

export interface IComments {
  comments: IComment[];
}

export interface IFeedbackFormProps {
  addComment: (arg: IComment) => void;
}

export interface IStarRating {
  ratingValue: number;
  setRating: (arg: React.SyntheticEvent) => void;
}
