import type { User } from "../types/user.type"

export class UserModel {
  id: number
  name: string
  role: string

  constructor(user: User) {
    this.id = user.id
    this.name = user.name
    this.role = user.role
  }
}