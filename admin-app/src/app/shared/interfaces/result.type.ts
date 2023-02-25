export interface ApiResponse<T> {
    success: boolean;
    status: number;
    title: string;
    message: string;
    took: number;
    time: Date;
    data: T;
    errors: ValidationError[];
  }
  
  export interface ValidationError {
    // properties of the validation error object
  }