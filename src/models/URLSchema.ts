import mongoose, { Document } from 'mongoose'

const Schema = mongoose.Schema

export const URLSchema = new Schema<URLInterface>({
  originalURL: { type: String, required: true },
  shortURL: { type: Number, required: true },
})

export interface URLInterface extends Document {
  originalURL: string
  shortURL: number
}
