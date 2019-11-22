module.exports = createPagination = options => {
  const { createPage, items, itemsPerPage, component, context } = options;

  const arrayCopy = items.slice(0);
  const pages = [];

  while (arrayCopy.length) {
    pages.push(arrayCopy.splice(0, itemsPerPage));
  }

  pages.forEach((page, index) => {
    const humanPageNumber = index + 1;
    createPage({
      path: index === 0 ? pathPrefix : pathPrefix + `page-${humanPageNumber}/`,
      component: component,
      context: {
        ...context,
        pageItems: pages[index],
        totalPages: pages.length,
        currentPage: humanPageNumber,
        pathPrefix: pathPrefix
      }
    });
  });
};
