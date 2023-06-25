import { UserClassificationMutationQuery } from 'queries/UserClassificationMutationQuery'; // Importujte dotaz na mutaci klasifikace uživatele
import { updateClassification } from '../slices/GradesTableSlice'; // Import pro aktualizaci klasifikace v gradestable
import { updateClassificationsData } from '../slices/StudentsBySubjectSemesterSelectSlice'; // Import pro aktualizaci klasifikace v gradestable

export const UpdateUserClassification = (classification, newlevel) => (dispatch) => {
  UserClassificationMutationQuery(classification.id, classification.lastchange, newlevel.id)
    .then(response => response.json())
    .then(json => {
      const updatedUser = json.data?.result.classification.user;
      console.log("updated user z mutace: "+updatedUser);
      if (updatedUser) {
        // Dispečuje akci 'updateClassification' s aktualizovanou klasifikací na reducer
        console.log("updated user po find: "+updatedUser.classifications.find(c => c.id === classification.id));
        dispatch(updateClassification(updatedUser));
        dispatch(updateClassificationsData({
          id: classification.id,
          newData: updatedUser.classifications.find(c => c.id === classification.id)
        }));
      }
    });
};
