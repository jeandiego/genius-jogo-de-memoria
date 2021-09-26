import { CommonActions, useNavigation } from '@react-navigation/native';

export const resetNavigation = (routeName) => {
  const navigation = useNavigation();

  navigation.dispatch((state) => {
    // Remove the home route from the stack
    const routes = state.routes.filter((r) => r.name !== routeName);

    return CommonActions.reset({
      ...state,
      routes,
      index: routes.length - 1,
    });
  });
};
