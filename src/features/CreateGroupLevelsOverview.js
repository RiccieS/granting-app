const createLevelsOverview = (data) => {
    // Initialize an object to store the counts for each grade
    const levelsOverview = {};
  
    // Iterate over the data and count the grades for each group name
    data.forEach((item) => {
      const groupName = item.groupName;
      const levelName = item.levelName;
  
      if (!levelsOverview[groupName]) {
        // If the group name doesn't exist in the levels overview, initialize it
        levelsOverview[groupName] = {
          countOfA: 0,
          countOfB: 0,
          countOfC: 0,
          countOfD: 0,
          countOfE: 0,
          countOfF: 0,
        };
      }
  
      // Increment the count for the corresponding grade
      levelsOverview[groupName]['countOf' + levelName]++;
    });
  
    return levelsOverview;
  };

  export default createLevelsOverview;