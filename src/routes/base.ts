import { Request, Response } from "express";

export default function (req: Request, res: Response) {
  console.log("GET :8080/ called ...");
  res.json({ message: "Hello World!..." }); // write a response to the client
  res.end(); // end the response
}
