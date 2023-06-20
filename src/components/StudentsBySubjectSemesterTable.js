import React from 'react';
import Table from "react-bootstrap/Table";
import SemesterSubjectSetClassificationSelect from './SemesterSubjectSetClassificationSelect';

export default function StudentsBySubjectSemesterTable({ filteredData }) {
    if (!Array.isArray(filteredData)) {
        return null; // Render null or a placeholder if filteredData is not an array
    }
    const levelA = {id: '5fae9dd8-b095-11ed-9bd8-0242ac110002', name: 'A'}
    const levelB = {id: '5faea134-b095-11ed-9bd8-0242ac110002', name: 'B'}
    const levelC = {id: '5faea21a-b095-11ed-9bd8-0242ac110002', name: 'C'}
    const levelD = {id: '5faea2d8-b095-11ed-9bd8-0242ac110002', name: 'D'}
    const levelE = {id: '5faea332-b095-11ed-9bd8-0242ac110002', name: 'E'}
    const levelF = {id: '5faea396-b095-11ed-9bd8-0242ac110002', name: 'F'}
    const maxLevels = Math.max(...filteredData.map((entry) => entry.length));

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        {Array.from({ length: maxLevels }, (_, index) => (
                            <th key={index}> {index + 1}.
                        <SemesterSubjectSetClassificationSelect index={index+1} filteredData={filteredData} levels={[levelA, levelB, levelC, levelD, levelE, levelF]}/>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((entry) => {
                        if (!entry[0].user || !entry[0].level) {
                            return null; // Skip rendering if user or level is missing
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
