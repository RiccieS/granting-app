import React, { useEffect, useState } from 'react';
import { StudentsQuery } from '../queries/StudentsQuery';

export default function StudentSelect({ onStudentChange, selectedBranch, key }) {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await StudentsQuery();
                const data = await response.json();
                const filteredData = data.data.userPage.filter((user) => {
                    const memberships = user.membership || [];
                    return selectedBranch === 'all' || memberships.some((membership) => membership.group.name === selectedBranch);
                });

                setStudents(filteredData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchStudents();
    }, [selectedBranch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <label htmlFor="student-select">Student:</label>
            <select className="form-select" id="student-select" key={key} onChange={(e) => onStudentChange(e.target.value)}>
                <option value="">Vyber studenta</option>
                {students.map((student) => (
                    <option key={student.id} value={student.id}>
                        {student.name} {student.surname}
                    </option>
                ))}
            </select>
        </div>
    );
}