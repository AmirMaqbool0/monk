
export function SpinnerRing({ size = 44 }: { size?: number }) {
  return (
    <div
      className="spinner-ring"
      style={{ width: size, height: size }}
      aria-label="Loading"
    />
  );
}