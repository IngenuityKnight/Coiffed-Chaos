interface Props {
  ids: string[];
}

export default function YouTubeShortsRow({ ids }: Props) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
      {ids.map((id) => (
        <div
          key={id}
          className="snap-start shrink-0 w-[260px] sm:w-[300px] rounded-2xl overflow-hidden border border-line"
          style={{ aspectRatio: '9 / 16' }}
        >
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${id}`}
            title="Coiffed Chaos Short"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
