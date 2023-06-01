import React from "react";
import SemesterClassificationsTable from "./SemesterClasificationTable";
import UserClassificationJSON from "./UserClassificationJSON";

const SemesterClassificationsTableConstant = () => {
  const semester = { classifications: UserClassificationJSON };

  return <SemesterClassificationsTable semester={semester} />;
};

export default SemesterClassificationsTableConstant;