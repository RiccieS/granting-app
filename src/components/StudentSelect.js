import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StudentsQuery } from '../queries/StudentsQuery';
import { setStudents, setLoading, setError, setSelectedStudent } from '../slices/StudentSelectSlice';
import { ClassificationByUserQuery } from 'queries/UserClassificationQuery';

export default function StudentSelect({ selectedBranch }) {
  const dispatch = useDispatch();
  const { students, loading, error, selectedStudent } = useSelector((state) => state.studentSelect);

  const handleStudentChange = async (studentId) => {
    try {
      const response = await ClassificationByUserQuery(studentId);
      const data = await response.json();
      const user = data.data.result.id
      dispatch(setSelectedStudent(user));
    } catch (error) {
      console.error('Error fetching user classifications:', error);
    }
  };

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

  if (loading) {
    return <div>Loading...</div>;
  }
  else if (error) {
    return <div>Chyba: {error.message}</div>;
  }
  else {
    return (
      <div>
        <label htmlFor="student-select">Student:</label>
        <select
          className="form-select"
          id="student-select"
          value={selectedStudent}
          onChange={(e) => { handleStudentChange(e.target.value)}}
        >
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
}