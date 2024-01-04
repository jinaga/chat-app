import { AddCircleRounded } from "@mui/icons-material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, IconButton, Input } from '@mui/joy';
import List from '@mui/joy/List';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { toggleMessagesPane } from '../utils';
import TopicListItem from './TopicsListItem';
import { TopicViewModel } from "./topicViewModel";

type TopicsPaneProps = {
  viewModel: TopicViewModel;
};

export default function TopicsPane(props: TopicsPaneProps) {
  const { viewModel } = props;
  return (
    <Sheet
      sx={{
        borderRight: '1px solid',
        borderColor: 'divider',
        height: 'calc(100dvh - var(--Header-height))',
        overflowY: 'auto',
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
        p={2}
        pb={1.5}
      >
        <Typography
          fontSize={{ xs: 'md', md: 'lg' }}
          component="h1"
          fontWeight="lg"
          sx={{ mr: 'auto' }}
        >
          Topics
        </Typography>
        <IconButton
          variant="plain"
          aria-label="edit"
          color="neutral"
          size="sm"
          onClick={() => {
            toggleMessagesPane();
          }}
          sx={{ display: { sm: 'none' } }}
        >
          <CloseRoundedIcon />
        </IconButton>
      </Stack>
      <Box sx={{ px: 2, pb: 1.5 }}>
        <Input
          size="sm"
          placeholder="Add topic"
          aria-label="Add topic"
          value={viewModel.topicName}
          onChange={(e) => {
            viewModel.setTopicName(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              viewModel.select();
            }
          }}
          endDecorator={
            <IconButton
              variant="plain"
              aria-label="edit"
              color="neutral"
              size="sm"
              onClick={() => {
                viewModel.select();
              }}
            >
              <AddCircleRounded />
            </IconButton>
          }
        />
      </Box>
      <List
        sx={{
          py: 0,
          '--ListItem-paddingY': '0.75rem',
          '--ListItem-paddingX': '1rem',
        }}
      >
        {viewModel.topic &&
          <TopicListItem
            topicHash="xxxxx"
            topicName={viewModel.topic.name}
            selectedTopicHash="xxxxx"
            setSelectedTopicHash={() => {}}
          />
        }
      </List>
    </Sheet>
  );
}
