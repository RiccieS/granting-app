import React, { useEffect, useState } from 'react';
import { StudentsQuery } from '../queries/StudentsQuery';

<<<<<<< Updated upstream
export default function StudentSelect({ selectedStudent, onStudentChange, data }) {
  const handleChange = (event) => {
    const studentId = parseInt(event.target.value);
    const student = data.find((item) => item.id === studentId);
    onStudentChange(student);
  };

  return (
    <div>
      <label htmlFor="student-select">Vyberte studenta:</label>
      <select id="student-select" value={selectedStudent ? selectedStudent.id : ''} onChange={handleChange}>
        {data.map((student) => (
          <option key={student.id} value={student.id}>
            {student.jmeno} {student.prijmeni}
          </option>
        ))}
      </select>
    </div>
  );
=======
export default function StudentSelect({ onStudentChange, selectedBranch }) {
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
                console.log(filteredData);
                console.log(selectedBranch);

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
        <select onChange={(e) => onStudentChange(e.target.value)}>
            {students.map((student) => (
                <option key={student.id} value={student.id}>
                    {student.name} {student.surname}
                </option>
            ))}
        </select>
    );
>>>>>>> Stashed changes
}