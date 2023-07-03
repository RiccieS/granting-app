import { ChartClassificationQuery } from '../queries/ChartClassificationQuery';

/**
 * Načte statistická data klasifikací na základě zadaných parametrů.
 * @param {Array} parameters - Pole parametrů obsahující typ fetche a další potřebné informace
 * @returns {Promise<Array|String>} Pole filtrovaných dat nebo řetězec "none"
 */
const fetchClassificationStatData = async parameters => {
  console.log("vybrany typ fetche: " + parameters[0]);

  // Fetch typu 1 - Filtrace dat podle vybraného programu
  if (parameters[0] === 1) {
    try {
      const [, programID] = parameters;
      const response = await ChartClassificationQuery();
      const data = await response.json();
      console.log(data);

      // Extrahování klasifikací z dat
      const classifications = data.data.acsemesterPage[0].classifications;
      console.log("classifications: ", classifications); // Výpis klasifikací

      // Filtrování klasifikací na základě vybraného programu
      const filteredClassifications = classifications.filter(classification => classification.semester.subject.program.id === programID);
      console.log("filteredClassifications: ", filteredClassifications); // Výpis filtrovaných klasifikací

      // Vytvoření pole objektů se žádoucími atributy
      const filteredData = filteredClassifications.map(classification => ({
        levelName: classification.level.name,
        programId: classification.semester.subject.program.id,
        groupName: classification.user.membership[0].group.name,
        groupId: classification.user.membership[0].group.id
      }));
      console.log("filteredData: ", filteredData); // Výpis filtrovaných dat

      return filteredData;
    } catch (error) {
      console.error('Chyba při dotazování statistických klasifikací:', error);
    }
  }

  // Fetch typu 2 - Filtrace dat podle vybraného předmětu a semestru
  else if (parameters[0] === 2) {
    try {
      const [, subjectID, semesterID] = parameters;
      const response = await ChartClassificationQuery();
      const data = await response.json();
      console.log(data);

      // Extrahování klasifikací z dat
      const classifications = data.data.acsemesterPage[0].classifications;
      console.log("classifications: ", classifications); // Výpis klasifikací
      console.log("parameters check: subjectID " + subjectID + " semesterID " + semesterID);

      // Filtrování klasifikací na základě vybraného předmětu a semestru
      const filteredClassifications = classifications.filter(classification => classification.semester.subject.id === subjectID && classification.semester.id === semesterID);
      console.log("filteredClassifications: ", filteredClassifications); // Výpis filtrovaných klasifikací

      // Vytvoření pole objektů se žádoucími atributy
      const filteredData = filteredClassifications.map(classification => ({
        levelName: classification.level.name,
        programId: classification.semester.subject.program.id,
        groupName: classification.user.membership[0].group.name,
        groupId: classification.user.membership[0].group.id
      }));
      console.log("filteredData: ", filteredData); // Výpis filtrovaných dat

      return filteredData;
    } catch (error) {
      console.error('Chyba při dotazování statistických klasifikací:', error);
    }
  }

  // Fetch typu 3 - Filtrace dat podle vybraného předmětu
  else if (parameters[0] === 3) {
    try {
      const [, subjectID] = parameters;
      const response = await ChartClassificationQuery();
      const data = await response.json();
      console.log(data);

      // Extrahování klasifikací z dat
      const classifications = data.data.acsemesterPage[0].classifications;
      console.log("classifications: ", classifications); // Výpis klasifikací
      console.log("parameters check: subjectID " + subjectID);

      // Filtrování klasifikací na základě vybraného předmětu
      const filteredClassifications = classifications.filter(classification => classification.semester.subject.id === subjectID);
      console.log("filteredClassifications: ", filteredClassifications); // Výpis filtrovaných klasifikací

      // Vytvoření pole objektů se žádoucími atributy
      const filteredData = filteredClassifications.map(classification => ({
        levelName: classification.level.name,
        programId: classification.semester.subject.program.id,
        groupName: classification.user.membership[0].group.name,
        groupId: classification.user.membership[0].group.id
      }));
      console.log("filteredData: ", filteredData); // Výpis filtrovaných dat

      return filteredData;
    } catch (error) {
      console.error('Chyba při dotazování statistických klasifikací:', error);
    }
  } else {
    return "none";
  }
};
export default fetchClassificationStatData;