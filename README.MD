# D3. Data-Driven-Documents

## 1.선행지식

- Scalable Vector Graphics (SVG)
    - https://svgontheweb.com/ko/

## 2.기초 메소드

### `select( "Selector" )` , `selectAll( "Selector" )`

```javascript 1.6

    import * as D3 from 'd3'

    // DOM의 단일 HTML 요소를 선택
    D3.select("Selector")

    // DOM의 다중 HTML 요소를 선택
    D3.selectAll("Selector")

```

<hr>

### `style( "Property" , "Value" )`

```javascript 1.6

    import * as D3 from 'd3'

    // DOM의 단일 HTML 요소를 선택하여 CSS 스타일을 적용
    D3.select("Selector").style("Property" , "Value")

    // DOM의 다중 HTML 요소를 선택하여 CSS 스타일을 적용
    D3.selectAll("Selector").style("Property" , "Value")

    // DOM의 다중 HTML 요소를 선택하여 핸들러를 통해 CSS 스타일을 적용
    D3.selectAll("Selector").style("Property" , fuction("data","index"){...})

```

<hr>

### `data( [...] )`

> `data()` 함수는 `select()` 함수와 체이닝 될 경우 선택된 HTML 요소들과 1:1 매칭되며 매칭되지 못한 여분의 데이터가 남게 될경우 `enter()`라는 함수의 반환으로 접근 할 수 있게된다.

```javascript 1.6

    import * as D3 from 'd3'

    /* DOM의 단일 HTML 요소를 선택 후 내부의 요소들을 선택하고
    * data를 style (data,index) 함수의 data 파라미터로 index 0 부터 
    * 순환하여 전달. 반복 횟수는 selectAll() 함수의 선택된 HTML 요소의 개수 만큼.
    */
    
    D3.select("Selector").selectAll("Selector").data([...]).style("Property" , function("data","index"){...})

```

<hr>

### `enter()`

> HTML 요소들과 매칭되지 못한 나머지 데이터

```javascript 1.6

    import * as D3 from 'd3'

    // DOM의 단일 HTML 요소를 선택 후 내부의 요소들을 선택하고 매치되지 못한 나머지 데이터에 접근
    D3.select("Selector").selectAll("Selector").data([...]).enter()

```

<hr>

### `append("Tagname")`

> HTML 요소 추가

```javascript 1.6

    import * as D3 from 'd3'

    // DOM의 단일 HTML 요소를 선택 후 내부의 요소들을 선택하고 매치되지 못한 나머지 데이터에 접근 후 남은 데이터의 수만큼 HTML 요소추가
    D3.select("Selector").selectAll("Selector").data([...]).enter().append("Tagname")

```

<hr>

### `exit()`

> 데이터와 매칭되지 못한 HTML 요소들

```javascript 1.6

    import * as D3 from 'd3'

    // DOM의 단일 HTML 요소를 선택 후 내부의 요소들을 선택하고 매치되지 못한 나머지 HTML 요소에 접근
    D3.select("Selector").selectAll("Selector").data([...]).exit()

```

<hr>

### `remove()`

> HTML 요소 삭제

```javascript 1.6

    import * as D3 from 'd3'

    // DOM의 단일 HTML 요소를 선택 후 내부의 요소들을 선택하고 매치되지 못한 나머지 HTML 요소들을 삭제
    D3.select("Selector").selectAll("Selector").data([...]).exit().remove()

```

<hr>

### `transition()`

> 마지막으로 선택된 Selection 객체에 대해 CSS Transition 속성을 부여

```javascript 1.6

    import * as D3 from 'd3'

    // DOM의 단일 HTML 요소를 선택 후 내부의 요소들을 선택하고 매치되지 못한 나머지 HTML 요소들을 삭제
    D3.select("Selector").append("Tagname").style("Property","Value").transition().style("background-color","steelblue")

```

<hr>

### `transition()`

> 마지막으로 선택된 Selection 객체에 대해 CSS Transition 속성을 부여

```javascript 1.6

    import * as D3 from 'd3'

    // DOM의 단일 HTML 요소를 선택 후 내부의 요소들을 선택하고 매치되지 못한 나머지 HTML 요소들을 삭제
    D3.select("Selector").append("Tagname").style("Property","Value").transition().style("background-color","steelblue")

```

<hr>





