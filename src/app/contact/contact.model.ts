export class Contact {
  public id: number;
  public name: string;
  public type: string;
  public contacts: Contact[];


  constructor(id: number, name: string, type: string, contacts: Contact[]) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.contacts = contacts;
  }
}
