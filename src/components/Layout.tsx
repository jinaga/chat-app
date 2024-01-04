import Sheet from '@mui/joy/Sheet';

import { useMessageList } from "../messages/messageListViewModel";
import { useTopic } from "../topics/topicViewModel";
import MessagesPane from './MessagesPane';
import TopicsPane from './TopicsPane';

export default function Layout() {
  const topicViewModel = useTopic();
  const messageListViewModel = useMessageList(topicViewModel);
  
  return (
    <Sheet
      sx={{
        flex: 1,
        width: '100%',
        mx: 'auto',
        pt: { xs: 'var(--Header-height)', sm: 0 },
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'minmax(min-content, min(30%, 400px)) 1fr',
        },
      }}
    >
      <Sheet
        sx={{
          position: { xs: 'fixed', sm: 'sticky' },
          transform: {
            xs: 'translateX(calc(100% * (var(--MessagesPane-slideIn, 0) - 1)))',
            sm: 'none',
          },
          transition: 'transform 0.4s, width 0.4s',
          zIndex: 100,
          width: '100%',
          top: 52,
        }}
      >
        <TopicsPane
          viewModel={topicViewModel}
        />
      </Sheet>
      <MessagesPane viewModel={messageListViewModel} />
    </Sheet>
  );
}
