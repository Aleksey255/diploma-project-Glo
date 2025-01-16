import {phoneMask} from './src/modules/phoneMask'
import {modal} from './src/modules/modal'
import { accordion } from "./src/modules/accordion";
import {menu} from './src/modules/menu'
import {modalFormula} from './src/modules/modalFormula'

accordion();
menu()
modal(".popup-repair-types",".popup-dialog-repair-types",".link-list",)
modal(".popup-privacy",".popup-dialog-privacy",".link-privacy",)
phoneMask()
modalFormula()
