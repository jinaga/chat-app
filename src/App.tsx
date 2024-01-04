import Box from "@mui/joy/Box";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles";
import './App.css';
import MyMessages from "./components/Layout";
import { MessageComposer } from "./messages/MessageComposer";
import { MessageList } from "./messages/MessageList";
import { useMessageList } from "./messages/messageListViewModel";
import { TopicSelector } from "./topics/TopicSelector";
import { useTopic } from "./topics/topicViewModel";

function App() {
  const topicViewModel = useTopic();
  const messageListViewModel = useMessageList(topicViewModel);
  
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box component="main" className="MainContent" sx={{ flex: 1 }}>
          <MyMessages />
        </Box>
      <TopicSelector viewModel={topicViewModel} />
      <MessageList viewModel={messageListViewModel} />
      <MessageComposer viewModel={messageListViewModel} />
    </CssVarsProvider>
  )
}

export default App
