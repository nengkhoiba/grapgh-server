import mongoose from "mongoose";
import schemaKeys from "./schemaKeys.json";

export const user = mongoose.model("user", { schema });

const schema = schemaKeys
  .filter((itm) => itm.entity == "user")
  .schema.map((row, idx) => {
    return `${idx > 0 ? "," : ""}${row.key}:${row.type.name}`;
  });
