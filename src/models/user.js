import mongoose from "mongoose";
import schemaKeys from "./schemaKeys.json";

const entity = schemaKeys.filter((itm) => itm.entity === "user");

let finalSchema = {}

const schema = entity.length > 0 && entity[0].schema.forEach((row, idx) => {
  let { type: { name } = {}, defaultValue, key } = row || {}
  console.log('xxx name, defaultValue, key',name, defaultValue, key)
  let property = {}
  property["type"] = name;
  if (defaultValue) { property["default"] = row.defaultValue; }
  finalSchema[key] = property;
});

console.log('xxx schema :',finalSchema)

export const user = mongoose.model("user",  finalSchema ); 
// export const user = mongoose.model("user", {
//   name: "String",
//   address: "String",
//   mobile: "String",
//   id: "String",
// });
