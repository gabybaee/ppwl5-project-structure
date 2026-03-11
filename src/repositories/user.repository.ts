import { db } from "../config/db"
import type { User } from "../types/user.type"

export const userRepository = {

  findAll(): User[] {
    return db.query(
      "SELECT id, name, role FROM users"
    ).all() as User[]
  },

  create(name: string, role: string) {
    db.query(
      "INSERT INTO users (name, role) VALUES (?, ?)"
    ).run(name, role)
  },

  delete(id: number) {
    db.query(
      "DELETE FROM users WHERE id = ?"
    ).run(id)
  }

}