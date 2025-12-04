import { Schema, model, Document, Types } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description?: string;
  category?: string;
  price: number;
  imagen: string[];
  createdBy?: string;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: String,
  category: String,
  price: { type: Number, required: true },
  imagen: [String],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }
}, { timestamps: true });

export default model<IProduct>("Product", productSchema)