import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StudentsQuery } from '../queries/StudentsQuery';
import { setStudents, setLoading, setError, setSelectedStudent } from '../slices/StudentSelectSlice';

export default function StudentSelect({ onStudentChange, selectedBranch, uniqueKey }) {
  const dispatch = useDispatch();
  const { students, loading, error, selectedStudent } = useSelector((state) => state.studentSelect);

  useEffect(() => {
    const fetchStudents = async () => {
      dispatch(setLoading(true));

      try {
        const response = await StudentsQuery();
        const data = await response.json();
        const filteredData = data.data.userPage.filter((user) => {
          const memberships = user.membership || [];
          return selectedBranch === 'all' || memberships.some((membership) => membership.group.id === selectedBranch);
        });

        dispatch(setStudents(filteredData));
      } catch (error) {
        dispatch(setError(error));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchStudents();
  }, [dispatch, selectedBranch]);

  const handleStudentChange = (e) => {
    console.log("Skupina "+selectedBranch);
    const studentId = e.target.value;
    dispatch(setSelectedStudent(studentId)); // Dispatch action to set the selected student
    onStudentChange(studentId);


  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Chyba: {error.message}</div>;
  }

  return (
  <div>
    <label htmlFor="student-select">Student:</label>
    <select
      className="form-select"
      id="student-select"
      uniqueKey={uniqueKey}
      value={selectedStudent} // Set the value of the select element to selectedStudent
      onChange={handleStudentChange} // Use the updated handleStudentChange function
    >
      <option value="">Vyber studenta</option> {/* Update the value here */}
      {students.map((student) => (
        <option key={student.id} value={student.id}>
          {student.name} {student.surname}
        </option>
      ))}
    </select>
  </div>
);
}
