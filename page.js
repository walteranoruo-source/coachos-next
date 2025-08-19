export default function HomePage() {
  return (
    <div>
      <h1>⚽ CoachOS is live</h1>
      <p>This is your Next.js starter. Head to <a href="/compose">/compose</a> to see the canvas stub.</p>
    </div>
  );
}
import ComposerStub from "@/components/ComposerStub";

export const metadata = {
  title: "Compose | CoachOS"
};

export default function ComposePage() {
  return (
    <div>
      <h1>Session Composer (Stub)</h1>
      <p>Drop your React canvas here later. The stub proves rendering & layout.</p>
      <ComposerStub />
    </div>
  );
}
