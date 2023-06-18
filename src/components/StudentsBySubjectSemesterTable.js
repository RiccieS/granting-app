import React from 'react';
import Table from "react-bootstrap/Table";

export default function StudentsBySubjectSemesterTable({ filteredData }) {
    if (!Array.isArray(filteredData)) {
        return null; // Render null or a placeholder if filteredData is not an array
    }

    const maxLevels = Math.max(...filteredData.map((entry) => entry.length));

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        {Array.from({ length: maxLevels }, (_, index) => (
                            <th key={index}> {index + 1}.</th>
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
