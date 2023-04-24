export default class Profile {
  constructor ({ name, company, dob, address, location, about }) {
    this.name = name
    this.company = company
    this.dob = dob
    this.address = address
    this.location = location
    this.about = about
  }

  getAge() {
    return new Date().getFullYear() - parseInt(/(?<year>\d{4})/gm.exec(this.dob).groups.year)
  }
}