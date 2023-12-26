import { useState } from "react";
import { MessageListViewModel } from "./messageListViewModel";

export interface MessageComposerProps {
  viewModel: MessageListViewModel;
}

export const MessageComposer = ({ viewModel }: MessageComposerProps) => {
  const [message, setMessage] = useState("");

  return viewModel.topicName ? (
    <div>
      <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={() => {
        viewModel.sendMessage(message);
        setMessage("");
      }}>Send</button>
    </div>
  ) : null;
}