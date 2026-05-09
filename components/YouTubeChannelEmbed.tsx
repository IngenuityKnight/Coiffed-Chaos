// Replace CHANNEL_PLAYLIST_ID with your YouTube channel's uploads playlist ID.
// To find it: go to your YouTube channel → click "Videos" tab → copy the list=
// value from the URL, OR go to studio.youtube.com → Customization → your channel ID
// starts with "UC..." — replace "UC" with "UU" to get the uploads playlist ID.
// Example: channel ID = UCaBcDeFgH → playlist ID = UUaBcDeFgH

const CHANNEL_PLAYLIST_ID = 'YOUR_UPLOADS_PLAYLIST_ID'; // e.g. UUaBcDeFgHiJkLmNoPqRsTuV

interface YouTubeChannelEmbedProps {
  title?: string;
}

export default function YouTubeChannelEmbed({
  title = 'Coiffed Chaos on YouTube',
}: YouTubeChannelEmbedProps) {
  return (
    <div className="w-full">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute inset-0 w-full h-full rounded-2xl border border-line"
          src={`https://www.youtube.com/embed/videoseries?list=${CHANNEL_PLAYLIST_ID}&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
