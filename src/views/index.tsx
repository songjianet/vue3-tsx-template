import { defineComponent } from 'vue'
import indexPageClasses from '../styles/indexPage'

const index = defineComponent({
  name: 'index',
  setup() {
    return () => (
      <div class={ indexPageClasses.classes.layoutContainer }>
        <div>
          1
        </div>
        <div>
          2
        </div>
      </div>
    )
  }
})

export default index
