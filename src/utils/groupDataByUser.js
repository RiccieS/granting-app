const groupDataByUser = (queryResult) => {
  const groupedData = {};

  queryResult.data.acsemesterPage.forEach(page => {
    page.classifications.forEach(data => {
      const userId = data.user.id;

      if (!groupedData[userId]) {
        groupedData[userId] = [];
      }

      groupedData[userId].push(data);
    });
  });

  return groupedData;
};

export default groupDataByUser;