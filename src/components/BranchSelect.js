import React, { useState, useEffect } from 'react';
import { GroupsSelectQuery } from '../queries/GroupsSelectQuery';

export default function BranchSelect() {
  const [selectedStudjiniSkupina, setSelectedStudjiniSkupina] = useState('');
  const [groupNames, setGroupNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GroupsSelectQuery();
        const data = await response.json();
        setGroupNames(data.data.surveyPage);
        // setSelectedStudjiniSkupina(data.data.groupPage[0]?.name || '');
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };

    fetchData();
  }, []);
  console.log(groupNames)
 

  return (
    <div>
      
      {/* <BranchGradeTable data={data} grades_data={grades_data} studjiniSkupina={selectedStudjiniSkupina} /> */}
    </div>
  );
}