interface SimpleTextTableProps {
  raw: string;
}

/**
 * A reusable table component that parses plain text into a table.
 * 
 * Usage:
 * const RAW_TABLE = `
 * Velocity limit,Task time (s),Smoothness
 * 0.05,110,0.001
 * 0.10,70,0.003
 * `;
 * 
 * <SimpleTextTable raw={RAW_TABLE} />
 * 
 * TODO: Paste your real data here, one line per row, columns separated by commas.
 */
export default function SimpleTextTable({ raw }: SimpleTextTableProps) {
  if (!raw || !raw.trim()) return null;

  const rows = raw
    .trim()
    .split("\n")
    .map((line) => line.split(",").map((cell) => cell.trim()));

  const [header, ...body] = rows;

  if (!header || header.length === 0) return null;

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="simple-table">
        <thead>
          <tr>
            {header.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
