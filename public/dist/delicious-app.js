import "../sass/style.scss";

import { $, $$ } from './modules/bling'
import './modules/jquery_snippets'
import './validation'
import './modules/backtoTop'

const approveForm = $$('.approve-form')

import approveEvent from './modules/approveEvent'

approveForm.on('submit', approveEvent)
