import { ModelBuilder } from "jinaga";

export class Topic {
  static Type = "Chat.Topic" as const;
  type = Topic.Type;

  constructor(
    public readonly name: string
  ) { }
}

export class Message {
  static Type = "Chat.Message" as const;
  type = Message.Type;

  constructor(
    public readonly topic: Topic,
    public readonly text: string
  ) { }
}

export const chatModel = (b: ModelBuilder) => b
  .type(Topic)
  .type(Message, m => m
    .predecessor("topic", Topic)
  )
;