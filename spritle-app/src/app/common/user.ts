export class User {
  constructor(
      private readonly givenName: string,
      private readonly familyName: string,
  ) {}

  get fullName() {
    return `${this.givenName} ${this.familyName}`;
  }

  avatarUrl(size: number = 40): string {
    return `https://api.adorable.io/avatars/${size}/${this.givenName}.${this.familyName}`;
  }

  equals(other: User): boolean {
    return this.givenName === other.givenName &&
        this.familyName === other.familyName;
  }
}

export class Users {
  static readonly CHANDRAN = new User('Chandran', 'Ayyampettai');
  static readonly INDRAN = new User('Indran', 'Ayyampettai');
  static readonly LAKSHMIPRIYA = new User('LakshmiPriya', 'S');
  static readonly MANIK = new User('Manik', 'Baashha');
  static readonly PRABAKARAN = new User('Prabakaran', 'M');
  static readonly SAKTHIVEL = new User('Sakthivel', 'Naicker');
  static readonly STEVE = new User('Steve', 'Robinson');
  static readonly SHARATH = new User('Sharath', 'Pandian');
  static readonly MARTY = new User('Marty', 'McFly');
  static readonly PLACEHOLDER = new User('John', 'Doe');
  static readonly SATHISH= new User('Sathish','Kumar');
  static readonly SAMUEL= new User('Samuel','Kumar');
}
