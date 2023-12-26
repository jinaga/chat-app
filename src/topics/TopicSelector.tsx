import React from "react";
import { TopicViewModel } from "./topicViewModel"

export interface TopicSelectorProps {
  viewModel: TopicViewModel;
}

export const TopicSelector = ({ viewModel }: TopicSelectorProps) => {
  return (
    <div>
      <h1>Select Topic</h1>
      <input type="text" value={viewModel.topicName} onChange={e => viewModel.setTopicName(e.target.value)} />
      <button onClick={() => viewModel.select()} disabled={!viewModel.canSelect}>Select</button>
    </div>
  );
}