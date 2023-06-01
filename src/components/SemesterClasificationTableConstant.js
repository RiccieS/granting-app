import React from "react";
import SemesterClassificationsTable from "./SemesterClasificationTable";
import UserClassificationJSON from "./UserClasificationJSON";

const SemesterClassificationsTableConstant = () => {
  const semester = { classifications: UserClassificationJSON };

  return <SemesterClassificationsTable semester={semester} />;
};

export default SemesterClassificationsTableConstant;