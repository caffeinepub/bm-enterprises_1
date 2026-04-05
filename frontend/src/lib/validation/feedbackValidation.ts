interface FeedbackFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  rating: number;
  suggestions: string;
}

interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateFeedback(data: FeedbackFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name.trim()) {
    errors.name = 'Full name is required';
  }

  if (!data.email.trim() && !data.phone.trim()) {
    errors.contact = 'Please provide either an email address or phone number';
  }

  if (data.email.trim() && !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.message.trim()) {
    errors.message = 'Feedback message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Feedback message must be at least 10 characters long';
  }

  if (!data.rating || data.rating < 1 || data.rating > 5) {
    errors.rating = 'Please select a rating between 1 and 5';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
