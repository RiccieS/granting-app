import { ChartClassificationQuery } from '../queries/ChartClassificationQuery';

const fetchClassificationStatData = async (parameters) => {
  console.log("vybrany typ fetche: "+parameters[0]);
  if(parameters[0] === 1)
  {
    try {
      const [,programID] = parameters;
      const response = await ChartClassificationQuery();
      const data = await response.json();
      console.log(data);
      // Filtrovani dat podle programu
      // const filteredData = data.data.acsemesterPage.filter(item => item.classifications.semester.subject.program.id === selectedProgram);
  
      // Extract the classifications from the data
      const classifications = data.data.acsemesterPage[0].classifications;
      console.log("classifications: ", classifications);  // Print classifications
  
      // Filter the classifications based on the selectedProgram
      const filteredClassifications = classifications.filter(
        (classification) =>
          classification.semester.subject.program.id === programID
      );
      console.log("filteredClassifications: ", filteredClassifications);  // Print filteredClassifications
  
      // Create an array of objects with the desired attributes
      const filteredData = filteredClassifications.map((classification) => ({
        levelName: classification.level.name,
        programId: classification.semester.subject.program.id,
        groupName: classification.user.membership[0].group.name,
        groupId: classification.user.membership[0].group.id,
      }));
  
      console.log("filteredData: ", filteredData);  // Print filteredData
  
      return filteredData;
      // dispatch(setClassificationData(filteredData));
    } catch (error) {
      console.error('Chyba při dotazovani statistickych klasifikaci:', error);
    }
  }
  else if(parameters[0] === 2){
    try {
      const [,subjectID, semesterID] = parameters;
      const response = await ChartClassificationQuery();
      const data = await response.json();
      console.log(data);
      // Filtrovani dat podle programu
      // const filteredData = data.data.acsemesterPage.filter(item => item.classifications.semester.subject.program.id === selectedProgram);
  
      // Extract the classifications from the data
      const classifications = data.data.acsemesterPage[0].classifications;
      console.log("classifications: ", classifications);  // Print classifications
      console.log("parameters check: subjectID "+subjectID+" semesterID "+semesterID);
      // Filter the classifications based on the selectedProgram
      const filteredClassifications = classifications.filter(
        (classification) =>
          classification.semester.subject.id === subjectID && classification.semester.id === semesterID
      );
      console.log("filteredClassifications: ", filteredClassifications);  // Print filteredClassifications
  
      // Create an array of objects with the desired attributes
      const filteredData = filteredClassifications.map((classification) => ({
        levelName: classification.level.name,
        programId: classification.semester.subject.program.id,
        groupName: classification.user.membership[0].group.name,
        groupId: classification.user.membership[0].group.id,
      }));
  
      console.log("filteredData: ", filteredData);  // Print filteredData
  
      return filteredData;
      // dispatch(setClassificationData(filteredData));
    } catch (error) {
      console.error('Chyba při dotazovani statistickych klasifikaci:', error);
    }
  }
  else {
    return "none";
  }
};

export default fetchClassificationStatData;
