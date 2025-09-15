// Global Types
export interface SEO {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form Validation Types
export interface ValidationError {
  field: string;
  message: string;
}

// Theme Types
export type Theme = 'light' | 'dark' | 'system';

// Breakpoint Types
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

