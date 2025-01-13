import {phoneMask} from './src/modules/phoneMask'
import {modal} from './src/modules/modal'
import { accordion } from "./src/modules/accordion";
import {menu} from './src/modules/menu'
import {sendForm} from './src/modules/sendForm'

accordion();
menu()
modal(".popup-repair-types",".popup-dialog-repair-types",".link-list",)
phoneMask()
sendForm('feedback1','checkbox1')
sendForm('feedback2','checkbox2')
sendForm('feedback3','checkbox3')
sendForm('feedback4','checkbox4')
sendForm('feedback5','checkbox5')
sendForm('feedback6','checkbox6')

