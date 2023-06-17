import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubjectSelectQuery } from '../queries/SubjectSelectQuery';
import { setSubjectNamesForTable, setSelectedSubjectForTable, setClassificationsData } from '../slices/StudentsBySubjectSemesterSelectSlice';
import groupDataByUser from "../utils/groupDataByUser";
import fetchClassificationStatData from '../actions/ClassificationAsyncFetch';
export default function StudentsBySubjectSemesterTable({ filteredData }) {
    if (filteredData != null) {
        const data = groupDataByUser(filteredData);
        console.log(data);

    }





    return (
        <div >

        </div>
    );
}