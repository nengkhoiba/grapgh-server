import mongoose from "mongoose";
import schemaKeys from "./schemaKeys.json";

const entity = schemaKeys.filter((itm) => itm.entity === "user");
const schema = entity[0].schema.map((row, idx) => {
  return `${idx > 0 ? "," : ""}${row.key}:${row.type.name}`;
});

//export const user = mongoose.model("user", { schema });
export const user = mongoose.model("user", {
  name: "String",
  address: "String",
  mobile: "String",
  id: "String",
});
