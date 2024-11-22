import './Form.scss'
export {default as Form} from './Form.hbs?raw'
import { Button } from '../Button/Button'
import Handlebars from 'handlebars'

Handlebars.registerPartial('Button', Button );