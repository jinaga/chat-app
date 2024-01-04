import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import * as React from 'react';
import { MessageListViewModel, MessageViewModel } from "../messages/messageListViewModel";
import ChatBubble from './ChatBubble';
import MessageInput from './MessageInput';
import MessagesPaneHeader from './MessagesPaneHeader';

type MessagesPaneProps = {
  viewModel: MessageListViewModel;
};

export default function MessagesPane(props: MessagesPaneProps) {
  const { viewModel } = props;
  const [textAreaValue, setTextAreaValue] = React.useState('');

  return (
    <Sheet
      sx={{
        height: { xs: 'calc(100dvh - var(--Header-height))', lg: '100dvh' },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.level1',
      }}
    >
      <MessagesPaneHeader title={viewModel.topicName} />
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          minHeight: 0,
          px: 2,
          py: 3,
          overflowY: 'scroll',
          flexDirection: 'column-reverse',
        }}
      >
        <Stack spacing={2} justifyContent="flex-end">
          {viewModel.messages.map((message: MessageViewModel, index: number) => {
            const isYou = message.id === 'You';
            return (
              <Stack
                key={index}
                direction="row"
                spacing={2}
                flexDirection={isYou ? 'row-reverse' : 'row'}
              >
                <ChatBubble variant={isYou ? 'sent' : 'received'}
                  id={message.id}
                  content={message.text}
                  sender="You"
                  timestamp={new Date().toLocaleTimeString()}
                />
              </Stack>
            );
          })}
        </Stack>
      </Box>
      <MessageInput
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
        onSubmit={() => {
          viewModel.sendMessage(textAreaValue);
        }}
      />
    </Sheet>
  );
}
