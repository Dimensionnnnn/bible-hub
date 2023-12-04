import ContentLoader, { Rect } from 'react-content-loader/native';

export function UISkeleton() {
  return (
    <ContentLoader
      width="100%"
      height="100%"
      speed={0.7}
      backgroundColor="#FFF"
      foregroundColor="#FFEFE3"
    >
      <Rect x="0" y="0" rx="16" ry="16" width="100%" height="100%" />
    </ContentLoader>
  );
}
