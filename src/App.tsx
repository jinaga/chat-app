import './App.css';
import { MessageComposer } from "./messages/MessageComposer";
import { MessageList } from "./messages/MessageList";
import { useMessageList } from "./messages/messageListViewModel";
import { TopicSelector } from "./topics/TopicSelector";
import { useTopic } from "./topics/topicViewModel";

function App() {
  const topicViewModel = useTopic();
  const messageListViewModel = useMessageList(topicViewModel);
  
  return (
    <>
      <TopicSelector viewModel={topicViewModel} />
      <MessageList viewModel={messageListViewModel} />
      <MessageComposer viewModel={messageListViewModel} />
    </>
  )
}

export default App
