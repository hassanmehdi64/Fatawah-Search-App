import aiResponses from "../mock-data/aiResponses.json";
import { matchQuery } from "../utils/matchQuery";

export async function fetchAIResponse(userQuery) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return aiResponses.responses.find((item) =>
    matchQuery(userQuery, item.query)
  );
}
