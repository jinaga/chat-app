import { JinagaBrowser } from "jinaga";

export const j = JinagaBrowser.create({
  httpEndpoint: import.meta.env.VITE_APP_JINAGA_REPLICATOR_URL,
});
