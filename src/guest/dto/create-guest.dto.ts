export class CreateGuestDto {
  name: string;
  relationship: string;
  willAttend: boolean;
  numberOfPeople?: number;
  location?: string;
}
