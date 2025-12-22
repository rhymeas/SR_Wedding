export interface EventItem {
  id: string;
  time: string;
  title: string;
  location: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum RsvpStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  DECLINED = 'DECLINED'
}

export interface RsvpFormData {
  name: string;
  email: string;
  attending: string;
  dietary: string;
  guests: number;
}
