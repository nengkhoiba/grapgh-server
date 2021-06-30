import { gql } from "apollo-server-express";
import schemaKeys from "./schemaKeys.json";
export const typeDefs = gql`
  type Query {
    ${schemaKeys.map((row, idx) => {
      return row.entity + ":" + row.entity;
    })}
  }
  ${schemaKeys.map((row, idx) => {
    return `type ${row.entity} {
        ${row.schema.map((sch) => {
          return `${sch.key}:${sch.type.name}${sch.type.required ? "!" : ""}`;
        })}

    }`;
  })}
  type Mutation {
    ${schemaKeys.map((row, idx) => {
      return `create_${row.entity}(
            ${row.schema.map((sch, indx) => {
              return `${indx > 0 ? "," : ""}${sch.key}:${sch.type.name}${
                sch.type.required ? "!" : ""
              }`;
            })}
        ): ${row.entity}!`;
    })}
  }
`;
