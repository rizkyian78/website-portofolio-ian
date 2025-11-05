import FuzzyText from '@/components/FuzzyText'
import Noise from '@/components/Noise'
export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <Noise patternSize={250} patternScaleX={1} patternScaleY={1} patternRefreshInterval={2} patternAlpha={15} />
      <FuzzyText fontSize="10rem" baseIntensity={1} hoverIntensity={2} enableHover={true}>
        404 NOT FOUND
      </FuzzyText>
    </main>
  )
}
