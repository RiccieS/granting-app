import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StudentsQuery } from '../queries/StudentsQuery';
import { setStudents, setLoading, setError } from '../slices/StudentSelectSlice';

export default function StudentSelect({ onStudentChange, selectedBranch, uniqueKey }) {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector((state) => state.studentSelect);

  useEffect(() => {
    const fetchStudents = async () => {
      dispatch(setLoading(true)); // Set loading state to true

      try {
        const response = await StudentsQuery();
        const data = await response.json();
        console.log(selectedBranch);
        const filteredData = data.data.userPage.filter((user) => {
          const memberships = user.membership || [];
          return selectedBranch === 'all' || memberships.some((membership) => membership.group.id === selectedBranch);
        });

        dispatch(setStudents(filteredData)); // Dispatch action to set students data
      } catch (error) {
        dispatch(setError(error)); // Dispatch action to set error state
      } finally {
        dispatch(setLoading(false)); // Set loading state to false
      }
    };

    fetchStudents();
  }, [dispatch, selectedBranch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Chyba: {error.message}</div>;
  }

  return (
    <div>
      <label htmlFor="student-select">Student:</label>
      <select className="form-select" id="student-select" uniqueKey={uniqueKey} onChange={(e) => onStudentChange(e.target.value)}>
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