if (module.hot) {
    module.hot.accept()
}

import * as D3 from 'd3'
import '../css/main.css'

window.onload = () => {

    let paragraph = document.createElement('h1')
    let textContent = document.createTextNode('일반 JS 프로젝트입니다 실시간 변동중')
    paragraph.appendChild(textContent)
    document.body.append(paragraph)

}