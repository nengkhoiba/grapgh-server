import mongoose from "mongoose";
import schemaKeys from "./schemaKeys.json";

export const Cat = mongoose.model("Cat", { name: "String", gender: "String" });
