import { createStackNavigator, createAppContainer } from "react-navigation";
import MyHeader from '../Components/header';
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

const options = {
    headerMode: 'none'
}


export default createAppContainer(AppNavigator);