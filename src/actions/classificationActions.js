import { ClassificationByUserQuery } from '../queries/UserClassificationQuery';
import { loadClassification } from '../slices/GradesTableSlice';

/**
 * Funkce pro načítání klasifikací studenta pro zvolený semestr.
 * @param {string} selectedStudent - ID vybraného studenta.
 * @param {number} selectedSemester - Vybraný semestr.
 * @returns {Function} Funkce pro dispatch akce pro načtení klasifikací.
 */
export const fetchClassifications = (selectedStudent, selectedSemester) => async (dispatch) => {
  try {
    const studentIds = selectedStudent.split(",").map((id) => id.trim()); // Rozdělení vybraného studenta podle čárky
    const classificationResults = [];

    for (const studentId of studentIds) {
      const response = await ClassificationByUserQuery(studentId);
      const data = await response.json();

      if (selectedSemester >= 1 && selectedSemester <= 10 && data.data.result.classifications.length > 0) {
        const classifications = data.data.result || [];
        console.log("classifications: " + JSON.stringify(classifications, null, 2));
        //console.log("classifications orders: " + classifications[0].semester.order);
        console.log("semester: " + selectedSemester);

        // Filtruje klasifikace podle vybraného semestru
        /*const filteredClassifications = classifications.filter(
          (classification) => classification.semester.order.toString() === selectedSemester.toString()
        );*/
        const filteredClassifications = classifications.classifications.filter(
          (classification) => classification.semester && classification.semester.order && classification.semester.order.toString() === selectedSemester.toString()
        );
        console.log("filtered: " + JSON.stringify(filteredClassifications, null, 2));

        // Aktualizuje data s filtrovanými klasifikacemi
        const updatedData = { ...data.data, ...{ ...data.data.result, classifications: filteredClassifications } };
        console.log("updated: " + JSON.stringify(updatedData, null, 2));

        classificationResults.push(updatedData);
      }
      else {
        /*for (const studentId of studentIds) {
          const response = await ClassificationByUserQuery(studentId);
          const data = await response.json();*/
        const classification = data.data.result;
        classificationResults.push(classification);
        //}
      }
    }

    dispatch(loadClassification(classificationResults));
  } catch (error) {
    console.log(error);
  }
};
