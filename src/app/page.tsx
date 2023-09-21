import DailyQuestList from '@/components/home/daily-quest-list';
import HotContentList from '@/components/home/hot-content-list';
import NewestContentList from '@/components/home/newest-content-list';
import RollingBanner from '@/components/home/rolling-banner';
import WeeklyQuestList from '@/components/home/weekly-quest-list';

export default async function Home() {
  return (
    <div className="grid grid-rows-3 gap-4 min-h-[500px] sm:grid-cols-12 lg:grid-cols-12 grid-cols-4 grid-flow-row-dense">
      <RollingBanner />
      {/* 2번째줄 */}
      <HotContentList />
      <NewestContentList />
      {/* 3번째줄 */}
      <DailyQuestList />
      <WeeklyQuestList />
    </div>
  );
}
