import UserClassificationCell from "./UserClassificationCell";

/**
 * Komponenta pro řádek v tabulce klasifikací uživatele.
 * @param {Object} props - Vstupní vlastnosti komponenty
 * @param {Array} props.classifications - Klasifikace
 * @param {React.ReactNode} props.children - Vnořené elementy
 * @param {number} props.cols - Počet sloupců
 * @returns {JSX.Element} Element komponenty UserClassificationsRow
 */
export const UserClassificationsRow = ({ classifications, children, cols = 5 }) => {
  // Seřazení klasifikací podle pořadí
  const sorted = [...classifications].sort((c1, c2) => c1.order - c2.order);
  const dummy = new Array(cols - 1 - sorted.length).fill('');

  return (
    <tr>
      {children}

      {sorted.map((classification) => (
        <UserClassificationCell key={classification.id} classification={classification} />
      ))}
      {dummy.map((i, index) => <td key={index}></td>)}
    </tr>
  );
};

export default UserClassificationsRow;
