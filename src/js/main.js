if (module.hot) {
    module.hot.accept()
}

import * as D3 from 'd3'
import '../css/main.css'

const sampleLinearData = [1000,2000,3000,4000,5000,6000,7000,8000]
const sampleLinearData2 = [4, 8, 15, 16, 23, 42];

window.onload = () => {

   D3.select(`body`).append("div").style("width","200px").style("height","200px").transition().duration(750).style("background-color","steelblue")
}



