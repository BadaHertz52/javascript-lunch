import './assets/css/main.css';
import './components/CategoryIcon/style.css';
import './components/CategoryIcon/index.ts';
import './components/AddBtn/index.ts';
import './components/DefaultBtn/index.ts';
import './components/CustomInput/index.ts';
import './components/CustomTextarea/index.ts';
import './components/RestaurantFormModalInner/index.ts';
import './components/CustomModal/index.ts';
import './components/ErrorMessageBox/index.ts';
import './components/Restaurant/index.ts';
import RestaurantList from './domains/RestaurantList.ts';

import {
  RestaurantListController,
  StoreAddBtnController,
  FilteringController,
} from './services/index.ts';
import './components/DropBox/index.ts';

RestaurantListController.updateLocalStorage();
RestaurantListController.injectRestaurantListHTML(new RestaurantList().list);
StoreAddBtnController.addEventToBtn();
FilteringController.addEventToFiltering();
