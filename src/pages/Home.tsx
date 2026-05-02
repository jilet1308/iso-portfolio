import { useHomeAnimation } from "../hooks/useHomeAnimation";
import BrowserAnimation from "../components/home/BrowserAnimation";
import LandingContent from "../components/home/LandingContent";

export default function Home() {
  const {
    phase,
    typedText,
    visibleResults,
    loadProgress,
    browserVisible,
    skip,
    showBrowser,
    isTransitioning,
    addressBar,
  } = useHomeAnimation();

  return (
    <div className="page-area scrollbar-thin bg-amber-50 dark:bg-stone-900 flex items-center justify-center overflow-hidden">
      {showBrowser && (
        <BrowserAnimation
          phase={phase}
          typedText={typedText}
          visibleResults={visibleResults}
          loadProgress={loadProgress}
          browserVisible={browserVisible}
          isTransitioning={isTransitioning}
          addressBar={addressBar}
          skip={skip}
        />
      )}
      <LandingContent visible={phase === "landed"} />
    </div>
  );
}
