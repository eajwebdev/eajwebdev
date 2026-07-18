export type HeaderProps = {
  onGetStarted?: () => void;
};

export type InquiryForm = {
  name: string;
  email: string;
  service: string;
  budget: string;
  customBudget: string;
  details: string;
};

export type SelectOption = {
  value: string;
  label: string;
};

export type InquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

