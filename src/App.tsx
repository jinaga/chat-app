import Box from "@mui/joy/Box";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles";
import './App.css';
import Layout from "./components/Layout";
import MessagesPane from "./components/MessagesPane";
import TopicsPane from "./components/TopicsPane";
import { useMessageList } from "./messages/messageListViewModel";
import { useTopic } from "./topics/topicViewModel";

function App() {
  const topicViewModel = useTopic();
  const messageListViewModel = useMessageList(topicViewModel);
  
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box component="main" className="MainContent" sx={{ flex: 1 }}>
        <Layout
          topicPane={() => <TopicsPane viewModel={topicViewModel}/>}
          messagePane={() => <MessagesPane viewModel={messageListViewModel} />} />
      </Box>
    </CssVarsProvider>
  )
}

export default App
