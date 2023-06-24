import { useSelector } from 'react-redux';
import Table from "react-bootstrap/Table";
import SemesterSubjectSetClassificationSelect from './SemesterSubjectSetClassificationSelect';

export default function StudentsBySubjectSemesterTable() {
    const { classificationsData  } = useSelector((state) => state.subjectSemesterSelectForStudentsDisplay);

    if (!Array.isArray(classificationsData )) {
        return null; // Renderovat null nebo zástupný obsah, pokud filteredData není pole
    }
    const levelA = {id: '5fae9dd8-b095-11ed-9bd8-0242ac110002', name: 'A'}
    const levelB = {id: '5faea134-b095-11ed-9bd8-0242ac110002', name: 'B'}
    const levelC = {id: '5faea21a-b095-11ed-9bd8-0242ac110002', name: 'C'}
    const levelD = {id: '5faea2d8-b095-11ed-9bd8-0242ac110002', name: 'D'}
    const levelE = {id: '5faea332-b095-11ed-9bd8-0242ac110002', name: 'E'}
    const levelF = {id: '5faea396-b095-11ed-9bd8-0242ac110002', name: 'F'}
    const maxLevels = Math.max(...classificationsData.map((entry) => entry.length));

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Jméno</th>
                        <th>Příjmení</th>
                        {Array.from({ length: maxLevels }, (_, index) => (
                            <th key={index}> {index + 1}.
                                <SemesterSubjectSetClassificationSelect index={index+1} filteredData={classificationsData} levels={[levelA, levelB, levelC, levelD, levelE, levelF]}/>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {classificationsData.map((entry) => {
                        if (!entry[0].user || !entry[0].level) {
                            return null; // Přeskočit vykreslování, pokud chybí uživatel nebo úroveň
                        }

                        return (
                            <tr key={entry[0].user.id}>
                                <td>{entry[0].user.name}</td>
                                <td>{entry[0].user.surname}</td>
                                {Array.from({ length: maxLevels }, (_, index) => {
                                    const level = entry[index]?.level;
                                    return <td key={index}>{level ? level.name : '-'}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}
