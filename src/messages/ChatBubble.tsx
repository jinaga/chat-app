import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import * as React from 'react';

type ChatBubbleProps = {
  id: string;
  variant: 'sent' | 'received';
  content: string;
  timestamp: string;
  sender: string;
};

export default function ChatBubble(props: ChatBubbleProps) {
  const { content, variant, timestamp, sender } = props;
  const isSent = variant === 'sent';
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const [isLiked, setIsLiked] = React.useState<boolean>(false);
  const [isCelebrated, setIsCelebrated] = React.useState<boolean>(false);
  return (
    <Box sx={{ maxWidth: '60%', minWidth: 'auto' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: 0.25 }}
      >
        <Typography level="body-xs">
          {sender}
        </Typography>
        <Typography level="body-xs">{timestamp}</Typography>
      </Stack>
      <Box
        sx={{ position: 'relative' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Sheet
          color={isSent ? 'primary' : 'neutral'}
          variant={isSent ? 'solid' : 'soft'}
          sx={{
            p: 1.25,
            borderRadius: 'lg',
            borderTopRightRadius: isSent ? 0 : 'lg',
            borderTopLeftRadius: isSent ? 'lg' : 0,
            backgroundColor: isSent
              ? 'var(--joy-palette-primary-solidBg)'
              : 'background.body',
          }}
        >
          <Typography
            level="body-sm"
            sx={{
              color: isSent
                ? 'var(--joy-palette-common-white)'
                : 'var(--joy-palette-text-primary)',
            }}
          >
            {content}
          </Typography>
        </Sheet>
        {(isHovered || isLiked || isCelebrated) && (
          <Stack
            direction="row"
            justifyContent={isSent ? 'flex-end' : 'flex-start'}
            spacing={0.5}
            sx={{
              position: 'absolute',
              top: '50%',
              p: 1.5,
              ...(isSent
                ? {
                    left: 0,
                    transform: 'translate(-100%, -50%)',
                  }
                : {
                    right: 0,
                    transform: 'translate(100%, -50%)',
                  }),
            }}
          >
            <IconButton
              variant={isLiked ? 'soft' : 'plain'}
              color={isLiked ? 'danger' : 'neutral'}
              size="sm"
              onClick={() => setIsLiked((prevState) => !prevState)}
            >
              {isLiked ? '❤️' : <FavoriteBorderIcon />}
            </IconButton>
            <IconButton
              variant={isCelebrated ? 'soft' : 'plain'}
              color={isCelebrated ? 'warning' : 'neutral'}
              size="sm"
              onClick={() => setIsCelebrated((prevState) => !prevState)}
            >
              {isCelebrated ? '🎉' : <CelebrationOutlinedIcon />}
            </IconButton>
          </Stack>
        )}
      </Box>
    </Box>
  );
}