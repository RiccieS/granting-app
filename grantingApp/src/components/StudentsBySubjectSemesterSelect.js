import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubjectSelectQuery } from '../queries/SubjectSelectQuery';
import { setSubjectNamesForTable, setSelectedSubjectForTable } from '../slices/StudentsBySubjectSemesterSelectSlice';
import { ChartClassificationQuery } from '../queries/ChartClassificationQuery';
import { StudentsBySubjectSemesterTable } from "./StudentsBySubjectSemesterTable";
import groupDataByUser from "../utils/groupDataByUser";
import { setClassificationsData } from 'slices/SubjectSemesterSelectSlice';

/**
 * Komponenta pro výběr studentů podle semestru předmětu.
 * @returns {JSX.Element} Element komponenty StudentsBySubjectSemesterSelect
 */
export function StudentsBySubjectSemesterSelect() {

    const dispatch = useDispatch();
    const { subjectNamesForTable, selectedSubjectForTable } = useSelector((state) => state.subjectSemesterSelectForStudentsDisplay);

    useEffect(() => {
        // Funkce pro načítání názvů předmětů pro výběr
        const fetchData = async () => {
            try {
                const response = await SubjectSelectQuery();
                const data = await response.json();

                // Filtrace a formátování názvů předmětů a semestrů
                const filteredSubjectNames = data.data.acsemesterPage.reduce((filtered, item) => {
                    const subjectID = item.subject.id;
                    const isDuplicate = filtered.some((subject) => subject.subjectID === subjectID);
                    if (!isDuplicate) {
                        item.subject.semesters.forEach((semester) => {
                            const subject = {
                                subjectName: item.subject.name,
                                semesterOrder: semester.order,
                                semesterID: semester.id,
                                subjectID: subjectID,
                            };
                            filtered.push(subject);
                        });
                    }
                    return filtered;
                }, []);

                dispatch(setSubjectNamesForTable(filteredSubjectNames));
            } catch (error) {
                console.error('Chyba při načítání názvů předmětů:', error);
            }
        };

        fetchData();
    }, [dispatch]);

    /**
     * Obsluha události změny výběru předmětu a semestru.
     * @param {Event} event - Událost změny výběru
     */
    const handleChange = async (event) => {
        const newValue = event.target.value;
        dispatch(setSelectedSubjectForTable(newValue));

        const [subjectID, semesterID] = newValue.split(',');

        // Načítání dat pro tabulku z API
        const response = await ChartClassificationQuery();
        const responseData = await response.json();
        console.log(responseData);
        const acsemesterPage = responseData.data.acsemesterPage;

        // Filtrace dat podle vybraného předmětu a semestru
        const filteredAcsemesterPage = acsemesterPage.filter(
            (entry) => entry.classifications.length > 0
        );

        const filteredData = filteredAcsemesterPage.filter((entry) => {
            return (
                entry.classifications[0].semester.id === semesterID &&
                entry.classifications[0].semester.subject.id === subjectID
            );
        });

        const filteredData2 = groupDataByUser(filteredData);
        // console.log(filteredData2);
        dispatch(setClassificationsData(filteredData2));
    };

    return (
        <div className="card">
            <h3 className="card-header" htmlFor="subject-select">Studenti podle semestru předmětu:</h3>
            <div className="card-body">
                <select className="form-select" id="subject-select" value={selectedSubjectForTable} onChange={handleChange}>
                    <option value="">- Vyberte -</option>
                    {subjectNamesForTable.map((subject) => (
                        <option key={subject.subjectID} value={[subject.subjectID, subject.semesterID]}>
                            {subject.subjectName}-{subject.semesterOrder}
                        </option>
                    ))}
                </select>
            </div>
            <StudentsBySubjectSemesterTable />
        </div>
    );
}
