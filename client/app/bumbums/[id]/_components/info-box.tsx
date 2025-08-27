import { type ReactNode } from "react";

export function InfoBoxContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap justify-around gap-4 mb-4">{children}</div>
  );
}

export default function InfoBox({
  infoKey: key,
  infoValue: value,
}: {
  infoKey: string;
  infoValue: string;
}) {
  return (
    <div className="min-w-24 bg-background-main flex flex-col text-xs px-4 py-2 items-center rounded-lg">
      <span>{key}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}
