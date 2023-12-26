import { MessageListViewModel } from "./messageListViewModel";

export interface MessageListProps {
  viewModel: MessageListViewModel;
}

export const MessageList = ({ viewModel }: MessageListProps) => {
  return (
    <div>
      <h2>{viewModel.topicName}</h2>
      <ul>
        {viewModel.messages.map(m => <li key={m.id}>{m.text}</li>)}
      </ul>
    </div>
  );
}