import React from "react";
import UserClassificationsTable from "./UserClassificationsTable";
import UserClassificationJSON from "./UserClassificationJSON";

const UserClassificationsTableConstant = () => {
  const user = { classifications: UserClassificationJSON, email: "john@star" };

  return <UserClassificationsTable user={user} />;
};

export default UserClassificationsTableConstant;