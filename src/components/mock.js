export const mockClientItems = (itemsNumber = 100) => {
  const mockItems = [];
  const sports = ["basketball", "football", "running", "swimming"];
  const fruits = ["banana", "apple", "orange", "peach"];

  for (let i = 1; i < itemsNumber + 1; i += 1) {
    mockItems.push({
      name: `name-${i}`,
      address: `address-${i}`,
      height: i,
      weight: i,
      age: i,
      favouriteSport: sports[i % 4],
      favouriteFruits: fruits[i % 4]
    });
  }
  return mockItems;
};

export const mockServerItems = async (
  serverOptions
)=> {
  const { page, rowsPerPage, sortBy, sortType } = serverOptions;
  const serverItemsLength = 500;
  const serverTotalItems = mockClientItems(serverItemsLength);
  if (sortBy && sortType) {
    serverTotalItems.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortType === "desc" ? 1 : -1;
      if (a[sortBy] > b[sortBy]) return sortType === "desc" ? -1 : 1;
      return 0;
    });
  }
  await new Promise((s) => setTimeout(s, 2000));
  return {
    serverCurrentPageItems: serverTotalItems.slice(
      (page - 1) * rowsPerPage,
      page * rowsPerPage
    ),
    serverTotalItemsLength: serverItemsLength
  };
};
