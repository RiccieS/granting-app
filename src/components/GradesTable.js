import React from 'react';
import { useDispatch} from 'react-redux';
/*import { GradesQuery } from '../queries/GradesQuery';
import { authorizedFetch } from '../queries/authorizedFetch';
import { ClassificationUpdateMutation } from '../queries/ClassificationUpdateMutation';
import fakeQueryLevel from '../queries/fakeQueryLevels.json';*/
import UserClassificationsTableConstant from './UserClassificationsTableConstant';


import { /* Import your actions */ } from '../slices/GradesTableSlice';

export default function GradesTable({ selectedStudent }) {
  const dispatch = useDispatch();
  

  // Add your useEffect, useState, and other logic here

  return (
    <UserClassificationsTableConstant />
  );
}