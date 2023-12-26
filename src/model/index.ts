import { buildModel } from "jinaga";
import { chatModel } from "./chat";

export const model = buildModel(b => b
  .with(chatModel)
);