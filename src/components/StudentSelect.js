import React, { useEffect, useState } from 'react';
import { StudentsQuery } from '../queries/StudentsQuery';

export default function StudentSelect({ onStudentChange, selectedBranch, key }) {
    const [students, setStudents] = useState([]); // Stav pro uchování seznamu studentů
    const [loading, setLoading] = useState(true); // Stav pro zobrazení načítání
    const [error, setError] = useState(null); // Stav pro zobrazení chybového stavu

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await StudentsQuery(); // Volání dotazu na seznam studentů
                const data = await response.json();
                const filteredData = data.data.userPage.filter((user) => {
                    const memberships = user.membership || [];
                    return selectedBranch === 'all' || memberships.some((membership) => membership.group.name === selectedBranch);
                }); // Filtrace seznamu studentů na základě vybraného oboru

                setStudents(filteredData); // Nastavení filtrovaného seznamu studentů
                setLoading(false); // Ukončení načítání
            } catch (error) {
                setError(error); // Nastavení chybového stavu
                setLoading(false); // Ukončení načítání
            }
        };

        fetchStudents(); // Zavolání funkce pro načtení seznamu studentů
    }, [selectedBranch]); // Znovu vyvolání efektu při změně vybraného oboru

    if (loading) {
        return <div>Loading...</div>; // Zobrazení načítání, pokud ještě probíhá načítání dat
    }

    if (error) {
        return <div>Chyba: {error.message}</div>; // Zobrazení chybového stavu v případě chyby při načítání dat
    }

    return (
        <div>
            {/* Výběr studenta */}
            <label htmlFor="student-select">Student:</label>
            <select className="form-select" id="student-select" key={key} onChange={(e) => onStudentChange(e.target.value)}>
                {/* Výchozí volba */}
                <option value="">Vyber studenta</option>
                {/* Možnosti výběru studentů */}
                {students.map((student) => (
                    <option key={student.id} value={student.id}>
                        {student.name} {student.surname}
                    </option>
                ))}
            </select>
        </div>
    );
}