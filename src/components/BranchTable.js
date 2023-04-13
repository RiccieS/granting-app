import React from 'react';

export default function BranchTable({ data }) {
  const studjiniSkupinaSet = new Set(data.map((student) => student.studjini_skupina));
  const uniqueStudjiniSkupina = Array.from(studjiniSkupinaSet);
  return (
    <table>
      <thead>
        <tr>
          <th>SKUPINA</th>
        </tr>
      </thead>
      <tbody>
      {uniqueStudjiniSkupina.map(studjiniSkupinaSet => (
          <tr key={studjiniSkupinaSet.id}>
            <td>{studjiniSkupinaSet.studjini_skupina}</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}