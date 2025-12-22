import { EventItem } from './types';

export const WEDDING_DATE = "July 04, 2025";
export const COUPLE_NAMES = "Susanne & Rimas";
export const LOCATION = "Villa Cetinale, Tuscany, Italy";

export const ITINERARY: EventItem[] = [
  {
    id: '1',
    time: "July 03 - 6:00 PM",
    title: "Welcome Apertivo",
    location: "Lemon Garden",
    description: "Join us for cocktails and light bites to kick off the celebration under the Tuscan sun."
  },
  {
    id: '2',
    time: "July 04 - 4:00 PM",
    title: "The Ceremony",
    location: "The Cypress Avenue",
    description: "We say 'I do'. Please arrive by 3:30 PM."
  },
  {
    id: '3',
    time: "July 04 - 6:00 PM",
    title: "Dinner & Dancing",
    location: "Main Villa Courtyard",
    description: "A feast of Italian classics followed by dancing until dawn."
  },
  {
    id: '4',
    time: "July 05 - 11:00 AM",
    title: "Recovery Brunch",
    location: "Poolside",
    description: "Casual brunch and pool time before we say goodbye."
  }
];

export const SYSTEM_INSTRUCTION = `
You are the digital Wedding Concierge for Susanne and Rimas's wedding in Tuscany.
The wedding is on July 4th, 2025 at Villa Cetinale.
The vibe is "Modern Italian Elegance".
Colors: Creme, Dark Green, Citron.

Key Info:
- Dress Code: Black Tie Optional for the wedding. Smart Casual for Welcome Apertivo. Pool Chic for Brunch.
- Gift Registry: We prefer a donation to our Honeyfund or the World Wildlife Fund.
- Travel: Nearest airports are Florence (FLR) and Pisa (PSA).
- Weather: Expect hot sunny days (30°C) and warm evenings.
- Accommodation: Shuttles will run from Hotel Borgo to the Villa.

Tone: Sophisticated, helpful, slightly witty, and very welcoming. Keep answers concise.
If asked about things not related to the wedding or Tuscany travel, politely steer back to the wedding.
`;
