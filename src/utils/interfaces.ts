export interface IFeedback {
  name: string;
  email: string;
  rating: number;
  message: string;
}

export interface IFeedbackList {
  feedbackList: IFeedback[];
}

export interface IFeedbackFormProps {
  addFeedback: (arg: IFeedback) => void;
}

export interface IComment {
  name: string;
  rating: number;
  message: string;
}

export interface IComments {
  comments: IComment[];
}

export interface IStarRating {
  ratingValue: number;
  setRating: (arg: React.SyntheticEvent) => void;
}
