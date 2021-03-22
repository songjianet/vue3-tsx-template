import { defineComponent } from 'vue'
import globalClasses from './styles/public'

const App = defineComponent({
  name: 'App',
  setup() {
    return () => (
      <router-view class={ globalClasses } />
    )
  }
})

export default App
