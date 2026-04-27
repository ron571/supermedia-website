export default function AudienceRealityCheckPage() {
  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 64px)" }}>
      <iframe
        src="/audience-reality-check.html"
        className="flex-1 w-full border-0"
        title="Audience Reality Check"
      />
    </div>
  );
}
