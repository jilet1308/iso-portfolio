export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  currentlyReading?: boolean;
  plannedToRead?: boolean;
  review?: string[];
}
