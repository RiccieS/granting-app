import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StudentsQuery } from '../queries/StudentsQuery';
import { setStudents, setLoading, setError, setSelectedStudent } from '../slices/StudentSelectSlice';

/**
 * Komponenta pro výběr studentů.
 * @param {string} selectedBranch - Vybraný obor
 * @returns {JSX.Element} Element komponenty StudentSelect
 */
export function StudentSelect({ selectedBranch }) {
  const dispatch = useDispatch();
  const { students, loading, error, selectedStudents } = useSelector((state) => state.studentSelect);

  /**
   * Funkce pro změnu vybraných studentů.
   * @param {HTMLCollection} selectedOptions - Vybrané možnosti v selectu
   */
  const handleStudentChange = (selectedOptions) => {
    const selectedValues = Array.from(selectedOptions).map((option) => option.value);
    dispatch(setSelectedStudent(selectedValues));
  };

  useEffect(() => {
    // Načítání studentů při načtení komponenty nebo změně vybraného oboru
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
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div>
        <label htmlFor="student-select">Studenti:</label>
        <select
          className="form-select"
          id="student-select"
          value={selectedStudents}
          multiple
          onChange={(e) => handleStudentChange(e.target.selectedOptions)}
        >
          <option value="">Vyberte studenty</option>
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
