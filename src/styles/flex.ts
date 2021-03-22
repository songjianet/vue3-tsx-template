import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

interface FlexBaseConfig {
  justifyContent?: string,
  alignItems?: string
}

export const flexBaseConfig = (config: FlexBaseConfig): object  => {
  const obj = { display: 'flex' }

  return Object.assign(obj, config)
}
