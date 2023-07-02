import { ClassificationByUserQuery } from '../queries/UserClassificationQuery';
import { loadClassification } from '../slices/GradesTableSlice';

export const fetchClassifications = (selectedStudent, selectedSemester) => async (dispatch, getState) => {
  try {
    const studentIds = selectedStudent.split(",").map((id) => id.trim()); // Rozdělení vybraného studenta podle čárky
    const classificationResults = [];

    for (const studentId of studentIds) {
      const response = await ClassificationByUserQuery(studentId);
      const data = await response.json();

      if (selectedSemester >= 1 && selectedSemester <= 10 && data.data.result.classifications.length > 0) {
        const classifications = data.data.result.classifications || [];
        console.log("classifications: " + classifications);
        console.log("classifications orders: " + classifications[0].semester.order);
        console.log("semester: " + selectedSemester);

        // Filtruje klasifikace podle vybraného semestru
        const filteredClassifications = classifications.filter(
          (classification) => classification.semester.order.toString() === selectedSemester.toString()
        );
        console.log("filtered: " + filteredClassifications);

        // Aktualizuje data s filtrovanými klasifikacemi
        const updatedData = { ...data.data, result: { ...data.data.result, classifications: filteredClassifications } };
        console.log("updated: " + updatedData);

        classificationResults.push(updatedData);
      }
      else {
        for (const studentId of studentIds) {
          const response = await ClassificationByUserQuery(studentId);
          const data = await response.json();
          const classification = data.data.result;
          classificationResults.push(classification);
        }
      }
    }

    dispatch(loadClassification(classificationResults));
  } catch (error) {
    console.log(error);
  }
};
