import { useState } from "react";
import { Topic } from "../model/chat";
import { j } from "../jinaga-config";

export interface TopicViewModel {
  topicName: string;
  setTopicName(topic: string): void;

  canSelect: boolean;
  select(): void;
  topic: Topic | null;
}

export function useTopic(): TopicViewModel {
  const [topicName, setTopicName] = useState<string>("");
  const [topic, setTopic] = useState<Topic | null>(null);

  const canSelect = topicName.length > 0 && topicName !== topic?.name;
  function select() {
    j.fact(new Topic(topicName))
      .then(t => setTopic(t));
  }

  return {
    topicName,
    setTopicName,
    canSelect,
    select,
    topic
  };
}