import { ClassificationByUserQuery } from '../queries/UserClassificationQuery';
import { loadClassification } from '../slices/GradesTableSlice';

export const fetchClassifications = (selectedStudent) => async (dispatch, getState) => {

  try {
    const response = await ClassificationByUserQuery(selectedStudent);
    const data = await response.json();
    const classification = data.data.result.classifications;
    dispatch(loadClassification(classification))
  } catch (error) {
    console.log(error)
  }
};