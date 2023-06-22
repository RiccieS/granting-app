import UserClassificationCell from "./UserClassificationCell";
import UserSetClassificationButton from "./UserSetClassificationButton";
import UserSetClassificationSelect from "./UserSetClassificationSelect";

export const UserClassificationsRowEditable = ({ classifications, children, cols = 5 }) => {
  // Seřazení klasifikací podle pořadí
  const sorted = [...classifications].sort((c1, c2) => c1.order - c2.order);

  // Vytvoření prázdného pole pro vyplnění prázdných buněk
  const dummy = new Array(cols - 1 - sorted.length).fill("");

  // Definice úrovní známek
  const levelA = { id: '5fae9dd8-b095-11ed-9bd8-0242ac110002', name: 'A' };
  const levelB = { id: '5faea134-b095-11ed-9bd8-0242ac110002', name: 'B' };
  const levelC = { id: '5faea21a-b095-11ed-9bd8-0242ac110002', name: 'C' };
  const levelD = { id: '5faea2d8-b095-11ed-9bd8-0242ac110002', name: 'D' };
  const levelE = { id: '5faea332-b095-11ed-9bd8-0242ac110002', name: 'E' };
  const levelF = { id: '5faea396-b095-11ed-9bd8-0242ac110002', name: 'F' };

  return (
    <tr>
      {children}
      {sorted.map((classification) => (
        <UserClassificationCell key={classification.id} classification={classification}>
          {" "}
          <UserSetClassificationButton classification={classification} newlevel={levelA} />{" "}
          <UserSetClassificationButton classification={classification} newlevel={levelB} />{" "}
          <UserSetClassificationButton classification={classification} newlevel={levelC} />{" "}
          <UserSetClassificationButton classification={classification} newlevel={levelD} />{" "}
          <UserSetClassificationButton classification={classification} newlevel={levelE} />{" "}
          <UserSetClassificationButton classification={classification} newlevel={levelF} />{" "}
          <UserSetClassificationSelect
            classification={classification}
            levels={[levelA, levelB, levelC, levelD, levelE, levelF]}
          />
        </UserClassificationCell>
      ))}
      {dummy.map((i, index) => <td key={index}></td>)}
    </tr>
  );
};

export default UserClassificationsRowEditable;
