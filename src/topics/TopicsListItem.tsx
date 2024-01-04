import Box from '@mui/joy/Box';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { ListItemButtonProps } from '@mui/joy/ListItemButton';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import * as React from 'react';
import { toggleMessagesPane } from '../utils';

type TopicListItemProps = ListItemButtonProps & {
  topicHash: string;
  topicName: string;
  selectedTopicHash?: string;
  setSelectedTopicHash: (hash: string) => void;
};

export default function TopicListItem(props: TopicListItemProps) {
  const { topicHash, topicName, selectedTopicHash, setSelectedTopicHash } = props;
  const selected = selectedTopicHash === topicHash;
  return (
    <React.Fragment>
      <ListItem>
        <ListItemButton
          onClick={() => {
            toggleMessagesPane();
            setSelectedTopicHash(topicHash);
          }}
          selected={selected}
          color="neutral"
          sx={{
            flexDirection: 'column',
            alignItems: 'initial',
            gap: 1,
          }}
        >
          <Stack direction="row" spacing={1.5}>
            <Box sx={{ flex: 1 }}>
              <Typography level="title-sm">{topicName}</Typography>
            </Box>
            <Box
              sx={{
                lineHeight: 1.5,
                textAlign: 'right',
              }}
            >
            </Box>
          </Stack>
        </ListItemButton>
      </ListItem>
      <ListDivider sx={{ margin: 0 }} />
    </React.Fragment>
  );
}
