import jss from 'jss'
import preset from 'jss-preset-default'
import { flexBaseConfig } from './flex'

jss.setup(preset())

const styles = {
  layoutContainer: {
    ...flexBaseConfig({ justifyContent: 'flex-start', alignItems: 'flex-start' }),
    height: '100vh',
    width: '100%',
    div: {
      width: 'calc(50% - 0.5px)',
      height: 'inherit',
      '&:first-child': {
        borderRight: '1px solid #e0e0e0'
      }
    }
  }
}

const indexPageClasses = jss.createStyleSheet(styles).attach()

export default indexPageClasses
