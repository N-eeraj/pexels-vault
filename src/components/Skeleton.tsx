export default function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`min-w-px min-h-px bg-secondary/50 rounded-sm animate-pulse ${className}`} />
  )
}
