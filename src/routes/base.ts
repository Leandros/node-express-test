import { Request, Response } from "express";
import { IUser } from "../types/user.interface";

/**
 * Write CRUD Routes to access and modify
 * fakeDbCollection (an in-memory database of users)
 *
 * Routes should follow standards for:
 * - Create
 * - Read
 * - Update
 * - Delete
 */
const fakeDbCollection: Record<string, IUser> = {
  A123: {
    name: "John Doe",
    age: 21,
  },
};

export function get(req: Request, res: Response) {
  console.log("GET :8080/ called ...");
  res.json({ message: "Hello World!..." }); // write a response to the client
  res.end(); // end the response
}
