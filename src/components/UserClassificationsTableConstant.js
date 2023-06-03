import React from "react";
import UserClassificationsTable from "./UserClassificationsTable";
import UserClassificationJSON from "./UserClassificationJSON";

const UserClassificationsTableConstant = () => {
  const user = { classifications: UserClassificationJSON, email: "john.newbie@world.com" };
  console.log(user);
  return <UserClassificationsTable user={user} />;
};

export default UserClassificationsTableConstant;