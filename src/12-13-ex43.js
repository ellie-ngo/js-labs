// using object
function buildCategoryMapV1(categoryList) {
    if (!Array.isArray(categoryList) || categoryList.length === 0) return {};
    const categoryMap = categoryList.reduce((map, category) => {
        map[category.id] = category;
        return map;
    }, {})
    return categoryMap;
  }
  
  // using Map
  function buildCategoryMapV2(categoryList) {
    if (!Array.isArray(categoryList) || categoryList.length === 0) return new Map([]);
    const categoryMap = new Map();
    categoryList.forEach(category => {
        categoryMap.set(category.id, category);
    })
    return categoryMap;
  }

  const categoryList = [
    { id: 1, name: 'iphone' },
    { id: 2, name: 'macbook' },
  ];

  const categoryList2 = [];

  console.log(buildCategoryMapV1(categoryList2));
  console.log(buildCategoryMapV2(categoryList2));