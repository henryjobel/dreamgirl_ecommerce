import './globals.css';
import {StoreProvider} from '../components/store-provider';
import CartDrawer from '../components/cart-drawer';
export const metadata={title:'Dear M. Girl - Curated for her',description:'Contemporary women fashion, thoughtfully curated.'};
export default function RootLayout({children}){return <html lang="en"><body><StoreProvider>{children}<CartDrawer/></StoreProvider></body></html>}
