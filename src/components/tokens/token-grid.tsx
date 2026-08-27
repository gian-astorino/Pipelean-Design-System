import { TokenSwatch } from "./token-swatch";

function TokenGrid({
  tokens,
}: {
  tokens: { varName: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {tokens.map((token) => (
        <TokenSwatch key={token.varName} varName={token.varName} label={token.label} />
      ))}
    </div>
  );
}

export { TokenGrid };
