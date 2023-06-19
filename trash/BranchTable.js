import React from 'react';
//Možná bude odstraněno
//Vytvoření komponenty BranchTable s props s anzvem data
export default function BranchTable({ data }) {

  //Vytvoření Setu z dat dle studjini_skupina
  const studjiniSkupinaSet = new Set(data.map((student) => student.studjini_skupina));

  //Konverze Setu na pole
  const uniqueStudjiniSkupina = Array.from(studjiniSkupinaSet);

  return (
    <table>

      <thead>
        <tr>
          <th>SKUPINA</th>
        </tr>
      </thead>

      <tbody>
        {/* Průchod polem uniqueStudjiniSkupina a vytvoření řádků tabulky */}
        {uniqueStudjiniSkupina.map(studjiniSkupinaSet => (
          <tr key={studjiniSkupinaSet.id}>
            <td>{studjiniSkupinaSet.studjini_skupina}</td>
          </tr>
        ))}
      </tbody>

    </table>
  );
}