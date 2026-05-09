import { Instagram, ExternalLink } from "lucide-react";

function toEmbed(url: string) {
  const clean = url.endsWith("/") ? url : url + "/";
  return clean + "embed/captioned";
}

export function InstagramEmbedGrid({ urls }: { urls: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {urls.map((url) => (
        <div key={url} className="relative border border-border bg-card overflow-hidden group">
          <div className="aspect-square relative">
            <iframe
              src={toEmbed(url)}
              title={`Post de Instagram ${url}`}
              loading="lazy"
              scrolling="no"
              allow="encrypted-media"
              className="absolute inset-0 h-full w-full bg-background"
              style={{ border: 0 }}
            />
          </div>
          <a href={url} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-2 px-3 py-2 border-t border-border text-xs font-heading uppercase tracking-wider hover:text-primary transition">
            <span className="flex items-center gap-1.5"><Instagram className="h-3.5 w-3.5" /> Ver post</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      ))}
    </div>
  );
}