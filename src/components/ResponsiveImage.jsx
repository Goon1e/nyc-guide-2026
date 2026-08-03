const imagePath = (name, width) => {
  const baseName = name.replace(/\.[^.]+$/, '')
  return `${import.meta.env.BASE_URL}images/${baseName}-${width}.webp`
}

export default function ResponsiveImage({ alt, className, name, sizes, style }) {
  return <img
    alt={alt}
    className={className}
    decoding="async"
    loading="lazy"
    sizes={sizes}
    src={imagePath(name, 960)}
    srcSet={[480, 960, 1600].map((width) => `${imagePath(name, width)} ${width}w`).join(', ')}
    style={style}
  />
}
