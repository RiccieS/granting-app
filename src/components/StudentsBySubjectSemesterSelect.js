import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubjectSelectQuery } from '../queries/SubjectSelectQuery';
import { setSubjectNamesForTable, setSelectedSubjectForTable } from '../slices/StudentsBySubjectSemesterSelectSlice';
import { ChartClassificationQuery } from '../queries/ChartClassificationQuery';
import StudentsBySubjectSemesterTable from "./StudentsBySubjectSemesterTable";
import groupDataByUser from "../utils/groupDataByUser";

export default function StudentsBySubjectSemesterSelect() {

    const dispatch = useDispatch();
    const { subjectNamesForTable, selectedSubjectForTable } = useSelector((state) => state.subjectSemesterSelectForStudentsDisplay);
    const [filteredData, setFilteredData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await SubjectSelectQuery();
                const data = await response.json();
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
                console.error('Error fetching subject names:', error);
            }
        };

        fetchData();
    }, [dispatch]);

    const handleChange = async (event) => {
        const newValue = event.target.value;
        dispatch(setSelectedSubjectForTable(newValue));

        const [subjectID, semesterID] = newValue.split(',');

        const response = await ChartClassificationQuery();
        const responseData = await response.json();
        console.log(responseData)
        const acsemesterPage = responseData.data.acsemesterPage;

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
        setFilteredData(filteredData2);
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
            <StudentsBySubjectSemesterTable filteredData={filteredData} />
        </div>
    );
}