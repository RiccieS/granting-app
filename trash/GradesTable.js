import React from 'react';
import { useDispatch} from 'react-redux';
import UserClassificationsTableConstant from './UserClassificationsTableConstant';



export default function GradesTable({ selectedStudent }) {
  const dispatch = useDispatch();
  

  // Add your useEffect, useState, and other logic here

  return (
    <UserClassificationsTableConstant />
  );
}