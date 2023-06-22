import { UserClassificationMutationQuery } from 'queries/UserClassificationMutationQuery'; // Importujte dotaz na mutaci klasifikace uživatele
import { updateClassification } from '../slices/GradesTableSlice'; // Importujte akci pro aktualizaci klasifikace

export const UpdateUserClassification = (classification, newlevel) => (dispatch, getState) => {
  UserClassificationMutationQuery(classification.id, classification.lastchange, newlevel.id)
    .then(response => response.json())
    .then(json => {
      const updatedUser = json.data?.result.classification.user;
      if (updatedUser) {
        // Dispečuje akci 'updateClassification' s aktualizovanou klasifikací na reducer
        dispatch(updateClassification(updatedUser));
      }
    });
};
