
export function extractYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    // watch?v=
    const byV = u.searchParams.get('v');
    if (byV) return byV;

    const parts = u.pathname.split('/').filter(Boolean); // quita vacíos

    // /embed/<id>  | /shorts/<id>
    if (parts.length >= 2 && (parts[0] === 'embed' || parts[0] === 'shorts')) {
      return parts[1];
    }

    // youtu.be/<id>
    if (u.hostname.includes('youtu.be') && parts.length >= 1) {
      return parts[0];
    }

    // fallback: último segmento
    return parts[parts.length - 1] || null;
  } catch {
    return null;
  }
}

export function getYouTubeThumbnail(url: string): string {
  const id = extractYouTubeId(url);
  return id
    ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
    : '/placeholder-video.jpg';
}
