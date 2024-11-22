import './Login.scss'
import Handlebars from 'handlebars'
import {default as LoginTemplate} from './Login.hbs?raw'
import { Form } from '../../components'

Handlebars.registerPartial('Form', Form);

export const Login =  Handlebars.compile(LoginTemplate)({});