import UserClassificationCell from "./UserClassificationCell";
import UserSetClassificationButton from "./UserSetClassificationButton";
import UserSetClassificationSelect from "./UserSetClassificationSelect";

/**
 * Komponenta pro řádek v tabulce klasifikací uživatele s možností úpravy.
 * @param {Object} props - Vstupní vlastnosti komponenty
 * @param {Array} props.classifications - Klasifikace
 * @param {React.ReactNode} props.children - Vnořené elementy
 * @param {number} props.cols - Počet sloupců
 * @returns {JSX.Element} Element komponenty UserClassificationsRowEditable
 */
export const UserClassificationsRowEditable = ({
  classifications,
  children,
  cols = 5
}) => {
  // Seřazení klasifikací podle pořadí
  const sorted = [...classifications].sort((c1, c2) => c1.order - c2.order);

  // Vytvoření prázdného pole pro vyplnění prázdných buněk
  const dummy = new Array(cols - 1 - sorted.length).fill("");

  // Definice úrovní známek
  const levelA = {
    id: '5fae9dd8-b095-11ed-9bd8-0242ac110002',
    name: 'A'
  };
  const levelB = {
    id: '5faea134-b095-11ed-9bd8-0242ac110002',
    name: 'B'
  };
  const levelC = {
    id: '5faea21a-b095-11ed-9bd8-0242ac110002',
    name: 'C'
  };
  const levelD = {
    id: '5faea2d8-b095-11ed-9bd8-0242ac110002',
    name: 'D'
  };
  const levelE = {
    id: '5faea332-b095-11ed-9bd8-0242ac110002',
    name: 'E'
  };
  const levelF = {
    id: '5faea396-b095-11ed-9bd8-0242ac110002',
    name: 'F'
  };
  return /*#__PURE__*/React.createElement("tr", null, children, sorted.map(classification => /*#__PURE__*/React.createElement(UserClassificationCell, {
    key: classification.id,
    classification: classification
  }, " ", /*#__PURE__*/React.createElement(UserSetClassificationButton, {
    classification: classification,
    newlevel: levelA
  }), " ", /*#__PURE__*/React.createElement(UserSetClassificationButton, {
    classification: classification,
    newlevel: levelB
  }), " ", /*#__PURE__*/React.createElement(UserSetClassificationButton, {
    classification: classification,
    newlevel: levelC
  }), " ", /*#__PURE__*/React.createElement(UserSetClassificationButton, {
    classification: classification,
    newlevel: levelD
  }), " ", /*#__PURE__*/React.createElement(UserSetClassificationButton, {
    classification: classification,
    newlevel: levelE
  }), " ", /*#__PURE__*/React.createElement(UserSetClassificationButton, {
    classification: classification,
    newlevel: levelF
  }), " ", /*#__PURE__*/React.createElement(UserSetClassificationSelect, {
    classification: classification,
    levels: [levelA, levelB, levelC, levelD, levelE, levelF]
  }))), dummy.map((i, index) => /*#__PURE__*/React.createElement("td", {
    key: index
  })));
};
export default UserClassificationsRowEditable;