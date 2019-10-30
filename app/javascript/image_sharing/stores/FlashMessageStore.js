import { observable } from 'mobx';

export default class FlashMessageStore {
  @observable flashMessage = '';
}
