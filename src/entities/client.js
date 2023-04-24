import Profile from "./profile.js"

export default class Client {
  constructor ({
    id, email, username, profile, apiKey, roles
  }) {
    this.id = id
    this.email = email
    this.username = username
    this.profile = new Profile(profile)
    this.apiKey = apiKey
    this.roles = roles
  }

  getAge() {
    return new Date().getFullYear() - parseInt(/(?<year>\d{4})/gm.exec(this.profile.dob).groups.year)
  }
}