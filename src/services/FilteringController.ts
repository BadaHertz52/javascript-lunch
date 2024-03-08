import { RestaurantList } from '../domains';
import { Category } from '../types';
import RestaurantListController from './RestaurantListController';

const FilteringController = {
  addEventToFiltering() {
    const filteringCategoryEl = document.getElementById('filtering-category');
    const filteringSortingEl = document.getElementById('filtering-sorting');

    filteringCategoryEl?.addEventListener(
      'change',
      this.showFilteredSortedList.bind(this),
    );
    filteringSortingEl?.addEventListener(
      'change',
      this.showFilteredSortedList.bind(this),
    );
  },

  showFilteredSortedList() {
    const { category, sorting } = this.private_getSelectedOption() as {
      category: string;
      sorting: string;
    };

    const restaurantList = new RestaurantList();

    const filteredList =
      category === 'all'
        ? restaurantList.list
        : restaurantList.filterRestaurantsByCategory(category as Category);

    const sortedList = filteredList[0]
      ? restaurantList.sortRestaurants(
          filteredList,
          sorting as 'name' | 'distance',
        )
      : undefined;

    RestaurantListController.injectRestaurantListHTML(sortedList);
  },

  private_getSelectedValue(selectElement: HTMLSelectElement) {
    const selectedIndex = selectElement?.selectedIndex;
    const selectedValue = selectElement?.options[selectedIndex].value;

    return selectedValue;
  },

  private_getSelectedOption() {
    const filteringCategory = document.getElementById(
      'filtering-category',
    ) as HTMLSelectElement;
    const filteringSorting = document.getElementById(
      'filtering-sorting',
    ) as HTMLSelectElement;

    return {
      category: this.private_getSelectedValue(filteringCategory),
      sorting: this.private_getSelectedValue(filteringSorting),
    };
  },
};

export default FilteringController;
