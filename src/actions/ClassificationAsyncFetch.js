import { ProgramClassificationQuery } from '../queries/ProgramClassificationQuery';

const fetchClassificationStatData = async (selectedProgram) => {
  console.log(selectedProgram);
  try {
    const response = await ProgramClassificationQuery();
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
        classification.semester.subject.program.id === selectedProgram
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
};

export default fetchClassificationStatData;
