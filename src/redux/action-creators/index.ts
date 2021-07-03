import * as UserActionCreators from "./user";
import * as TodoActionCreators from "./appearanceMode";

export default {
  ...TodoActionCreators,
  ...UserActionCreators
};