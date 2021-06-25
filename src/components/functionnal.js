import { h } from 'vue'
const DynamicHeading = (props, context) => {
    console.log(props)
    console.log(context)
    return h(`h${props.level}`, context.attrs, context.slots)
}
DynamicHeading.props = ['level']

export default DynamicHeading