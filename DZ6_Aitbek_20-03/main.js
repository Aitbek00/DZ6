let arg = document.getElementById('input')
let add = document.getElementById('button')
let reverseText = () => {
    if (arg.value === ''){
        return false;
    } else {
        let text = document.createElement('p')
        text.setAttribute('id', 'text')
        document.body.append(text)
        text.innerText = arg.value.split('').reverse().join('');
        arg.value = ''
    }
}
