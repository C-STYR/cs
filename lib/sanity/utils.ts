import { client } from "./config";
import { getDocumentByIdQuery } from "./queries/generalQueries";

export const fetchData = async (queryString: string, options = {}) => {
  try {
    const result = await client.fetch(queryString, options);
    if (!result) throw new Error("No result returned from query!");
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const getDocumentById = async (id: string) => {
  try {
    const result = await client.fetch(getDocumentByIdQuery, { id });
    if (!result) throw new Error("No result returned from query!");
    return result;
  } catch (err) {
    console.error(err);
  }
};
