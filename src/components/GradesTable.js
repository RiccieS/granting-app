import React, { useEffect, useState } from 'react';
import { GradesQuery } from '../queries/GradesQuery';

export default function GradesTable({ selectedStudent }) {
    const [gradesData, setGradesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGradesData = async () => {
            try {
                const response = await GradesQuery();
                const data = await response.json();
                const grades = data?.data?.acclassificationPage || [];
                const filteredGrades = grades.filter(
                    (grade) => grade.user?.id === selectedStudent
                );
                setGradesData(filteredGrades);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchGradesData();
    }, [selectedStudent]);

    if (loading) {
        return <div>Loading grades...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h2>Grades</h2>
            {gradesData.length === 0 ? (
                <div>No grades available.</div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Semester</th>
                            <th>Level</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gradesData.map((grade) => (
                            <tr key={grade.id}>
                                <td>{grade.semester?.subject?.name}</td>
                                <td>{grade.semester?.order}</td>
                                <td>
                                    {grade.semester?.classifications?.map((classification) => (
                                        <span key={classification.level.name}>{classification.level.name} </span>
                                    ))}
                                </td>
                                <td>{grade.type?.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}