import { UserClassificationMutationQuery } from '../queries/UserClassificationMutationQuery'; // Importujte dotaz na mutaci klasifikace uživatele
import { updateClassification } from '../slices/GradesTableSlice'; // Import pro aktualizaci klasifikace v gradestable
import { updateClassificationsData } from '../slices/StudentsBySubjectSemesterSelectSlice'; // Import pro aktualizaci klasifikace v gradestable

/**
 * Funkce pro aktualizaci klasifikace uživatele.
 * @param {Object} classification - Klasifikace uživatele.
 * @param {Object} newlevel - Nový level.
 * @returns {Function} - Redux thunk funkce pro dispečování akcí na reducery.
 */
export const UpdateUserClassification = (classification, newlevel) => dispatch => {
  UserClassificationMutationQuery(classification.id, classification.lastchange, newlevel.id).then(response => response.json()).then(json => {
    console.log(json);
    const updatedUser = json.data?.result.classification.user;
    console.log("updated user z mutace: " + JSON.stringify(updatedUser, null, 1));
    if (updatedUser) {
      // Dispečuje akci 'updateClassification' s aktualizovanou klasifikací na reducer
      const filteredClassifications = updatedUser.classifications.find(c => c.id === classification.id);
      console.log("updated user po find: " + JSON.stringify(filteredClassifications, null, 1));
      console.log("order z updateduser: " + filteredClassifications.order);
      const transformedClassification = {
        id: filteredClassifications.id,
        order: filteredClassifications.order,
        lastchange: filteredClassifications.lastchange,
        semester: filteredClassifications.semester,
        level: filteredClassifications.level,
        user: updatedUser
      };
      dispatch(updateClassification(updatedUser));
      dispatch(updateClassificationsData({
        id: classification.id,
        newData: transformedClassification
      }));
    }
  });
};