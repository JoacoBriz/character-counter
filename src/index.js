import { counterInput } from './js/components';
import './styles.css';

const input = document.querySelector('.counter-input-text');
input.value = '';
const btn  = document.querySelector('.counter-btn');
let textInput;


input.addEventListener('keyup', (event) => {
  textInput = event.target.value;
});

btn.addEventListener('click', () => {
    input.value = '';
    counterInput(textInput);
});