import { CreateFeedEntity, Feed } from '../feed';

export const isFeed = (feed: unknown): feed is Feed => {
  if (!feed) {
    return false;
  }
  return (
    typeof (feed as Feed).id === 'number' && Boolean((feed as Feed).description)
  );
};

export const isCreateFeedEntity = (
  entity: unknown,
): entity is CreateFeedEntity => {
  if (!entity) {
    return false;
  }
  return Boolean((entity as CreateFeedEntity).description);
};
