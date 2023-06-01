import React, { useEffect, useState } from 'react';
import { GradesQuery } from '../queries/GradesQuery';
import { authorizedFetch } from '../queries/authorizedFetch';
import { ClassificationUpdateMutation } from '../queries/ClassificationUpdateMutation';
import fakeQueryLevel from '../queries/fakeQueryLevels.json'; // Importujte JSON data

import UserClassificationsTableConstant from './UserClassificationsTableConstant';

export default function GradesTable({ selectedStudent }) {
  return(
    <UserClassificationsTableConstant/>
  );
}