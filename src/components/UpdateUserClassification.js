import { UserClassificationMutationQuery } from 'queries/UserClassificationMutationQuery';
import { updateClassification } from '../slices/GradesTableSlice';

export const UpdateUserClassification = (classification, newlevel, dispatch) => {
  UserClassificationMutationQuery(classification.id, classification.lastchange, newlevel.id)
    .then(response => response.json())
    .then(json => {
      const updatedUser = json.data?.result.classification.user;
      if (updatedUser) {
        const result = { result: updatedUser };
        // Dispatch the 'loadClassification' action with the updated gradesTable
        console.log(result);
        dispatch(updateClassification(result));
      }
    });
};
