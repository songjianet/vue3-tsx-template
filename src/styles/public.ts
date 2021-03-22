import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const defaultStyle = {
  margin: 0,
  padding: 0,
  backgroundColor: 'red'
}

const styles = {
  '@global': {
    html: defaultStyle,
    body: defaultStyle
  }
}

const globalClasses = jss.createStyleSheet(styles).attach()

export default globalClasses
