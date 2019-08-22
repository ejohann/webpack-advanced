import Hd from './hd_logo.png';

class Hdlogo{
    render(){
        const img = document.createElement('img');
        img.alt = 'Hanne Digital Logo';
        img.width = 300;
        img.src = Hd;
        
        img.classList.add('hd-logo');

        const body = document.querySelector('body');
        body.appendChild(img);
    }
}

export default Hdlogo;