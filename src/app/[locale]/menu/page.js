
import Menu from '@/src/app/[locale]/_components/menucomponent/Menucomponent'

import {menu} from "@/src/app/[locale]/_api/menu.json";

export default function Menupage(){
    return<Menu categories={menu}/>
}
