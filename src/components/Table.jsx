export default function Table({ columns, data, renderRow, style }) {
  return (
    <table
      className={`ticket_table ${style} text-left border border-gray-300`}
    >
      <thead>
        <tr>
          {columns.map((col) => (
            <th className={col.className} key={col.field}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-lg">
        {data.map((rowData, index) => (
          <tr key={index}>{renderRow(rowData)}</tr>
        ))}
      </tbody>
    </table>
  );
}
