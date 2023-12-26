import { useEffect, useState } from "react";
import { j } from "../jinaga-config";
import { model } from "../model";
import { Message, Topic } from "../model/chat";
import { TopicViewModel } from "../topics/topicViewModel";

export interface MessageViewModel {
  id: string;
  text: string;
}

export interface MessageListViewModel {
  topicName: string;
  messages: MessageViewModel[];
  sendMessage(text: string): void;
}

const messagesInTopic = model.given(Topic).match((topic, facts) =>
  facts.ofType(Message)
    .join(m => m.topic, topic)
    .select(m => ({
      id: j.hash(m),
      text: m.text
    }))
);

export function useMessageList(topicViewModel: TopicViewModel): MessageListViewModel {
  const [messages, setMessages] = useState<MessageViewModel[]>([]);
  useEffect(() => {
    if (topicViewModel.topic) {
      const observer = j.watch(messagesInTopic, topicViewModel.topic, message => {
        setMessages(m => [...m, message]);
      });

      return () => {
        observer.stop();
        setMessages([]);
      };
    }
  }, [topicViewModel.topic]);

  const topicName = topicViewModel.topic?.name ?? "";
  function sendMessage(text: string) {
    if (topicViewModel.topic) {
      j.fact(new Message(topicViewModel.topic, text));
    }
  }

  return {
    topicName,
    messages,
    sendMessage
  };
}