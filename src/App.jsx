import Accoordian from './components/Accoordian/Accoordian'
import DynamicMenu from './components/DynamicMenu/DynamicMenu'
import MenuItems from './components/DynamicMenu/MenuItem'
import LoadMoreData from './components/LoadMoreData/LoadMoreData'
import QrCodeGenerator from './components/QrCodeGenerator/QrCodeGenerator'
import RandomColor from './components/RandomColor/RandomColor'
import ImageSlider from './components/imageSlider/ImageSlider'

function App() {

  return (
    <div className='overflow-x-hidden'>
        <Accoordian />
        <RandomColor />
        <ImageSlider url= {"https://picsum.photos/v2/list?page=1&"} limit={10} />
        {/* <LoadMoreData /> */}
        <DynamicMenu menuItems={MenuItems} />
        <QrCodeGenerator url={"https://api.qrserver.com/v1/create-qr-code/?size=250x250"} />
    </div>
  )
}

export default App
