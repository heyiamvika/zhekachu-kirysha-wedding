export type Guest = {
  slug: string;
  name: string;
};

export type Step = number;

export type StepPageProps = {
  onNext?: () => void;
  onPrev?: () => void;
};
