export class CreateGuestDto {
  name: string;
  willAttend: boolean;
  numberOfPeople?: number;
  location?: string;
}
