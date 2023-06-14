import { ClassificationByUserQuery } from '../queries/UserClassificationQuery';
import { loadClassification } from '../slices/GradesTableSlice';



export const fetchClassifications = (selectedStudent) => async (dispatch, getState) => {
 
  try {
    const studentIds = selectedStudent.split(",").map((id) => id.trim()); // Explode selectedStudent by comma
    const classificationResults = [];

    for (const studentId of studentIds) {
      const response = await ClassificationByUserQuery(studentId);
      const data = await response.json();
      const classification = data.data;
      classificationResults.push(classification);
    }
    //console.log(classificationResults);

    dispatch(loadClassification(classificationResults));
  } catch (error) {
    console.log(error);
  }
};
