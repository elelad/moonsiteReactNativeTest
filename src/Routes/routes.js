import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from '../Screens/home';
import Show from '../Screens/show';


const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    Show: {
        screen: Show,
        navigationOptions: {
            header: null
        }
    }
});



export default createAppContainer(AppNavigator);