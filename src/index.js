
// import './sortable/theme.css'
import './styles/index.less'
import Sortable from './sortable/Sortable.js'

// Grid demo
new Sortable(gridDemo, {
	animation: 220,
	ghostClass: 'blue-background-class'
});