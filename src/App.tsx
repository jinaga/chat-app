import './App.css'
import { TopicSelector } from "./topics/TopicSelector";
import { useTopic } from "./topics/topicViewModel";

function App() {
  const topicViewModel = useTopic();
  
  return (
    <>
      <TopicSelector viewModel={topicViewModel} />
    </>
  )
}

export default App
