import MenuManager from './MenuManager'
import OptionsManager from './OptionsManager'
import StateManager from './StateManager'

export default Component => StateManager(
    OptionsManager(
        MenuManager(
            Component
        )
    )
)