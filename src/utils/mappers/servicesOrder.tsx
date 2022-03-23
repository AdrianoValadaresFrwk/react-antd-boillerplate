export const serviceOrderSortMapper = (
  sort: 'ascend' | 'descend'
): 'desc' | 'asc' => {
  switch (sort) {
    case 'ascend':
      return 'asc';
    case 'descend':
      return 'desc';
    default:
      return 'desc';
  }
};
