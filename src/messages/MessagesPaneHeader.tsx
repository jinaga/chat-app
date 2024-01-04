import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { toggleMessagesPane } from '../utils';

type MessagesPaneHeaderProps = {
  title: string;
};

export default function MessagesPaneHeader(props: MessagesPaneHeaderProps) {
  const { title } = props;
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.body',
      }}
      py={{ xs: 2, md: 2 }}
      px={{ xs: 1, md: 2 }}
    >
      <Stack direction="row" spacing={{ xs: 1, md: 2 }} alignItems="center">
        <IconButton
          variant="plain"
          color="neutral"
          size="sm"
          sx={{
            display: { xs: 'inline-flex', sm: 'none' },
          }}
          onClick={() => toggleMessagesPane()}
        >
          <ArrowBackIosNewRoundedIcon />
        </IconButton>
        <div>
          <Typography
            fontWeight="lg"
            fontSize="lg"
            component="h2"
            noWrap
          >
            {title}
          </Typography>
        </div>
      </Stack>
    </Stack>
  );
}
